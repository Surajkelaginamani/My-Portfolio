/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080b10',
        bg2: '#0d1117',
        bg3: '#111620',
        surface: '#161c28',
        surface2: '#1e2638',
        border: '#1f2d42',
        border2: '#2a3a52',
        accent: '#00d4ff',
        accent2: '#0099cc',
        accent3: '#7b61ff',
        green: '#00ff9d',
        text: '#e8f0fe',
        text2: '#8ba5c9',
        text3: '#4e6a8a',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Mono', 'monospace'],
        outfit: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        popIn: {
          from: { opacity: '0', transform: 'scale(0.8) translateY(20px)' },
          to: { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        borderGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(0,212,255,0.4)' },
        },
        pulseAlpha: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease forwards',
        fadeIn: 'fadeIn 0.3s ease',
        popIn: 'popIn 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        slideIn: 'slideIn 0.2s ease',
        borderGlow: 'borderGlow 3s ease infinite',
        pulseAlpha: 'pulseAlpha 2s ease infinite',
      },
    },
  },
  plugins: [],
}