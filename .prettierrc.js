/* /** @type {import("prettier").Config} */
/* module.exports = {
	printWidth: 120,
	semi: true,
	singleQuote: false,
	jsxSingleQuote: false,
	tabWidth: 4,
	trailingComma: "es5",
	useTabs: true,
	plugins: [require.resolve("prettier-plugin-astro"), require.resolve("prettier-plugin-tailwindcss")],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
				singleQuote: false,
				useTabs: true,
				tabWidth: 4,
			},
		},
	],
}; */

/** @type {import("prettier").Config} */
export default {
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
