// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      xl: { max: "1279px" }
      // => @media (max-width: 1279px) { ... }
    },
    maxHeight: {
      "0": "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%"
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      "admin-topnav": "#1E2A31",
      "admin-body": "#22313A",
      "admin-card": "#2B3C46",
      "btn": "#D9424E",
      "btn-hovered": "#F24A57" 
    }),
    textColor: theme => ({
      ...theme("colors"),
      "admin-word": "#728EA0",
      "admin-title": "#DDF3FE",
      "admin-input": "#ADD0E8"
    }),
    borderColor: theme => ({
      ...theme("colors"),
      "admin-word": "#566C7C",
      "admin-title": "#C2D8E3",
      "admin-input": '#7C98AB'
    })
  },
  variants: {
    backgroundColor: ["hover", "focus", "active"],
    opacity: ["hover", "group-hover"],
    pointerEvents: ["group-hover"],
    transitionProperty: ["responsive", "hover", "focus", "group-hover"],
    translate: ["responsive", "hover", "group-hover"],
    borderStyle: ["responsive", "hover"],
    borderWidth: ["responsive", "hover"],
    borderColor: ["responsive", "hover", "focus"],
    display: ["responsive", "hover"],
    cursor: ["responsive", "hover"],
    textColor: ["responsive", "hover", "active", "group-hover"],
    cursor: ['hover']
  }
};
