/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        linen: '#FAF8F5',
        charcoal: '#2B2B2B',
        sage: '#8FA89B',
        terracotta: '#D9886C',
        sand: '#E6DEC8'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif']
      }
    }
  }
}
