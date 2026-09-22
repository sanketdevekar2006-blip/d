/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030C16',
          900: '#0A2540',
          850: '#0D3054',
          800: '#133D6B',
          700: '#1D518A',
        },
        emergency: {
          50: '#FFF3EE',
          100: '#FFE4D6',
          500: '#FF6B35',
          600: '#FF521B',
          700: '#D93B05',
        },
        cyanAccent: {
          400: '#38BDF8',
          500: '#00E5FF',
          600: '#00B4D8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar-sweep': 'radar 3s linear infinite',
        'wave-flow': 'wave 4s ease-in-out infinite',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
