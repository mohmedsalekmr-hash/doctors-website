/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0f172a', // Navy Blue - Professional & Trust
                    light: '#334155',   // Slate-700
                },
                accent: {
                    DEFAULT: '#c5a059', // Gold - Luxury
                    light: '#e6c88a',
                },
                surface: {
                    DEFAULT: '#ffffff',
                    cream: '#fcfbf7',   // Ivory/Cream - Warmth
                    gray: '#f8fafc',    // Cool Gray
                },
                text: {
                    main: '#0f172a',    // Dark Navy
                    light: '#64748b',   // Slate
                }
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'], // English Body
                heading: ['Outfit', 'sans-serif'],         // English Headings
                arabic: ['Cairo', 'sans-serif'],           // Arabic
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 1s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
