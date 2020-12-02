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
  "scripts": {
    "start": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}
```
### เพิ่ม script ให้ เรียก npm start เเล้วจะเป็นการรันโปรเจค (ไฟล์ package.json)
![](https://www.img.in.th/images/2e309d653b417159968d5a3934491ebb.png)



