import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import ButtonCT from "../../components/ButtonCT";
import Map from "../../components/Map";
import CheckBoxCT from "../../components/CheckBoxCT";

const FilterPage = () => {
  const navigate = useNavigate();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  });
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <section className="w-full h-screen ">
      <div className="text-white flex justify-center items-center">
        <Map />
        <div className="w-1/4 h-screen flex flex-col items-center">
          <ButtonCT btnName={"back to home"} onClick={() => navigate("/")} />
          <div className="bg-white text-black w-[350px] mx-auto h-5/6 my-12">
            <h1 className="text-3xl text-center font-bold mb-10">
              สิ่งอำนวยความสะดวก
            </h1>
            <div className="flex flex-wrap w-full">
              <CheckBoxCT name={'เครื่องปรับอากาศ'}/>
              <CheckBoxCT name={'ลิฟต์'}/>
              <CheckBoxCT name={'เฟอร์นิเจอร์-ตู้,เตียง'}/>
              <CheckBoxCT name={'รปภ.'}/>
              <CheckBoxCT name={'เครื่องทำน้ำอุ่น'}/>
              <CheckBoxCT name={'ระบบรักษาความปลอดภัย'}/>
              <CheckBoxCT name={'พัดลม'}/>
              <CheckBoxCT name={'กล้องวงจรปิด(CCTV)'}/>
              <CheckBoxCT name={'โทรทัศน์'}/>
              <CheckBoxCT name={'ตู้เย็น'}/>
              <CheckBoxCT name={'ร้านสะดวกซื้อ'}/>
              <CheckBoxCT name={'ไวไฟ'}/>
              <CheckBoxCT name={'มีบริการเครื่องซักผ้า'}/>
              <CheckBoxCT name={'ที่จอดรถมอเตอร์ไซต์'}/>
              <CheckBoxCT name={'อนุญาตให้เลี้ยงสัตว์'}/>
              <CheckBoxCT name={'โรงยิม'}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterPage;
