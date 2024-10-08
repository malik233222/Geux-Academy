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
        'blue-custom':'#4285FF',
        'yellow-custom':'#FFFB63',
        'gray-custom':'#EFF0F5',
        'gray-custom-button':'#CDDCE5',
        'gray-jobs' :'#E4F5FFB2',
        'gray-students' :'#EFF0F5',
        'gray-career' :'#F8F8F8',
        'black-helpUs1' :'#20222E',
        'gray-helpUs2' :'#323547',
        
      },
      fontFamily: {
        pop: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
};
