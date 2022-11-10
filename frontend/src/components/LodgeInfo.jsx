import { Typography } from "@mui/material";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Call, CheckCircle } from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";
import imgUrl from "../helper/imgUrl.json";
import { data } from "../data";
import ImageCom from "./ImageCom";
import TableCT from "./TableCT";
import TypeOfRoom from "../helper/type_of_room.json";

const LodgeInfo = () => {
  const { lodgeId } = useParams();
  return (
    <div className="container">
      <div className="w-full h-full flex justify-center items-center">
        <div className="font-IBMPlexSansThai w-3/4 h-full">
          <section className="my-5">
            <Typography variant="h3" className="font-IBMPlexSansThai">
              ดวงจุลชาติอพาร์ทเม้นท์ พหลโยธิน 52 (DJC APARTMENT)
            </Typography>
            <Typography variant="h7" className="font-IBMPlexSansThai">
              ซ.พหลโยธิน 52 ถ.พหลโยธิน คลองถนน สายไหม กรุงเทพมหานคร
            </Typography>
          </section>
          <section>
            <Carousel>
              {imgUrl.map((item, i) => (
                <ImageCom key={i} item={item} />
              ))}
            </Carousel>
          </section>
          <section>
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
                  ตรม ค่าเช่า 2,800 บาท /เดือน จ่ายแรกเข้า 7,100 บาท (
                  เงินประกัน 4,000 บาท+ ค่าเช่าล่วงหน้า 1 เดือน + ค่าส่วนกลาง
                  300 บาท) -ห้องแอร์ 30 ตร.ม ค่าเช่า 3,500 บาท /เดือน
                  จ่ายแรกเข้า 8,800 บาท ( เงินประกัน 5,000 บาท+ ค่าเช่าล่วงหน้า
                  1 เดือน + ค่าส่วนกลาง 300 บาท ) -ห้องมุม 33 ตร.ม ค่าเช่า 3,800
                  บาท /เดือน จ่ายแรกเข้า 9,100 บาท ( เงินประกัน 5,000 บาท+
                  ค่าเช่าล่วงหน้า 1 เดือน + ค่าส่วนกลาง 300 บาท )
                  มีบริการห้องพักเช่าระยะสั้น 6 เดือน เงินประกัน 5,000 บาท +
                  ค่าส่วนกลาง 300 บาท ค่าไฟฟ้า หน่วยล่ะ 4.50 บาท
                  (ตามมิเตอร์ใช้จริง) ค่าน้ำประปา หน่วยล่ะ 19.20 บาท
                </p>
              </div>
              <div className="ml-10 w-1/2">
                <div className="rounded-xl border border-gray-100 p-8 shadow-xl">
                  <div className="flex justify-between">
                    <h1>ราคาที่พัก </h1>
                    <h1>2800-3800 บาท/เดือน</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1>ค่ามัดจำ </h1>
                    <h1>10,000 บาท</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1>จ่ายล่วงหน้า </h1>
                    <h1>1 เดือน</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1>ค่าไฟ </h1>
                    <h1>5 บาทต่อหน่วย</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1>ค่าน้ำ </h1>
                    <h1>20 บาทต่อหน่วย</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1>ค่าบริการอื่นๆ: </h1>
                    <h1>350 บาท</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1>อินเทอร์เน็ต </h1>
                    <h1>โทรสอบถาม</h1>
                  </div>
                  <div className="flex items-center justify-center mt-6">
                    <Call
                      fontSize="large"
                      sx={{
                        backgroundColor: "#4ade80",
                        borderRadius: "50%",
                        color: "#fff",
                        padding: "2px",
                      }}
                    />
                    <h1 className="text-green-400 mt-1 ml-3 text-3xl text-center font-extrabold">
                      0912345689
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h1 className="text-xl font-bold my-5">ประเภทห้อง</h1>
            <TableCT items={TypeOfRoom} />
          </section>
          <section>
            <h1 className="text-xl font-bold my-5">สิ่งอำนวยความสะดวก</h1>
            <div className="h-[290px] flex flex-col flex-wrap">
              {data.map((item, key) => {
                return (
                  <div key={key} className="flex my-1">
                    <CheckCircle sx={{ color: "#4ade80" }} />
                    <h1 className="ml-2">{item.ThName}</h1>
                  </div>
                );
              })}
            </div>
            <div className="mb-20"></div>
          </section>
        </div>
        <div className="w-1/4 h-full bg-stone-100">
          <article class=" overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt="Office"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              class="h-30 w-full object-cover"
            />

            <div class="bg-white p-4 sm:p-6">
              <time datetime="2022-10-10" class="block text-xs text-gray-500">
                10th Oct 2022
              </time>

              <a href="#">
                <h3 class="mt-0.5 text-lg text-gray-900">
                  How to position your furniture for positivity
                </h3>
              </a>

              <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default LodgeInfo;
