/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      rotate:{
        '17':'15deg'
      },
      fontWeight:{
          'extra-bold':800,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      bggradientmask: {
        'gradient-radial':
        'radial-gradient(34.99px at 50% calc(100% - 48.00px), #000 99%, #0000 101%) calc(50% - 60px) 0/120px 100%, radial-gradient(34.99px at 50% calc(100% + 18.00px), #0000 99%, #000 101%) 50% calc(100% - 30px)/120px 100% repeat-x',
      },
      
    },
  },
  plugins: [],
  corePlugins:{
    aspectRatio:true
  },
  

}
