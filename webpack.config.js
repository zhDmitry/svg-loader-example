/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const TextExtractPlugin = require('extract-text-webpack-plugin');
const SpritePlugin = require('svg-sprite-loader/plugin');
const SpritePluginConfig = require('svg-sprite-loader/lib/config');
const Sprite = new SpritePlugin();
// this hack could help you if doesn't for as it is
// Sprite.NAMESPACE = SpritePluginConfig.NAMESPACE;
const CSSExtractor = new TextExtractPlugin('[name].css');

const config = {
  entry: './main',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'kek.js'
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: 'sprite.svg'
        }
      },
      {
        test: /\.css$/,
        loader: CSSExtractor.extract({ use: 'css-loader' })
      }
    ]
  },

  plugins: [CSSExtractor, Sprite]
};

module.exports = config;
