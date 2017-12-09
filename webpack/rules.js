export default [
  {
    // Use Babel for all JS
    test: /\.jsx?$/,
    exclude: /node_modules\//,
    loader: 'babel-loader'
  }, {
    test: /\.tsx?$/,
    exclude: /node_modules\//,
    use: {
      loader: 'awesome-typescript-loader',
      options: {
        transpileOnly: true,
        useTranspileModule: false,
        sourceMap: true,
      }
    }
  }, {
    test: /\.css$/,
    include: [/src\/styles\//, /node_modules\//],
    use: [
      {
        loader: 'style-loader', options: { sourceMap: true }
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: [
            require('precss')({}),
            require('postcss-cssnext')({}),
            require('postcss-custom-media')({})
          ]
        }
      }
    ]
  }, {
    test: /\.css$/,
    exclude: [/src\/styles\//, /node_modules\//],
    use: [
      {
        loader: 'style-loader', options: { sourceMap: true }
      },
      {
        loader: 'typings-for-css-modules-loader',
        options: {
          sourceMap: true,
          modules: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: [
            require('precss')({}),
            require('postcss-cssnext')({}),
            require('postcss-custom-media')({})
          ]
        }
      }
    ]
  },
  {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader?name=fonts/[name].[ext]'
  },
  // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
  { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
]
