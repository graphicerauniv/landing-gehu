import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const requestedRoot = process.argv[2] || ".";
const serveRoot = path.resolve(root, requestedRoot);
const port = Number(process.env.PORT || 4321);

const types = new Map([
    [".css", "text/css; charset=utf-8"],
    [".html", "text/html; charset=utf-8"],
    [".js", "text/javascript; charset=utf-8"],
    [".json", "application/json; charset=utf-8"],
    [".png", "image/png"],
    [".jpg", "image/jpeg"],
    [".jpeg", "image/jpeg"],
    [".svg", "image/svg+xml"],
    [".webp", "image/webp"],
]);

function safePath(urlPath) {
    const decoded = decodeURIComponent(urlPath.split("?")[0]);
    const normalized = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
    return path.join(serveRoot, normalized);
}

async function resolveFile(urlPath) {
    let filePath = safePath(urlPath);
    const fileStats = await stat(filePath).catch(() => null);

    if (fileStats?.isDirectory()) {
        filePath = path.join(filePath, "index.html");
    }

    return filePath;
}

const server = http.createServer(async (request, response) => {
    try {
        const filePath = await resolveFile(request.url || "/");
        const fileStats = await stat(filePath).catch(() => null);

        if (!fileStats?.isFile()) {
            response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
            response.end("Not found");
            return;
        }

        response.writeHead(200, {
            "content-type": types.get(path.extname(filePath).toLowerCase()) || "application/octet-stream",
        });
        createReadStream(filePath).pipe(response);
    } catch {
        response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
        response.end("Server error");
    }
});

server.listen(port, "127.0.0.1", () => {
    console.log(`Serving ${path.relative(root, serveRoot) || "."} at http://127.0.0.1:${port}`);
    console.log(`Open http://127.0.0.1:${port}/lp/admissions/`);
});
