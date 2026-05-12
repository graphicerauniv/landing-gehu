import { cp, mkdir, readdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "lp");
const outputRoot = path.join(root, "dist");
const output = path.join(outputRoot, "lp");

try {
    const sourceStats = await stat(source);
    if (!sourceStats.isDirectory()) {
        throw new Error("lp exists but is not a directory");
    }
} catch {
    console.error("Build failed: expected an lp folder at the project root.");
    process.exit(1);
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(source, output, {
    recursive: true,
    filter: (filePath) => {
        const name = path.basename(filePath);
        return name !== ".DS_Store" && !name.startsWith("._");
    },
});

async function removeMetadataFiles(directory) {
    const entries = await readdir(directory, { withFileTypes: true });

    await Promise.all(entries.map(async (entry) => {
        const entryPath = path.join(directory, entry.name);

        if (entry.name === ".DS_Store" || entry.name.startsWith("._")) {
            await rm(entryPath, { recursive: true, force: true });
            return;
        }

        if (entry.isDirectory()) {
            await removeMetadataFiles(entryPath);
        }
    }));
}

await removeMetadataFiles(outputRoot);

console.log("Static build complete:");
console.log(`  ${path.relative(root, source)} -> ${path.relative(root, output)}`);
