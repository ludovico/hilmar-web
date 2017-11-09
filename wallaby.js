module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      'src/**/*.ts',
      'src/**/*.jsx',
      'src/**/*.tsx',
      '!src/**/*.test.js',
      '!src/**/*.test.ts',
      '!src/**/*.test.jsx',
      '!src/**/*.test.tsx'
    ],

    tests: [
      'src/**/*.test.js',
      'src/**/*.test.ts',
      'src/**/*.test.jsx',
      'src/**/*.test.tsx'
    ],

    testFramework: 'tape',

    env: {
      type: 'node',
      runner: 'node'
    },

    workers: {recycle: true},

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel(),
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'es2015',
        jsx: 'React'
      })

    },

    preprocessors: {
      '**/*.js': file => require('babel-core').transform(
        file.content,
        {sourceMap: true, compact: false, filename: file.path, presets: ['env', 'react']})
    }
  };
};