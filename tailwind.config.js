/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: '#0A0A0A',
                light: '#FAFAFA',
                'gray-100': '#F6F6F6',
                'gray-200': '#E5E5E5',
                'gray-300': '#D4D4D4',
                'gray-400': '#A3A3A3',
                'gray-500': '#737373',
                'gray-600': '#525252',
                'gray-700': '#404040',
                'gray-800': '#262626',
                'gray-900': '#171717',
            },
            fontFamily: {
                sora: ['Sora', 'sans-serif'],
                dm: ['DM Sans', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'float': 'float 3s ease-in-out infinite',
                'pulse-dot': 'pulseDot 2s ease-in-out infinite',
                'marquee': 'marquee 30s linear infinite',
                'spin-slow': 'spin 8s linear infinite',
                'bounce-slow': 'bounce 2s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                pulseDot: {
                    '0%, 100%': { opacity: '1', transform: 'translateY(0)' },
                    '50%': { opacity: '0.3', transform: 'translateY(8px)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
};
