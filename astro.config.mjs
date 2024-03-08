import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import tailwindcssNesting from "tailwindcss/nesting";
import { astroImageTools } from "astro-imagetools";
//import astroImagePlugin from "astro-imagetools/plugin";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    //site: "https://www.finarkurumsal.com/",
    integrations: [
        mdx(),
        tailwind({
            applyBaseStyles: false,
        }),
        astroImageTools,
        react(),
    ],
    vite: {
        //plugins: [astroImagePlugin],
        optimizeDeps: {
            exclude: ["imagetools-core"],
        },
        resolve: {
            alias: {
                "~": path.resolve(__dirname, "./src"),
            },
        },
        css: {
            postcss: {
                plugins: [tailwindcssNesting()],
            },
        },
    },
});
