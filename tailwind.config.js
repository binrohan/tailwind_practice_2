module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '4px',
        sm: '2rem',
        lg: '2rem',
        xl: '4rem',
        '2xl': '6rem',
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {},
    extend: {
      spacing: {},
      borderRadius: {},
      colors: {
        'primary': '#000',
        'secondary': '#fff',
        'accent': 'rgba(34, 197, 94, 1)',
        'accent-lite': 'rgba(74, 222, 128, 1)',
        'accent-dark': 'rgba(22, 163, 74, 1)',
        'warn': '',
        'caution': '',
        'info': '',
        'positive': '',
        'background': '#f7f7f7',
        'foreground': '#fff',
        'border': 'rgba(134, 239, 172, 1)',
        'border-lite': '',
        'border-dark': '',
        'text': '#231f20',
        'text-dark': '',
        'text-lite': '#767474',
        'text-secondary': '#fff',
        'text-secondary-dark': '',
        'text-secondary-lite': '',
        'headline': '',
        'headline-lite': '',
        'headline-dark': '',
        'footer': '#fbf5ed'
      },
      flex: {
        'full': '1 1 100%'
      }
    },
  },

  mode: 'jit',
  purge: {
    mode: 'layers',
    enabled: true,
    layers: [],
    content: ['./src/*.html'],
  },
  plugins: [require('@tailwindcss/forms')],
};
