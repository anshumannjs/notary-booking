/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        notaryDarkPurple : "#2a1b52",
        notaryYellow : "#e2fa0f",
        notaryGrey : "#d5cfe3",
        notaryTextPurple : "#645688",
        notarySideBarPurple : "#673AB7",
        notaryProgressBar : "#8b36fd",
        notaryDarkGrey : "#a5a0b0",
        notaryLightYellow : '#fef2be',
        notaryLightBlue : "#e5edfe",
        notaryDarkBlue : "#6761ec",
        notaryAlertRed : "#F4989C",
        primary: {
          50: '#f6f8fe',
          100: '#edf2fe',
          200: '#d3ddfc',
          300: '#b8c9fa',
          400: '#82a1f6',
          500: '#4d78f2',
          600: '#456cda',
          700: '#3a5ab6',
          800: '#2e4891',
          900: '#263b77',
        },
      }
    },
  },
  plugins: [require("@tailwindcss/forms"),
    require('tw-elements/dist/plugin')
  ],
}
