/** @type {import("astro").AstroUserConfig} */

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import tailwindcssNesting from "tailwindcss/nesting";
import mdx from "@astrojs/mdx";

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
		css: {
			postcss: {
				plugins: [tailwindcssNesting()],
			},
		},
	},
});
