/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['SF Pro Display', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.4', fontWeight: '700' }], // 40px
        'h2': ['2rem', { lineHeight: '1.4', fontWeight: '600' }], // 32px
        'h3': ['1.75rem', { lineHeight: '1.5', fontWeight: '600' }], // 28px
        'body': ['1.0625rem', { lineHeight: '1.6', fontWeight: '400' }], // 17px
      },
      colors: {
        // Apple color system
        'apple-blue': '#007AFF',
        'apple-green': '#34C759',
        'apple-red': '#FF3B30',
        'apple-gray': {
          50: '#F9F9F9',
          100: '#F2F2F7',
          200: '#E5E5EA',
          300: '#D1D1D6',
          400: '#C7C7CC',
          500: '#AEAEB2',
          600: '#8E8E93',
          700: '#636366',
          800: '#48484A',
          900: '#1C1C1E',
        },
        'apple-black': '#000000',
        'apple-white': '#FFFFFF',
        // System gradient colors
        'system-primary': '#536976',
        'system-secondary': '#292e49',
        // Glassmorphism
        'glass': 'rgba(255,255,255,0.1)',
      },
      spacing: {
        // 8pt grid system
        '8': '0.5rem', // 8px
        '16': '1rem', // 16px
        '24': '1.5rem', // 24px
        '32': '2rem', // 32px
        '40': '2.5rem', // 40px
        '48': '3rem', // 48px
        '56': '3.5rem', // 56px
        '64': '4rem', // 64px
      },
      borderRadius: {
        'apple': '0.5rem', // 8px
        'apple-lg': '1rem', // 16px
      },
      boxShadow: {
        'apple': '0 1px 3px rgba(0,0,0,0.12)',
        'apple-lg': '0 4px 12px rgba(0,0,0,0.15)',
        'apple-hover': '0 10px 25px rgba(0,0,0,0.15)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
        'system-gradient': 'linear-gradient(135deg, #536976 0%, #292e49 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2s infinite linear',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
