import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#2D433E'
      }
    },
  },
  plugins: [],
} satisfies Config

