import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': {
        DEFAUTL: '#E1E3E6',
        'bg': '#141414',
        'pr': '#363738'
      },
      
      'secondery': {
        DEFAULT: '#B0B1B6',
        'bg': '#232324',
      },

      'tertiary': {
        DEFAULT: '#76787A',
        'bg': '#202021'
      },

      'blue': '#0047BB',
      'dark-blue': '#001A72',
      'orange': '#FA4616',
      'white': '#FFFFFF',
      'black': '#101820',
      'transparent-black': '#00000080', 

      'accent': {
        DEFAULT : '#0047BB',
        'disable': '#424242',
      },
      'hover': {
        DEFAULT: '#003182',
        'transparent': {
          DEFAULT: '#0047BB1A',
          'contrast': '#FFFFFF'
        },
        'success': {
          DEFAULT: '#1B5E20',
          'transparent': '#2E7D321A'
        },
        'error': {
          DEFAULT: '#C62828',
          'transparent': '#D32F2F1A'
        }
      },
      'focus': {
        DEFAULT: '#4C7ECF',
        'transparent': {
          DEFAULT: '#0047BB80',
          'contrast': '#FFFFFF',
        },
        'success': {
          DEFAULT: '#6CA46F',
          'transparent': '#2E7D3280'
        },
        'error': {
          DEFAULT: '#E06D6D',
          'transparent': '#D32F2F80',
        }
      },
      'success': '#2E7D32',
      'error': '#D32F2F',
    },
    fontFamily: {
      'poppins': 'Poppins'
    },
    fontSize: {
      'sm': '14px',
      'md': '16px',
      'lg': '20px',
      'xl': '24px',
      '2xl': '34px',
      '3xl': '48px',
      '4xl': '60px',
      '5xl': '96px',
    },
    lineHeight: {
      'sm': '16px',
      'md': '20px',
      'lg': '24px',
      'xl': '32px',
      '2xl': '36px',
      '3xl': '56px',
      '4xl': '72px',
      '5xl': '112xp',
    },
    extend: {
      spacing: {
        '4.5': '18px',
        '5.5': '22px',
        '7.5': '30px',
        '13': '52px',
        '1vw': 'vw'
      },
      borderWidth: {
        '1': '1px'
      },
      gridTemplateColumns: {
        'header': 'auto 1fr auto auto',
        'emplyee-profile-card': 'auto 1fr'
      },
      screens: {
        '2sm': '480px',
        '3xl': '1560px',
      }
    },
  },
  plugins: [],
};
export default config;
