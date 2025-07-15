const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  css: {
    // Tells Tailwind to create the 'base' layer for our plugin
    layers: {
      base: true,
    },
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          /* Page Title (e.g., "Your name") */
          fontSize: theme('fontSize.4xl'),
          fontWeight: theme('fontWeight.bold'),
          letterSpacing: theme('letterSpacing.tight'),
        },
        h2: {
          /* Section Headers (e.g., "About", "Experience") */
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.bold'),
          letterSpacing: theme('letterSpacing.tight'),
        },
        h3: {
          /* Job/Project Titles */
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.semibold'),
        },
        p: {
          /* Paragraph / Description Text */
          lineHeight: theme('lineHeight.7'),
          marginTop: theme('spacing.4'),
        },
        a: {
          /* Links */
          color: theme('colors.teal.600'),
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
        '@media (prefers-color-scheme: dark)': {
          a: {
            color: theme('colors.teal.400'),
          },
        },
      });
    }),
  ],
} 