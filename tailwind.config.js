/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    daisyui: {
        themes: [
            {
                lightTheme: {
                    primary: "#114232",
                    secondary: "#87A922",
                    accent: "#FCDC2A",
                    neutral: "#F7F6BB",
                    "base-100": "#ffffff",

                    // Custom style
                    // ".btn-twitter": {
                    //     "background-color": "#1EA1F1",
                    //     "border-color": "#1EA1F1",
                    //     "text-transform":"uppercase"
                    // },
                    // ".btn-twitter:hover": {
                    //     "background-color": "#1C96E1",
                    //     "border-color": "#1C96E1",
                    // },
                },
            },
        ],
    },
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
};
