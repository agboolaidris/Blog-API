module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Roboto", "sans-serif"],
    },

    extend: {
      inset: {
        0: 0,
        // ...

        "10vh": "10vh",
      },
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen/6": "calc(100vh / 6)",
        "screen/7": "calc(100vh / 7)",
        "screen/8": "calc(100vh / 8)",
        "screen/9": "calc(100vh / 9)",
        "screen/10": "calc(100vh / 10)",
      }),
      minHeight: (theme) => ({
        "screen-10": "10vh",
        "screen-20": "20",
        "screen-30": "30vh",
        "screen-40": "40vh",
        "screen-50": "50vh",
        "screen-60": "60vh",
        "screen-70": "70vh",
        "screen-80vh": "80vh",
        "screen-90": "90vh",
      }),
    },
  },
  variants: {
    extend: {},
  },
};
