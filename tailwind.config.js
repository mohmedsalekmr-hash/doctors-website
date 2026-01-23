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
                    DEFAULT: '#004AAD', // Professional Deep Blue
                    light: '#1E90FF',   // Bright Medical Blue
                    dark: '#00337C',
                },
                secondary: {
                    DEFAULT: '#E6F0FF', // Very Light Sky Blue
                    alt: '#F0F7FF',
                },
                accent: {
                    DEFAULT: '#D4AF37', // Refined Gold
                    silver: '#E5E7EB',
                },
                surface: {
                    DEFAULT: '#FFFFFF',
                    light: '#F9FBFF',
                    gray: '#F3F4F6',
                },
                text: {
                    dark: '#111827',    // Gray-900
                    base: '#374151',    // Gray-700
                    light: '#6B7280',   // Gray-500
                }
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
                heading: ['Outfit', 'system-ui', 'sans-serif'],
                arabic: ['Cairo', 'sans-serif'],
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            boxShadow: {
                'premium': '0 20px 50px rgba(0, 74, 173, 0.05)',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
