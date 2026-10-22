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
      // Navy + gold design system
      colors: {
        navy: '#0B1F3A', // primary: headings, dark sections
        'navy-2': '#13305A', // lighter navy for gradients and hovers
        brand: '#24537A', // the logo's own navy, used behind the logo
        gold: '#C9A227', // accent: buttons, highlights
        'gold-light': '#E8CB6A',
        tag: '#F4EBD3', // soft gold tint for pills and borders
        ink: '#5B6577', // body text
        navlink: '#3A4658',
        cream: '#FBF8F2', // ivory page background
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
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
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        pageIn: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'none' } },
        ping: { '75%, 100%': { transform: 'scale(2)', opacity: '0' } },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
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
        marquee: 'marquee 22s linear infinite',
        pageIn: 'pageIn 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        ping: 'ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite',
        gradient: 'gradientShift 6s ease infinite',
      },
    },
  },
  plugins: [],
};
