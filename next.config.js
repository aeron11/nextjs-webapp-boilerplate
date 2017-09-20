/**
 * Created by zhangheng on 2017/8/25.
 */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { IgnorePlugin } = require('webpack');
const { ANALYZE } = process.env

module.exports = {
  webpack: (config,{dev})=> {
    //const prod = !dev;
    //config.plugins.push(new IgnorePlugin(/^\.\/locale$/));

    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    /*if (dev) {
      config.module.rules.push({
        test: /\.(jsx?|js)$/,
        loader: 'babel-loader',
        exclude: ['/node_modules/', '/.next/'],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        loader: 'babel-loader!raw-loader'
      },
      {
        test: /\.scss$/,
        loader: 'babel-loader!raw-loader!sass-loader'
      }
      );
    }*/
    return config
  }
}
