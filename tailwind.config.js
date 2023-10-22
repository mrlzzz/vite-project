//import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                vote: "vote 1s ease-in-out",
            },
            keyframes: {
                vote: {
                    "0%, 100%": {
                        transform: "rotate(0deg)",
                    },
                    "25%": {
                        transform: "rotate(-30deg)",
                    },
                    "75%": {
                        transform: "rotate(30deg)",
                    },
                },
            },
        },
    },
    plugins: [
        typography,
        // daisyui
    ],
    daisyui: {
        themes: ["dark"],
    },
};
