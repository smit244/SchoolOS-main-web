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
        brand: {
          DEFAULT: '#4F46E5', // QBMS Indigo
          dark: '#3730A3',
          soft: '#EEF2FF',
          light: '#F5F3FF',
        },
        qbms: {
          amber: '#F59E0B',
          emerald: '#10B981',
          pink: '#EC4899',
          sky: '#0EA5E9',
          violet: '#8B5CF6',
          rose: '#F43F5E',
          navy: '#0E1330',
          ink: '#1E293B',
          mut: '#64748B',
          line: '#E8EAF3',
          soft: '#F7F8FD',
        },
        iconnect: {
          cyan: '#04BFFA',
          blue: '#0489DA',
          bgDark: '#001931',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Hind Vadodara', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'qbms-card': '0 10px 30px rgba(15, 23, 42, 0.06), 0 0 1px 1px rgba(255, 255, 255, 0.9) inset',
        'qbms-hover': '0 22px 50px rgba(15, 23, 42, 0.12), 0 0 1px 1px rgba(255, 255, 255, 1) inset',
        'iconnect-glow': '0 0 40px -10px rgba(4, 191, 250, 0.3)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
