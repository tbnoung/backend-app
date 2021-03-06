# การ Deploy express ด้วย Docker
* สร้าง file express ที่ต้องการ deploy
* สร้าง Dockerfile ไว้ที่ root ของ folder โปรเจค
* สร้าง .dockerignore ไว้ที่ root ของ folder โปรเจค
* Build ไฟล์ image 
  * Build บน local
  * Build บน vm
* run docker image

## สร้าง file express ที่ต้องการ deploy
* เครื่องที่ใช้งานจะต้องมีการติดต้อง node.js เพื่อให้สามารถเรียกใช้งานคำสั่ง npm
### การเรื่มต้นสร้าง express
```
  npm init
```

### ติดตั้ง express nodemon เเละ module ที่ต้องการใน โปรเจค
```
npm i express nodemon
```
#### ผลลัพธ์จะได้ไฟล์ nodemodule เพิ่มในส่วนของไฟล์ package.json ก็จะมี module ตามที่ติดตั้งไป
```
{
  "name": "create-express",
  "version": "1.0.0",
  "main": "index.js",
  "scripts":"",
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.6"
  }
}
```
### เพิ่ม script ให้ เรียก npm start เเล้วจะเป็นการรันโปรเจค (ไฟล์ package.json)
```
{
  "name": "create-express",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.6"
  }
}

```
### สร้างไฟล์ index.js 
```
const express = require('express')
const app = express()

app.get('/backend', (req, res) => {
  res.send('Success Connect Serve Tbnoung')
})

app.listen(3000, () => {
  console.log('Sever up and running', 3000 )
})
```
## สร้าง Dockerfile ไว้ที่ root ของ folder โปรเจค
```
FROM node

RUN mkdir -p /user/src/app
WORKDIR /user/src/app

COPY package.json /user/src/app
RUN npm install 

COPY . /user/src/app

EXPOSE 3000

CMD ["npm", "start"]
```
## สร้าง .dockerignore ไว้ที่ root ของ folder โปรเจค
```
node_modules
npm-debug.log
```
## Build ไฟล์ image บน vm
```
docker build . -t nameimage
```
## run docker image
```
docker run -d -p 3000:3000 nameimage
```



