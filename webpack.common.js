module.exports = {
  output: {
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  mode: 'production',
  externals: [
    {
      react: 'React'
    }
  ]
}