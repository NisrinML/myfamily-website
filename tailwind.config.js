/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'darkgreen':{
          light:'#51a875',
        },
        'darkblue':{
          light:'#092535',
        },
        'white':{
          light:'#FFFFFF',
        },
        'lightblue':{
          light:'#166088',
        },
        'bluehover':{
          light:'#9DD3D8'
        },
        'greenhover':{
          light:'#B8DDB5',
        },
        'darkgreenhover':{
          light:'#2C8C72'
        },
      },
    },
  },
  plugins: [],
};
