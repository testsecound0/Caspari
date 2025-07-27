/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Italian-inspired color palette
        italian: {
          red: '#C8102E',
          green: '#009246', 
          cream: '#FFF8DC',
          gold: '#FFD700',
          olive: '#808000',
          burgundy: '#800020',
          terracotta: '#D2691E',
        },
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#C8102E', // Italian red
          600: '#009246', // Italian green
          700: '#800020', // Burgundy
          800: '#9d174d',
          900: '#831843',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#FFD700', // Italian gold
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#009246', // Italian green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'italian': ['Playfair Display', 'Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'gradient-italian': 'linear-gradient(135deg, #009246 0%, #C8102E 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FFD700 0%, #D2691E 100%)',
        'hero-pattern': "url('/hero-pattern.svg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'italian': '0 10px 25px -5px rgba(200, 16, 46, 0.2), 0 4px 6px -2px rgba(200, 16, 46, 0.05)',
        'warm': '0 10px 25px -5px rgba(255, 215, 0, 0.3), 0 4px 6px -2px rgba(255, 215, 0, 0.1)',
      }
    },
  },
  plugins: [],
} 