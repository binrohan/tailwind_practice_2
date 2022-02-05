module.exports = {
  theme: {
    screens: {},
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
