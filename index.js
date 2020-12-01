const express = require('express')
const app = express()

app.get('/backend', (req, res) => {
  res.send('Success')
})

app.listen(3000, () => {
  console.log('Sever up and running', 3000 )
})