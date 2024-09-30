/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        displayB: ['32px', { lineHeight: '40px', letterSpacing: '-0.03em', fontWeight: '600' }],
        head20B: ['20px', { lineHeight: '28px', letterSpacing: '-0.03em', fontWeight: '600' }],
        head20M: ['20px', { lineHeight: '28px', letterSpacing: '-0.03em', fontWeight: '500' }],
        body16M: ['16px', { lineHeight: '24px', letterSpacing: '-0.01em', fontWeight: '500' }],
        body16R: ['16px', { lineHeight: '24px', letterSpacing: '-0.01em', fontWeight: '400' }],
        body14M: ['14px', { lineHeight: '20px', letterSpacing: '-0.01em', fontWeight: '500' }],
        body14R: ['14px', { lineHeight: '20px', letterSpacing: '-0.01em', fontWeight: '400' }],
        detail12M: ['12px', { lineHeight: '16px', letterSpacing: '-0.01em', fontWeight: '500' }],
        detail12R: ['12px', { lineHeight: '14px', letterSpacing: '-0.01em', fontWeight: '400' }],
        detail11M: ['11px', { lineHeight: '14px', fontWeight: '500' }],
        detail11R: ['11px', { lineHeight: '14px', fontWeight: '400' }],
        detail10M: ['10px', { lineHeight: '14px', fontWeight: '500' }],
        detail10R: ['10px', { lineHeight: '14px', fontWeight: '400' }],
        caption9M: ['9px', { lineHeight: '12px', letterSpacing: '0.01em', fontWeight: '500' }],
        caption9R: ['9px', { lineHeight: '12px', letterSpacing: '0.01em', fontWeight: '400' }],
      },
      colors: {
        grey: {
          '0': '#ffffff',
          '100': '#fafbfc',
          '200': '#e7e7e7',
          '300': '#dcdee3',
          '400': '#d9d9d9',
          '500': '#aeb2bc',
          '600': '#9499a5',
          '700': '#7f8493',
          '800': '#6b7180',
          '1000': '#474b55',
          '1300': '#121315',
          '2000': '#000000',
        },
        blue: {
          '100': '#fdfdff',
          '200': '#f5f8fd',
          '300': '#ebf0fb',
          '400': '#d6e0f7',
          '600': '#94b0ec',
          '700': '#6c92e4',
          '800': '#4272dd',
        },
        indigo: {
          '500': '#74c4ff',
          '600': '#48affa',
        },
        forest: {
          '300': '#d3e7c8',
          '400': '#bddbac',
          '500': '#a7ce91',
          '800': '#67a346',
        },
        squash: {
          '600': '#ffb945',
        },
        red: {
          '300': '#ffc8c8',
          '400': '#faa4a4',
          '500': '#ff7f7f',
          '800': '#e12121',
        },
      },
      animation: {
        float: 'toast-float .3s cubic-bezier(.04,.57,.8,.88)',
        fadeIn: 'fade-in .2s ease-in-out',
        fadeOut: 'fade-out .7s ease-in-out',
        sheetUp: 'sheet-up .3s ease-in',
        expand: 'expand .2s ease-in-out',
        collapse: 'collapse .2s ease-out',
        rotate: 'rotate .2s ease',
        rotateBack: 'rotateBack .2s ease',
      },
      keyframes: {
        'toast-float': {
          from: { bottom: 118 },
          to: { bottom: 128 },
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'fade-out': {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        'sheet-up': {
          from: { bottom: -500 },
          to: { bottom: 0 },
        },
        expand: {
          from: { height: 0 },
          to: { height: '100%' },
        },
        collapse: {
          from: { height: '100%' },
          to: { height: 0 },
        },
        rotate: {
          from: { transform: 'rotate(180deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        rotateBack: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(180deg)' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
