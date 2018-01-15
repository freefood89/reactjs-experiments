var express = require('express')
var bodyParser = require('body-parser')
var posts = require('./posts.json')

console.log(`Loaded ${posts.length} posts`)
app = express()

// parse application/json
app.use(bodyParser.json())

app.get('/posts', (req, res) => {
	res.json({
    posts: posts,
    count: posts.length,
  })
})

app.post('/posts', (req, res) => {
  res.send('Received Post')
})

var port = 8000
console.log(`Listening on ${port}`)
app.listen(port)
