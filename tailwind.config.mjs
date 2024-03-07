/** @type {import("tailwindcss").Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                mavi: "#00b3e3",
            },
            fontFamily: {
                sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
                zilla: "'Zilla Slab', serif",
            },
            fontWeight: {
                zilla: "300",
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
                        maxWidth: "100%", // add required value here
                    },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
