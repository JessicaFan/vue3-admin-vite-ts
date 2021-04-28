module.exports = {
  purge: ["./index.html", "./src/*/*.{tsx,vue,jsx,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "login-bg": "url('./src/assets/img/login_bg.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
