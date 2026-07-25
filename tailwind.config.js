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
        background: '#FAFAFA',
        vision: {
          glass: 'rgba(255, 255, 255, 0.6)',
          glassLight: 'rgba(255, 255, 255, 0.9)',
          glassBorder: 'rgba(255, 255, 255, 0.8)',
          glassDark: 'rgba(255, 255, 255, 0.3)',
          cyan: '#06B6D4',
          blueGlow: '#3B82F6',
          purple: '#8B5CF6',
          text: '#0F172A',
          textMuted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
        display: ['"Clash Display"', 'sans-serif'],
      },
      boxShadow: {
        'glass-panel': '0 8px 32px 0 rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 1)',
        'glow-cyan': '0 0 40px rgba(6, 182, 212, 0.15)',
        'glow-purple': '0 0 40px rgba(139, 92, 246, 0.15)',
        'dynamic-island': '0 20px 40px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 1)',
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
