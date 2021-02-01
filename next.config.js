/* eslint-disable linebreak-style */
/* eslint-disable no-dupe-keys */
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'file-loader',
          loader: 'url-loader',
        },
      ],
    });
    return config;
  },
};
