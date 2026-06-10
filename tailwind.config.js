// Escala teal Wasabi Tel — reemplaza las paletas frías de acento de Bolt.
const tealScale = {
  50: '#F0FDFA', 100: '#CCFBF1', 200: '#99F6E4', 300: '#5EEAD4', 400: '#2DD4BF',
  500: '#14B8A6', 600: '#0D9488', 700: '#0F766E', 800: '#115E59', 900: '#134E4A', 950: '#042F2E',
};
// Naranja Wasabi — acento secundario de la marca Tel.
const orangeScale = {
  50: '#FFF3ED', 100: '#FFE4D6', 200: '#FFC9AD', 300: '#FFA884', 400: '#FF8A5C',
  500: '#FF7847', 600: '#F2602B', 700: '#C2410C', 800: '#9A3412', 900: '#7C2D12', 950: '#431407',
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wsb: {
          green: '#14B8A6', 'green-bright': '#2DD4BF', 'green-deep': '#0D9488',
          'green-shadow': '#0F766E', 'green-data': '#0F766E',
          cream: '#FAFAF7', 'cream-2': '#F2EFE6', paper: '#FFFFFF',
          ink: '#0A0A0A', 'ink-2': '#1F1F1F', mute: 'rgba(10,10,10,0.55)',
          line: 'rgba(10,10,10,0.14)',
        },
        brand: {
          DEFAULT: 'var(--wsb-green)', bright: 'var(--wsb-green-bright)',
          deep: 'var(--wsb-green-deep)', shadow: 'var(--wsb-green-shadow)', data: 'var(--wsb-green-data)',
        },
        // Acentos fríos de Bolt → teal; naranja se conserva como secundario.
        teal: tealScale, green: tealScale, emerald: tealScale, cyan: tealScale, sky: tealScale,
        blue: tealScale, indigo: tealScale, violet: tealScale, purple: tealScale,
        fuchsia: tealScale, pink: tealScale, rose: tealScale, red: tealScale, lime: tealScale,
        orange: orangeScale, amber: orangeScale,
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: { sm: '4px', DEFAULT: '6px', md: '6px', lg: '8px', xl: '12px', pill: '999px' },
      boxShadow: {
        stamp: 'var(--wsb-shadow-stamp)',
        'stamp-sm': 'var(--wsb-shadow-stamp-sm)',
        'stamp-lg': 'var(--wsb-shadow-stamp-lg)',
        'stamp-ink': '6px 6px 0 #0A0A0A',
      },
      maxWidth: { shell: '1320px', 'shell-narrow': '920px' },
    },
  },
  plugins: [],
};
