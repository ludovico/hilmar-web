// Small server for testing prod
const compression = require('compression')
const path = require('path')
const express = require('express')
const fallback = require('express-history-api-fallback')
const app = express()

app.use(compression())

const root = path.resolve(__dirname, 'dist')
app.use(express.static(root))
app.use(fallback('index.html', { root }))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
