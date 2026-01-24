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
                    DEFAULT: '#0F172A', // Deep Navy
                    blue: '#0284C7',    // Medical Blue
                    teal: '#0D9488',    // Clinical Teal
                    light: '#F8FAFC',   // Slate 50 Background
                },
                clinical: {
                    blue: '#0369A1',     // Deep Professional Blue
                    cyan: '#06B6D4',     // Bright Cyan
                    teal: '#0F766E',     // Deep Teal
                    slate: '#64748B',    // Slate Gray
                    bg: '#F8FAFC',       // Background
                },
                surface: {
                    DEFAULT: '#FFFFFF',
                    light: '#F8FAFC',
                    glass: 'rgba(255, 255, 255, 0.7)',
                },
                text: {
                    dark: '#0F172A',
                    base: '#334155',
                    muted: '#64748B',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Instrument Sans', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                arabic: ['Cairo', 'sans-serif'],
            },
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2rem',
                '5xl': '2.5rem',
                '6xl': '3rem',
            },
            boxShadow: {
                'clinical': '0 20px 50px -12px rgba(2, 132, 199, 0.08)',
                'soft': '0 10px 30px -5px rgba(0, 0, 0, 0.03)',
                'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.04)',
                'floating': '0 30px 60px -12px rgba(15, 23, 42, 0.12)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'reveal': 'reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards',
                'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
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
                    '50%': { transform: 'translateY(-12px)' },
                },
                reveal: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.02)' },
                }
            }
        },
    },
    plugins: [],
}


