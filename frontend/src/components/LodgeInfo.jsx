import { Typography } from "@mui/material";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Call } from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";
import imgUrl from "../helper/imgUrl.json";
import ImageCom from "./ImageCom";

const LodgeInfo = () => {
  const { lodgeId } = useParams();
  return (
    <div className="container">
      <div className="w-full h-full flex justify-center items-center">
        <div className="font-IBMPlexSansThai w-3/4 h-full">
          <Typography variant="h5" className="font-IBMPlexSansThai">
            ดวงจุลชาติอพาร์ทเม้นท์ พหลโยธิน 52 (DJC APARTMENT)
          </Typography>
          <Typography variant="h7" className="font-IBMPlexSansThai">
            ซ.พหลโยธิน 52 ถ.พหลโยธิน คลองถนน สายไหม กรุงเทพมหานคร
          </Typography>
          <Carousel>
            {imgUrl.map((item, i) => (
              <ImageCom key={i} item={item} />
            ))}
          </Carousel>
          <h1 className="text-xl font-bold my-5">รายละเอียด</h1>
          <div className="flex">
            <div className="w-1/2">
              <h1>
                รายละเอียดเพิ่มเติม ดวงจุลชาติอพาร์ทเม้นท์ พหลโยธิน 52 (DJC
                APARTMENT)
              </h1>
              <p>
                เดินทางสะดวก ใกล้ มหาวิทยาลัยนอร์ท ,ใกล้ตลาดยิ่งเจริญ
                ,ใกล้บิ๊กซีสะพานใหม่,มหาวิทยาลัยศรีปทุม
                บรรยากาศเงียบสบายเป็นส่วนตัว,อาคารร่มรื่น, สะอาด, ปลอดภัย
                เรามีสาธารณูปโภคให้บริการมากมาย ฟรีที่จอด ห้องพัก
                มีให้ลูกค้าเลือกตามพื้นที่ใช้สอยในอัตราต่อไปนี้ -ห้องธรรมดา 30
                ตรม ค่าเช่า 2,800 บาท /เดือน จ่ายแรกเข้า 7,100 บาท ( เงินประกัน
                4,000 บาท+ ค่าเช่าล่วงหน้า 1 เดือน + ค่าส่วนกลาง 300 บาท)
                -ห้องแอร์ 30 ตร.ม ค่าเช่า 3,500 บาท /เดือน จ่ายแรกเข้า 8,800 บาท
                ( เงินประกัน 5,000 บาท+ ค่าเช่าล่วงหน้า 1 เดือน + ค่าส่วนกลาง
                300 บาท ) -ห้องมุม 33 ตร.ม ค่าเช่า 3,800 บาท /เดือน จ่ายแรกเข้า
                9,100 บาท ( เงินประกัน 5,000 บาท+ ค่าเช่าล่วงหน้า 1 เดือน +
                ค่าส่วนกลาง 300 บาท ) มีบริการห้องพักเช่าระยะสั้น 6 เดือน
                เงินประกัน 5,000 บาท + ค่าส่วนกลาง 300 บาท ค่าไฟฟ้า หน่วยล่ะ
                4.50 บาท (ตามมิเตอร์ใช้จริง) ค่าน้ำประปา หน่วยล่ะ 19.20 บาท
              </p>
            </div>
            <div className="ml-10 w-1/2">
              <div className="rounded-xl border border-gray-100 p-8 shadow-xl">
                <h1>ราคาที่พัก 2800-3800 บาท/เดือน</h1>
                <h1>ค่ามัดจำ 10,000 บาท</h1>
                <h1>จ่ายล่วงหน้า 1 เดือน</h1>
                <h1>ค่าไฟ 5 บาทต่อหน่วย</h1>
                <h1>ค่าน้ำ 20 บาทต่อหน่วย</h1>
                <h1>ค่าบริการอื่นๆ: 350 บาท</h1>
                <h1>อินเทอร์เน็ต โทรสอบถาม</h1>
                <div className="flex">
                  <Call sx={{color:'#0ADA05'}} />
                  <h1 className="text-green-400">เบอร์ติดต่อ: 0912345689</h1>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-xl font-bold my-5">สิ่งอำนวยความสะดวก</h1>
          
        </div>
        <div className="w-1/4 h-full bg-stone-100"></div>
      </div>
    </div>
  );
};

export default LodgeInfo;
