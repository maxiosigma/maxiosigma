module.exports = {
   plugins: {
      "postcss-import": true,
      "postcss-url": {},
      autoprefixer: {},
   },
   preset: {
      // Change the postcss-preset-env settings
      autoprefixer: {
         grid: true,
      },
   },
};

//require("autoprefixer"), require("postcss-nested"),
