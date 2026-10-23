/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    screens: {
      'small-mobile': '320px',
      'xs': '400px',
      'mobile': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'custom-lg': '1100px',
      'xl': '1280px',
      '2xl': '1536px',
      'short': { 'raw': '(max-height: 750px)' },
    },
    extend: {
      gradientColorStops: {
        'white-pink': ['#FFFFFF', '#FFB6C1']
      },
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        'palette-1': '#FF9A8B',
        'palette-2': '#E7879B',
        'palette-3': '#FFC3A0',
        'palette-4': '#F5E1DA',
        'palette-5': '#FFF6F0',
        'dark-bg': '#121212',
        'dark-surface': '#1E1E1E',
        'dark-primary': '#E498A7',
        'dark-secondary': '#D384A1',
        'dark-text': '#E0E0E0',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      fontFamily: {
        sans: ['Quicksand', 'Inter', 'Arial', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Quicksand', 'Inter', 'Arial', 'sans-serif'],
        roboto: ['Roboto', 'Arial', 'sans-serif'],
        lato: ['Lato', 'Arial', 'sans-serif'],
        abril: ['Abril Fatface', 'Arial', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': ["url('/imgs/hero-pattern-5.webp')", "url('/imgs/hero-pattern-5.png')"],
        'hero-cover': ["url('/imgs/mowing-man.webp')", "url('/imgs/mowing-man.jpg')"],
        'about': ["url('/imgs/hedge-trimming-2.webp')", "url('/imgs/hedge-trimming-2.jpg')"],
        'contact': ["url('/imgs/contact-bg.webp')", "url('/imgs/contact-bg.jpg')"],
      },
      boxShadow: {
        'glow': '0 0 8px 2px rgba(255, 255, 255, 0.3)',
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
  },
  plugins: [require("@tailwindcss/forms")]
};
