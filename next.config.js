const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  env: {
    URL: process.env.URL
  },
  i18n: {
    locales: ['pt-BR', 'en'],
    defaultLocale: 'pt-BR'
  }
});
