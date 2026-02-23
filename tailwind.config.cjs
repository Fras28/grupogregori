module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E30613',
        'background-dark': '#0a0a0a',
        'card-dark': '#141414',
        'border-dark': '#262626',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Bebas Neue', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}