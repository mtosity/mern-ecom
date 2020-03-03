// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
    },
    maxHeight: {
      "0": "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%"
    }
  },
  variants: {
    backgroundColor: ['hover', 'focus', 'active'],
    opacity: ['hover', 'group-hover'],
    pointerEvents: ['group-hover'],
    transitionProperty: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'group-hover'],
    borderStyle: ['responsive', 'hover'],
    borderWidth: ['responsive', 'hover'],
    borderColor: ['responsive', 'hover'],
    display: ['responsive', 'hover']
  },
};
