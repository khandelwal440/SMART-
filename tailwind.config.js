/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // Bootstrap 5 breakpoints, so layouts switch at the same widths as smartankbiz.com
    screens: { sm: '576px', md: '768px', lg: '992px', xl: '1200px', xxl: '1400px' },
    container: {
      center: true,
      padding: '12px',
      screens: { sm: '540px', md: '720px', lg: '960px', xl: '1140px', xxl: '1320px' },
    },
    extend: {
      colors: {
        navy: '#225378',
        amber: '#f7a400',
        tag: '#dcf0ff',
        ink: '#757676',
        navlink: '#7c7878',
        cream: '#fef6e6',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      keyframes: {
        rotateme: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        'float-bob': {
          '0%, 100%': { transform: 'translateY(-30px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-bob4': {
          '0%, 100%': { transform: 'translateY(-50px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        moveleftbounce: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' },
        },
        dance: { '0%': { transform: 'scale(0.5)' }, '100%': { transform: 'scale(1.2)' } },
        dance2: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(25px,-25px,0)' },
          '100%': { transform: 'translate3d(0,-25px,25px)' },
        },
        spin: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        rotate20: 'rotateme 20s linear infinite',
        rotate10: 'rotateme 10s linear infinite',
        bob: 'float-bob 2s linear infinite',
        bob4: 'float-bob4 5s linear infinite',
        moveleft: 'moveleftbounce 4s alternate infinite',
        dance: 'dance 2s alternate infinite',
        dance2: 'dance2 4s alternate infinite',
        loader: 'spin 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
