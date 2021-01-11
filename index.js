const express = require('express')
const app = express()
var fs = require('fs')
app.get('/backend', (req, res) => {
  var data = {
      code: "200",
      data: [],
      message: "save data success",
      result: "SUCCESS"
    }
  // logfile.data.push(data)
  var savedata = JSON.stringify(data)
  // console.log('savedata', savedata);
  fs.appendFileSync('logfile.json', savedata + "\r\n")
  res.send('Success Connect Serve Tbnoung')
})

app.listen(4000, () => {
  console.log('Sever up and running', 4000 )
})
