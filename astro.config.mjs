// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    base: "/lp/admissions",
    outDir: "lp/admissions",
    build: {
        format: "file",
    },
});
