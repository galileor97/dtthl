module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: 'Libre, cursive',
        ragas: 'Ragas, cursive',
        mono: 'Mono, mono',
        reno: ['Reno Mono', 'mono']
      }
    },
  },
  plugins: [],
}
