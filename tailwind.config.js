/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0e8af0',
                secondary: '#00d084',
                accent: '#f1f8ff',
                dark: '#0f172a',
                'text-light': '#64748b',
            },
            borderRadius: {
                'sms': '8px',
                'mdd': '16px',
                'lgg': '24px',
            }
        },
    },
    plugins: [],
}
