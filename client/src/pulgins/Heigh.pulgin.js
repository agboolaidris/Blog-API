const pulgin = require("tailwindcss/plugin");

const heightOption = [
  "10vh",
  "20vh",
  "30vh",
  "40vh",
  "50vh",
  "60vh",
  "70vh",
  "80vh",
  "90vh",
  "100vh",
];

const heightFunc = heightOption.map((height) => {
  return {
    [`.h-${height}`]: { height },
  };
});

module.exports = pulgin.withOptions(() => {
  return function ({ addUtilities }) {
    addUtilities(heightFunc);
  };
});
