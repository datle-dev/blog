const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
        'sans': ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        'sans-headings': ['IBM Plex Sans Condensed', ...defaultTheme.fontFamily.sans],
      },
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
