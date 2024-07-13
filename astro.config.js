//import path from "path";
//import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import tailwindcssNesting from "tailwindcss/nesting";
import mdx from "@astrojs/mdx";
//const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
	site: "https://fastro.vercel.app/",
	base: "/",
	trailingSlash: "always",
	integrations: [
		mdx(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
	markdown: { mode: "mdx" },
	vite: {
		//resolve: {
		//    alias: {
		//        "~": path.resolve(__dirname, "./src"),
		//    },
		//},
		css: {
			postcss: {
				plugins: [tailwindcssNesting()],
			},
		},
	},
});
