/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff3af2',
          blue: '#00d9ff',
          violet: '#7c3aed',
          lime: '#a3ff12',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(124, 58, 237, 0.6)',
        'glow-neon': '0 0 10px #00d9ff, 0 0 20px #00d9ff, 0 0 30px #00d9ff',
      },
      backgroundImage: {
        'grid-radial':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
        'dark-gradient':
          'linear-gradient(180deg, rgba(10,10,14,1) 0%, rgba(15,15,22,1) 40%, rgba(6,6,10,1) 100%)',
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 8px rgba(124,58,237,0.8)' },
          '50%': { textShadow: '0 0 18px rgba(124,58,237,1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        glow: 'glow 2.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
};
