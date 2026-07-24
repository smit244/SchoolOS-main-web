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
        primary: {
          DEFAULT: '#2563EB',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
        },
        secondary: {
          DEFAULT: '#06B6D4',
          400: '#22D3EE',
          500: '#06B6D4',
        },
        accent: {
          DEFAULT: '#10B981',
          500: '#10B981',
          600: '#059669',
        },
        iosBg: '#F8FAFC',
        iosCard: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'ios-glass': '0 20px 40px -15px rgba(0, 0, 0, 0.05), 0 0 1px 1px rgba(255, 255, 255, 0.8) inset',
        'ios-card': '0 10px 30px -5px rgba(37, 99, 235, 0.08), 0 0 1px 1px rgba(255, 255, 255, 0.9) inset',
        'ios-float': '0 25px 60px -15px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
