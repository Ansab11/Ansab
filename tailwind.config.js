/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#EFFFFB',
        mint: '#50D890',
        ocean: '#4F98CA',
        charcoal: '#272727',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.5rem',
        'pill': '50px',
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(39, 39, 39, 0.04)',
        'md': '0 4px 16px rgba(39, 39, 39, 0.06)',
        'lg': '0 8px 32px rgba(39, 39, 39, 0.08)',
        'xl': '0 12px 48px rgba(39, 39, 39, 0.12)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

