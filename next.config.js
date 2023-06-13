const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  env: {
    URL: process.env.URL
  }
});
