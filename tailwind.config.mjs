/** @type {import("tailwindcss").Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

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
                mavi: "#00b3e3",
                mavi2: "#007bff",
                gok: "#14a4de",
                yesil: "#57c138",
                sari: "#ffbf00",
                turuncu: "#ff8000",
                red: "#db0000",
                pembe: "#d100bf",
                mor: "#8000ff",
                gri: "#444",
                siyah: "#333",
                footertext: "#b5c2ca",
                footerback: "#f5f8fa",
            },
            fontFamily: {
                sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
                zilla: "'Zilla Slab', serif",
            },
            fontWeight: {
                zilla: "400",
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
