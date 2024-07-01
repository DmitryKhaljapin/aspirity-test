import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#E1E3E6',
      'primary-bg': '#141414',
      'primary-br': '#363738',

      'secondery': '#B0B1B6',
      'secondery-bg': '#232324',

      'tertiary': '#76787A',
      'tertiary-bg': '#202021',

      'blue': '#0047BB',
      'dark-blue': '#001A72',
      'orange': '#FA4616',
      'white': '#FFFFFF',
      'black': '#101820', 

      'accent': '#0047BB',
      'success': '#2E7D32',
      'error': '#D32F2F',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
