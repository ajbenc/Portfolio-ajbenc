import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Sora"', 'sans-serif'],
      },
      colors: {
        raisin: '#0f2a1b',
        mist: '#f6faf6',
        meadow: '#e6f1ea',
        leaf: '#1f4f37',
        accent: {
          DEFAULT: '#3d7a5e',
          soft: '#9fd6b1',
          muted: '#1f4f37',
        },
        prose: {
          light: '#f6faf6',
          dark: '#5f7762',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg,#0f2a1b 0%,#1c5b3b 45%,#4b9869 100%)',
        'noise': "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence baseFrequency=\'0.6\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.05\'/%3E%3C/svg%3E')",
      },
      backgroundSize: {
        grid: '120px 120px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0px, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(32px)' },
        },
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 12s ease-in-out infinite',
        pulseGlow: 'pulseGlow 8s ease-in-out infinite',
        fadeSlideUp: 'fadeSlideUp 0.8s ease-out forwards',
      },
      boxShadow: {
        'ring-glow': '0 10px 40px rgba(61, 122, 94, 0.35)',
      },
    },
  },
  plugins: [forms, typography],
}

export default config
