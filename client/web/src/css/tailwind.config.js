// tailwind.config.js
module.exports = {
  theme: {
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
  },
};
