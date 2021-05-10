/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  webpack(config, options) {
    return config;
  },
});
