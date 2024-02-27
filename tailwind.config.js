/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                main: "#fbfcfd",
                tag: "#FF7724",
                rating: "#f3f9ff",
                highlight: "#FFF4ED",
                header: "#212731",
                discount: "#F2F4F7",
            },
            textColor: {
                accent_1: "#2c384a",
                accent_2: "#4b5665",
                accent_3: "#5c6874",
                accent_4: "#9FA9B3",
                link: "#1b88f4",
                list: "#626e79",
                rating: "#074786",
                navItem: "#D1D6DA",
                softRed: "#EF4C5D",
            },
            borderColor: {
                primary: "#e1e4e6",
            },
            colors: {
                blue: "#1b88f4",
            },
        },
    },
    plugins: [],
};
