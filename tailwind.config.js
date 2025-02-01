/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgb(255, 255, 255), rgb(239, 235, 227) 100%)',
        'card-bg':'rgb(239, 235, 227)',
        
      }
    }
  }
}