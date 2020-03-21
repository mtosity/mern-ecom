// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      lg: { max: "1200px" },
      md: { max: "992px" },
      sm: { max: "768px" },
      xs: { max: "576px" }
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
      btn: "#D9424E",
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
      "admin-input": "#7C98AB"
    })
  },
  variants: {
    backgroundColor: ["hover", "focus", "active"],
    opacity: ["hover", "group-hover"],
    pointerEvents: ["group-hover"],
    transitionProperty: ["hover", "focus", "group-hover"],
    translate: ["hover", "group-hover"],
    borderStyle: ["hover"],
    borderWidth: ["hover"],
    borderColor: ["hover", "focus"],
    display: ["responsive", "hover", "group-hover"],
    cursor: ["hover"],
    textColor: ["hover", "active", "group-hover"],
    boxShadow: ['group-hover', 'hover'],
    rotate: ['group-hover'],
  }
};
