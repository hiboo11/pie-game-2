/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0B0B0C',
          900: '#121214',
          850: '#161619',
          800: '#1D1D22',
          700: '#2A2A32',
          600: '#3D3D48',
        },
        cream: {
          50: '#FDFCFB',
          100: '#F5F0EB',
          200: '#EBE3D9',
          300: '#DDD2C3',
          400: '#C7B8A3',
          500: '#AFA08B',
        },
        champagne: {
          100: '#FAF4E5',
          200: '#F4E6BF',
          300: '#EBD48E',
          400: '#E2BF5C',
          500: '#D4AF37', // Pure luxury gold
          600: '#B89223',
          700: '#927217',
          800: '#6E5513',
          900: '#4A380D',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 25px 2px rgba(212, 175, 55, 0.12)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.45)',
        'inner-gold': 'inset 0 1px 2px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
