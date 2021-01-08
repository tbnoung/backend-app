const express = require('express')
const app = express()

app.get('/backend', (req, res) => {
  res.send('Success Connect Serve Tbnoung')
})

app.listen(4000, () => {
  console.log('Sever up and running', 4000 )
})
