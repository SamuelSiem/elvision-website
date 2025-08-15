import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: '#2900BD', // Deep Electric Blue
        'primary-light': '#3C3CFF', // Lighter version
        
        // Background Colors
        darker: '#0A0E23', // Midnight Navy
        dark: '#121212', // Off-Black
        
        // Accent Colors
        accent: '#A6B1FF', // Soft Lavender Blue
        'accent-light': '#C9D6FF', // Light Sky Blue
        
        // Text Colors
        main: '#FFFFFF', // Pure White
        'main-secondary': '#D3D3D3', // Light Gray
        
        // Additional UI Colors
        gray: {
          600: '#4A4A5C', // Steel Gray (Light)
          700: '#2E2E3A', // Steel Gray (Dark)
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, #2900BD, #3C3CFF)',
        'gradient-accent': 'linear-gradient(to right, #A6B1FF, #C9D6FF)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config 