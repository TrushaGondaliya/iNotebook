const connectToMongo  = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = 3000

app.get('/firstAPI', (req, res) => {
  res.send('Hello Trusha, this is my first API!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})