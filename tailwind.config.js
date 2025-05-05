/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    screens: {
      'small-mobile': '320px',
      'mobile': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'custom-lg': '1100px',
      'xl': '1280px',
      '2xl': '1536px',
      'short': {'raw': '(max-height: 750px)'},
    },
    extend: {
      gradientColorStops: {
        'white-pink': ['#FFFFFF', '#FFB6C1']
      },
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        'palette-1': '#FF9A8B', // peach
        'palette-2': '#FFB6C1', // pink
        'palette-3': '#FFC3A0', // light peach
        'palette-4': '#F5E1DA', // beige
        'palette-5': '#FFF6F0', // light beige/cream
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'Arial', 'sans-serif'],
        roboto: ['Roboto', 'Arial', 'sans-serif'],
        lato: ['Lato', 'Arial', 'sans-serif'],
        abril: ['Abril Fatface', 'Arial', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
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
