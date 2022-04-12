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
      },
      boxShadow: {
        'button' : '0px 4px 4px rgba(255, 3, 3, 0.25)'
      }
    },
  },
  plugins: [],
}
