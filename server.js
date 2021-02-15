const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`<h1> Hello Express </h1>`)
})

app.get('/contact', (req, res) => {
  res.send(`<h1> Contact Me </h1> <p>Contact: alekh.gws@gmail.com </p>`)
})

app.get('/about', (req, res) => {
  res.send(`<h1> About Me </h1>`)
})

app.get('/hobbies', (req, res) => {
  res.send('<ul><li> Coding </li><li> Coding..</li><li> Coding...</li><li> Coding....</li></ul>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})