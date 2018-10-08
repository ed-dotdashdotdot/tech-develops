const express = require('express')
const app = express()

app.use('/', express.static('public'))
app.use('/hello', express.static('public/hello.html'))
app.use('/there', express.static('public/there.html'))
app.use([
  '/users',
  '/user'
], express.static('public/users.html'))
app.use('/user/*', express.static('public/user.html'))

// app.get('/', (req, res) => res.send('index'))
// app.get('/hello', (req, res) => res.send('hello'))
// app.get('/there', (req, res) => res.send('there'))

app.get('/api/user/:user/age/:age', function (req, res) {
  res.send(req.params)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
