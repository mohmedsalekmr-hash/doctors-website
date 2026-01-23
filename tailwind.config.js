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
                    DEFAULT: '#0F172A', // Deep Midnight/Charcoal
                    blue: '#004AAD',     // High-End Medical Blue
                    light: '#1E40AF',
                },
                luxury: {
                    ivory: '#FDFBF7',    // Premium Cream Background
                    gold: '#C5A572',     // Muted Champagne Gold
                    charcoal: '#1A1A1A', // Rich Dark Text
                    blue: '#F0F7FF',     // Soft Medical Blue
                    slate: '#475569',    // Elegant Gray
                },
                accent: {
                    DEFAULT: '#C5A572',
                    pearl: '#F8FAFC',
                },
                surface: {
                    DEFAULT: '#FFFFFF',
                    cream: '#FAF9F6',
                    glass: 'rgba(255, 255, 255, 0.7)',
                },
                text: {
                    dark: '#0F172A',
                    muted: '#64748B',
                    gold: '#B68D40',
                }
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
                heading: ['Outfit', 'system-ui', 'sans-serif'],
                serif: ['Playfair Display', 'serif'], // For ultra-luxury touches
                arabic: ['Cairo', 'sans-serif'],
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
                '6xl': '3rem',
            },
            boxShadow: {
                'premium': '0 25px 60px -15px rgba(0, 0, 0, 0.05)',
                'luxury': '0 10px 40px -10px rgba(197, 165, 114, 0.15)',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.04)',
                'floating': '0 30px 60px -12px rgba(0, 0, 0, 0.08)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'fade-in': 'fadeIn 1.2s ease-out forwards',
                'float': 'float 8s ease-in-out infinite',
                'reveal': 'reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards',
                'scale-in': 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                reveal: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}

