/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#101010',
        surface: '#181818',
        primary: '#6b0c00', // Cor primária atualizada
        secondary: '#38bdf8',
        accent: '#f472b6',
        text: '#FFFFFF',
        'text-secondary': '#A3A3A3',
        border: '#2F2F2F',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'subtle-glow': 'subtleGlow 4s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtleGlow: {
          '0%': { boxShadow: '0 0 10px -5px #6b0c00' },
          '100%': { boxShadow: '0 0 25px -5px #6b0c00' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(107, 12, 0, 0.15)',
        'glow-lg': '0 0 40px rgba(107, 12, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
