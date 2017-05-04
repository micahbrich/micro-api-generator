const { send, json } = require('micro')
const post = require('micro-post')
const compress = require('micro-compress')
const { handleErrors, createError } = require('micro-boom')
const cors = require('micro-cors')({
  allowMethods: ['POST', 'OPTIONS'],
  origin: '*'
})

let app = post(async (req, res) => {
  const data = await json(req)
  return data
})

app = handleErrors(app)
app = compress(app)
app = cors(app)
module.exports = app
