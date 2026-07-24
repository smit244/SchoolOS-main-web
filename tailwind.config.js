/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#000000',
        vision: {
          glass: 'rgba(255, 255, 255, 0.05)',
          glassLight: 'rgba(255, 255, 255, 0.1)',
          glassBorder: 'rgba(255, 255, 255, 0.15)',
          cyan: '#00F0FF',
          blueGlow: '#0033FF',
          purple: '#8A2BE2',
          text: '#FFFFFF',
          textMuted: 'rgba(255, 255, 255, 0.6)',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'glass-panel': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'glow-cyan': '0 0 20px rgba(0, 240, 255, 0.5)',
        'glow-purple': '0 0 30px rgba(138, 43, 226, 0.5)',
        'dynamic-island': '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.2)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #0033FF 0deg, #8A2BE2 180deg, #00F0FF 360deg)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
