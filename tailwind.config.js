/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'be-vietnam': ['"Be Vietnam Pro"', 'Inter', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        // Bảng màu chính - Mevabe Brand Colors
        primary: {
          50: '#e6f7ff',
          100: '#bae7ff',
          200: '#7dd3fc',
          300: '#38bdf8',
          400: '#0ba6df', // Màu chính #0BA6DF
          500: '#0891b2',
          600: '#0e7490',
          700: '#155e75',
          800: '#164e63',
          900: '#0c4a6e',
        },
        // Màu phụ - Gradient và accent colors
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Màu accent - Warm colors cho highlights
        accent: {
          50: '#fef3f2',
          100: '#fee4e2',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        // Màu success - Green tones
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Màu warning - Orange/Yellow tones  
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Mint colors for warm pastel theme
        mint: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        }
      },
      // Gradient backgrounds
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0ba6df 0%, #0891b2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)',
        'gradient-accent': 'linear-gradient(135deg, #fb7185 0%, #f43f5e 100%)',
        'gradient-warm': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        'gradient-cool': 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
        'gradient-hero': 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
      },
      // Box shadows with brand colors
      boxShadow: {
        'primary': '0 4px 14px 0 rgba(11, 166, 223, 0.15)',
        'primary-lg': '0 10px 25px 0 rgba(11, 166, 223, 0.2)',
        'secondary': '0 4px 14px 0 rgba(56, 189, 248, 0.15)',
        'accent': '0 4px 14px 0 rgba(244, 63, 94, 0.15)',
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
      },
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'scale-x-in': 'scaleXIn 0.8s ease-out 0.5s both',
        'gradient': 'gradient 3s ease infinite',
        'bounce-slow': 'bounceGentle 2s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      // Custom keyframes (these are already defined in globals.css but adding for reference)
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleXIn: {
          'from': { transform: 'scaleX(0)' },
          'to': { transform: 'scaleX(1)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
      }
    },
  },
  plugins: [],
};
