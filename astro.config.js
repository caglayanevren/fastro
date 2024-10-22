/** @type {import("astro").AstroUserConfig} */

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import tailwindcssNesting from "tailwindcss/nesting";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://fastro.vercel.app/",
	base: "/",
	output: "static",

	integrations: [
		react(),
		mdx(),
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
	],

	markdown: { mode: "mdx" },

	vite: {
		css: {
			postcss: {
				plugins: [tailwindcssNesting()],
			},
		},
	},
});
