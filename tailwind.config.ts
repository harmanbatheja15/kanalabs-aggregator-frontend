import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {

    extend: {

      fontFamily: {
        inter: ["Inter"],
        manrop: ['Manrope']
      },
      screens: {
        xd: '0px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        sxl: '1200px',
        xl: '1980px',
        bxl: '2560px',
        xxl: '1000000px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

    },
  },
  plugins: [],
}
export default config
