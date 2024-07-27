/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '"" !important' ,
            },
            'code::after': {
              content: '"" !important',
            },
          },
        },
      },
    },
  },
	plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}
