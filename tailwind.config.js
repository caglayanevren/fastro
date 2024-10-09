/** @type {import("tailwindcss").Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		container: {
			center: true,
			screens: {
				sm: "576px",
				md: "768px",
				lg: "1024px",
				xl: "1140px",
			},
		},
		extend: {
			colors: {
				mavi: "#00b3e3" /*009fc9*/,
				mavi2: "#007bff",
				gok: "#14a4de",
				yesil: "#57c138",
				sari: "#ffbf00",
				turuncu: "#ff8000",
				red: "#db0000",
				pembe: "#d100bf",
				mor: "#8000ff",
				gri: "#444",
				gri2: "#e1e8ed",
				gri3: "#808080",
				gri4: "#f5f8fa",
				siyah: "#333",
				footertext: "#4c5255",
				footerback: "#eef3f6",
			},
			fontFamily: {
				sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
				zilla: "'Zilla Slab', serif",
			},
			fontWeight: {
				zilla: "400",
			},
			fontSize: {
				52: "52px",
			},
			gridTemplateColumns: {
				"3/6": "33.3% 66.6%",
			},
			typography: {
				DEFAULT: {
					css: {
						color: "#333",
						a: {
							color: "#00b3e3",
							"&:hover": {
								color: "#0056b3",
							},
						},
						maxWidth: "100%",
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
