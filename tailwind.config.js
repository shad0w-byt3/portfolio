/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0A0A0A',
          card: '#121212',
          primary: '#00FF9C',
          secondary: '#2F81F7',
          text: '#E5E7EB',
          muted: '#9CA3AF',
          'dark-overlay': 'rgba(10, 10, 10, 0.8)',
        }
      },
      fontFamily: {
        futura: ['Orbitron', 'Rajdhani', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        body: ['Inter', 'Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scanline': 'scanline 8s linear infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px #00FF9C, 0 0 20px #00FF9C' },
          '100%': { boxShadow: '0 0 20px #00FF9C, 0 0 40px #00FF9C, 0 0 60px #00FF9C' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0, 255, 156, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 156, 0.03) 1px, transparent 1px)',
        'scanline-overlay': 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)',
      },
      boxShadow: {
        'neon-primary': '0 0 10px #00FF9C, 0 0 20px rgba(0, 255, 156, 0.5)',
        'neon-secondary': '0 0 10px #2F81F7, 0 0 20px rgba(47, 129, 247, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 255, 156, 0.15)',
      },
    },
  },
  plugins: [],
}
