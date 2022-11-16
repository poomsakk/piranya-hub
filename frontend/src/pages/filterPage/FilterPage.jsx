import React, { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import ButtonCT from "../../components/ButtonCT";
import Map from "../../components/Map";
import CheckBoxCT from "../../components/CheckBoxCT";
import "./FilterPage.css";
import { Slider, CircularProgress } from "@mui/material";

const FilterPage = () => {
  const [price, setPrice] = useState([1000, 5000]);
  const [circleRad, setCircleRad] = useState(450);
  const navigate = useNavigate();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  });
  if (!isLoaded)
    return (
      <div>
        <CircularProgress />
      </div>
    );

  const startHandler = (e) => {
    const prev = price[1];
    setPrice([e.target.value, prev]);
  };

  const endHandler = (e) => {
    const prev = price[0];
    setPrice([prev, e.target.value]);
  };

  // console.log(price[0], price[1]);

  return (
    <section className="w-full h-screen ">
      <div className="text-white flex justify-center items-center">
        <Map rad={circleRad} />
        <div className="w-1/4 overflow-hidden  h-screen flex flex-col items-center justify-center bg-white ">
          <div className="h-15 w-full flex justify-evenly">
            <ButtonCT btnName={"back to home"} onClick={() => navigate("/")} />
            <ButtonCT
              btnName={"click to serch"}
              onClick={() => navigate("/Lodges")}
            />
          </div>
          <div className="font-IBMPlexSansThai p-3 rounded  text-black w-[390px] mx-auto h-5/6 my-7">
            <h1 className="text-3xl text-center font-bold mb-5">
              คุณอยากได้ที่พักแบกไหน?
            </h1>
            <div className="flex flex-col w-full h-full overflow-y-scroll overflow-x-hidden custom-class">
              <h1 className="my-7">ระยะทางจาก สจล.</h1>
              <Slider
                value={circleRad}
                onChange={(e, newValue) => setCircleRad(newValue)}
                aria-label="Default"
                size="small"
                min={100}
                max={5000}
                sx={{ color: "#000" }}
                valueLabelDisplay="on"
              />
              <h1 className="text-xl mt-5">ราคา</h1>
              <Slider
                value={price}
                onChange={(event, newValue) => setPrice(newValue)}
                size="small"
                min={300}
                max={10000}
                valueLabelDisplay="auto"
                sx={{
                  color: "#000",
                }}
              />
              <div className="flex my-5 justify-between items-center w-full">
                <div className="flex justify-center items-center ">
                  <label className="mr-3 text-center" htmlFor="startPrice">
                    ราคาเริ่มต้น
                  </label>
                  <input
                    type="email"
                    id="startPrice"
                    value={price[0]}
                    onChange={startHandler}
                    class="p-1 w-1/2 rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <label className="mr-3 text-center" htmlFor="endPrice">
                    ราคาสิ้นสุด
                  </label>
                  <input
                    type="endPrice"
                    value={price[1]}
                    id="UserEmail"
                    onChange={endHandler}
                    class="p-1 w-1/2 rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
              </div>

              <h1 className="text-xl m-2">สิ่งอำนวยความสะดวก ภายในห้อง</h1>
              <CheckBoxCT
                onCheck={(e) => console.log(e.target.checked)}
                name={"โทรศัพท์สายตรง"}
              />
              <CheckBoxCT name={"เครื่องปรับอากาศ"} />
              <CheckBoxCT name={"พัดลม"} />
              <CheckBoxCT name={"โทรทัศน์"} />
              <CheckBoxCT name={"ตู้เย็น"} />
              <CheckBoxCT name={"เฟอร์นิเจอร์, ตู้, เตียง"} />
              <CheckBoxCT name={"เครื่องทำน้ำอุ่น"} />
              <CheckBoxCT name={"อินเตอร์เน็ตไร้สาย (WIFI)"} />
              <CheckBoxCT name={"อนุญาตให้เลี้ยงสัตว์"} />
              <h1 className="text-xl m-2 mt-10">
                สิ่งอำนวยความสะดวก ภายในอาคาร
              </h1>
              <CheckBoxCT name={"มีระบบรักษาความปลอดภัย (แสกนลายนิ้วมือ)"} />
              <CheckBoxCT name={"กล้องวงจรปิด(CCTV)"} />
              <CheckBoxCT name={"ที่จอดรถมอเตอร์ไซด์ / จักรยาน"} />
              <CheckBoxCT name={"ที่จอดรถยนต์"} />
              <CheckBoxCT name={"สระว่ายน้ำ"} />
              <CheckBoxCT name={"ฟิตเนส"} />
              <CheckBoxCT name={"ร้านซัก-รีด / มีบริการเครื่องซักผ้า"} />
              <CheckBoxCT name={"ร้านทำผม-เสริมสวย"} />
              <CheckBoxCT name={"ลิฟต์"} />
              <CheckBoxCT name={"ร้านค้าสะดวกซื้อ"} />
              <CheckBoxCT name={"ร้านขายอาหาร"} />
              <div className="mb-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterPage;
