# ฟีเจอร์ที่เลือกทำ : การค้นหาหลักสูตรในระดับปริญญาเอก

## User Flow

![](https://github.com/boss26974/Devtool-final-62070139/blob/main/1.png)

user flow ของการค้นหาหลักสูตรในระดับปริญญาเอกจะประกอบด้วยขั้นตอนทั้งหมด 3 ขั้นตอนดังนี้
1. เข้าสู่หน้าค้นหาหลักสูตรปริญญาเอก
2. ทำการกรอกข้อมูลการค้นหาหลักสูตรที่ต้องการ
3. หน้าเว็บไซต์ทำการแสดงผลการค้นหาตามที่ผู้ใช้ต้องการ

## UI Flow

![](https://github.com/boss26974/Devtool-final-62070139/blob/main/4.png)

ในฟีเจอร์การค้นหาหลักสูตรในระดับปริญญาเอก จะมีหน้า UI ที่เกี่ยวข้องอยู่ทั้งหมดเพียง 1 หน้า ได้แก่
1. หน้าค้นหาหลักสูตรปริญญาเอก ใช้ในการค้นหาหลักสูตรปริญญาเอกตามความต้องการของผู้ใช้

## Acceptance Test

![](https://github.com/boss26974/Devtool-final-62070139/blob/main/2.png)

ในส่วนของ Acceptance Test จะมีอยู่ทั้งหมด 2 Test Case ดังนี้

Case No 1. search success เป็น test case ที่จะทดสอบการกรอกข้อมูลค้นหาหลักสูตรที่ตรงกับข้อมูลของหลักสูตรที่มีอยู่ในระบบ โดยคาดหวังว่าจะมีการแสดงผลการค้นหาขึ้นมาบนหน้าเว็บไซต์ตามที่ผู้ใช้ต้องการ

Case No 2. search Fail เป็น test case ที่จะทดสอบการกรอกข้อมูลค้นหาหลักสูตรที่ไม่ตรงกับหลักสูตรใดๆเลยในระบบ โดยคาดหวังว่าจะไม่มีผลการค้นหาใดๆแสดงขึ้นมาในหน้าเว็บไซต์

## project management tool

ในส่วนของ project management tool ที่เลือกใช้ในการกำหนด task ที่ต้องทำใน project นี้ เราได้เลือก trello มาใช้ในการแบ่ง task ต่างๆ

![](https://github.com/boss26974/Devtool-final-62070139/blob/main/3.png)

Link of trello : https://trello.com/b/WYsEEMiu/devtoolfinal62070139

## Technical

ในส่วนของ Technical จะแบ่งออกเป็น 3 ส่วน ดังนี้

### Frontend
ในส่วนของ Frontend จะมีขั้นตอนในการพัฒนาอยู่ทั้งหมด 5 ขั้นตอนดังนี้

1. ทำการวิเคราะห์และเลือกฟีเจอร์ที่ต้องการจะทำ
2. ทำการออกแบบ UI หน้า Frontend ของฟีเจอร์ที่เลือก
3. ทำการพัฒนา Frontend ของฟีเจอร์ที่เลือก ตาม UI ที่ได้ออกแบบไว้ โดยใช้ Vue.js
4. ทำการทดสอบระบบ Frontend ทั้งในส่วนของ unit test, component test และ E2E test โดยทำในรูปแบบของ Automated test
5. ทำการ build และ deploy project ส่วนของ Frontend ลงในเครื่อง localhost โดยใช้ docker

### Backend
ในส่วนของ Backend จะมีขั้นตอนในการพัฒนาอยู่ทั้งหมด 5 ขั้นตอนดังนี้

1. ทำการวิเคราะห์และเลือกฟีเจอร์ที่ต้องการจะทำ
2. ทำการออกแบบ api Backend ที่ให้บริการข้อมูลในฟีเจอร์ที่เลือก
3. ทำการพัฒนา Backend ของฟีเจอร์ที่เลือก ตาม api ที่ได้ออกแบบไว้ โดยใช้ express.js
4. ทำการทดสอบระบบ Backend ทั้งในส่วนของ unit test, component test และ E2E test โดยทำในรูปแบบของ Automated test
5. ทำการ build และ deploy project ส่วนของ Backend ลงในเครื่อง localhost โดยใช้ docker

### Database
ในส่วนของ Backend จะมีขั้นตอนในการพัฒนาอยู่ทั้งหมด 3 ขั้นตอนดังนี้

1. ทำการออกแบบ Database ในรูปแบบของ NoSQL เพื่อใช้ในการเก็บข้อมูลที่จำเป็นสำหรับฟีเจอร์ที่เลือกไว้
2. ทำการสร้าง Database ตามที่ได้ออกแบบไว้ โดยใช้ mongodb ในการพัฒนา
3. ทำการเชื่อมต่อ database เข้ากับส่วนของ backend เพื่อทำการใช้งาน

## วิธีการ run project

### frontend
1. ทำการ clone github ลงเครื่องโดยใช้ github desktop
2. ทำการเปิด command prompt ที่ directory ของ project ที่ clone มา
3. ทำการพิมพ์คำสั่ง cd frontend
4. ทำการพิมพ์คำสั่ง npm install เพื่อติดตั้ง dependencies และรอจนติดตั้งเสร็จ
5. เมื่อติดตั้งเสร็จ ให้ทำการพิมพ์คำสั่ง npm run serve เพื่อทำการ run project frontend
6. เมื่อ run เปิด frontend สำเร็จ ให้ทำการเปิดเว็บไซต์ที่ http://localhost:8080 เพื่อเข้าใช้งาน

### backend
1. ทำการ clone github ลงเครื่องโดยใช้ github desktop
2. ทำการเปิด command prompt ที่ directory ของ project ที่ clone มา
3. ทำการพิมพ์คำสั่ง cd backend
4. ทำการพิมพ์คำสั่ง npm install เพื่อติดตั้ง dependencies และรอจนติดตั้งเสร็จ
5. เมื่อติดตั้งเสร็จ ให้ทำการพิมพ์คำสั่ง npm run dev เพื่อทำการ run project frontend
6. เมื่อ run เปิด frontend สำเร็จ ให้ทดลองยิง postman แบบ get ไปที่ path http://localhost:3000/allcourses เพื่อเข้าใช้งาน

## วิธี build & deploy docker Frontend
1. ทำการ clone github ลงเครื่องโดยใช้ github desktop
2. ทำการเปิด command prompt ที่ directory ของ project ที่ clone มา
3. ทำการพิมพ์คำสั่ง cd frontend
4. ทำการพิมพ์คำสั่ง docker build -t pitchaya .
5. หลังทำการ build เสร็จแล้ว ให้ทำการพิมพ์คำสั่ง docker run -dp pitchaya เพื่อทำการ run project
