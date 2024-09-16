/** @type {import("astro").AstroUserConfig} */

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import tailwindcssNesting from "tailwindcss/nesting";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import nodejs from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	site: "https://fastro.vercel.app/",
	base: "/",
	//trailingSlash: "always",
	output: "hybrid",

	integrations: [
		react(),
		mdx(),
		tailwind({
			applyBaseStyles: false,
		}),
	],

	markdown: { mode: "mdx" },

	vite: {
		css: {
			postcss: {
				plugins: [tailwindcssNesting()],
			},
		},
	},

	adapter: nodejs({
		mode: "middleware",
	}),
});
