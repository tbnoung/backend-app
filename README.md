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
