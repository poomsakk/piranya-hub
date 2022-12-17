# PiranYa Hub - Complete ✅

โปรเจคนี้ส่วนหนึ่งของรายวิชา Software architecture and design / This project is part of the Software architecture and design course.

### Details
เว็บไซต์ค้นหาหอพักที่อยู่ใกล้ สจล. มีระบบทีี่ให้เจ้าของหอมาลงโพสประกาศ <br />
Website to search for lodge near KMITL. There is a system that allows the landlord to post announcements. <br />
Demo video - [youtube video link](https://youtu.be/aBKQB63tBzE) <br />
website link - [piranyahub.netlify.app](https://piranyahub.netlify.app/) or [piranyahub.poomsakk.com](https://piranyahub.poomsakk.com/)<br />
[![Netlify Status](https://api.netlify.com/api/v1/badges/afacf69e-89d7-4eb7-b202-649cdcbfe4ab/deploy-status)](https://app.netlify.com/sites/piranyahub/deploys)
## Build with
Frontend - React<br />
Backend - Spring boot<br />
DB - MongoDB, Cloundinary<br />
Module - JWT, Redux, MUI, Tailwind, Google Maps Platform, Axios, react-rounter

## Contributor
- [63010766  ภูมิศักดิ์  แก้วสี (Poomsak Kaewsee)](https://github.com/poomsakk)<br />
- [63010767  ภูริช  จันทร์ประสิทธิ์ (Phurich Chanprasit)](https://github.com/Phurich63010767)<br />
- [63010841  วรภพ  เกียรติคงแสง (Warapob Keatkongsang)](https://github.com/Warapob)<br />
- [63010846  วรรธนัย	 เมธาเมลือง (Watanai Maythamaluang)](https://github.com/Watanai1245)<br />
- [63010852  วรวิชญ์  ธรรมารักษ์วัฒนะ (Worawich Tummarukwattana)](https://github.com/KuR0uSaGi)<br />
- [63011018  สุรพัศ  วงศ์ประไพพักตร์ (Surapat Wongprapaipak)](https://github.com/surapat12)<br />
- [63011075  อับดุลฮากิม  มาหะ (Abdulhakim Maha)](https://github.com/Abdulhakim-Maha)<br />
- [63011414  อับดุลฮากีม  มามุ (Abdulhakim Mamu)](https://github.com/hakimparoo)<br />

## Getting start
### Frontend
1.install npm packages in frontend folder and run it<br />
   ```
   cd frontend
   npm install
   npm start
   ```
2.Add google api key in .env files<br />
```REACT_APP_GOOGLE_MAP_API=YOUR_API_KEY```
### Backend
We use 3 independent spring backends but connected with the same DB then we need to run 3 backend simultaneously
1. open project in **backend/authBackend** with any IDE (for example Intellij)<br />
2. run it<br />
3. do the same with **backend/landLordBackend**, and **backend/matchingBackend**<br />
