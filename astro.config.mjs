// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    base: "/lp",
    outDir: "lp",
    build: {
        format: "file",
    },
});
