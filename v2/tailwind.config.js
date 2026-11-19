/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        contexq: {
          blue: '#328CFF',
          'blue-hover': '#2574E0',
          'blue-light': '#EBF3FF',
          navy: '#06111F',
          'navy-secondary': '#08182B',
          'navy-dark': '#040B14',
          light: '#F5F8FC',
          text: '#06111F',
          'text-secondary': '#687B91',
          'border-subtle': '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'widget': '16px',
        'bubble': '14px',
      },
      boxShadow: {
        'widget': '0 12px 40px -8px rgba(6, 17, 31, 0.25), 0 4px 12px -2px rgba(6, 17, 31, 0.1)',
        'launcher': '0 8px 24px -4px rgba(50, 140, 255, 0.45)',
        'card-subtle': '0 1px 3px rgba(6, 17, 31, 0.05)',
      }
    },
  },
  plugins: [],
}

