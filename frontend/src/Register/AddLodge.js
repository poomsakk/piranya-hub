import React, { useState } from "react";
import "./AddLodge.css";
import Information from "./1_Information";
import Facility from "./2_Facility";
import Checkbox from '@mui/material/Checkbox';
import Type from "./3_Type";
import Cost from "./4_Cost";
import Detail from "./5_Detail";
import Image from "./6_Image";
import Promotion from "./7_Promotion";
import Contact from "./8_Contact";

function AddLodge() {
  // Main section >>>

  // Main section <<<
  // 1 Information  section >>>
  const [informationData, setInformationData] = useState({
    name: "",
    nameEng: "",
    houseNumber: "",
    street: "",
    soi: "",
    subArea: "",
    area: "",
    city: "",
    postalCode: ""
  })
  const { name, nameEng, houseNumber, street, soi, subArea, area, city, postalCode } = informationData
  function onInputinformationChange(e) {
    setInformationData({ ...informationData, [e.target.name]: e.target.value })
  }
  // 1 Information  section <<<


  // 2 Facility section >>>
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [facilityData, setFacilityData] = useState({
    facilities: []
  })
  function onChangeFacility(e) {
    console.log("Temp")
  }
  // 2 Facility section <<<

  return (
    <div className="flex justify-center">
      <div className="flex flex-col ">
        <div className="max-w-[960px] bg-[#EFEFEF] flex flex-col mt-10 rounded-3xl ">
          <div className="information">
            <div className="items-center ">
              <div className="container">
                <h1 className="font-IBMPlexSansThai text-3xl text-[#162B78] ml-12 w-96 mt-10">
                  ลงประกาศอพาร์ทเม้นท์
                </h1>
                <h1 className="font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96 mt-4">
                  1. ข้อมูลที่พัก
                </h1>
                <div className="flex flex-row">
                  <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 mt-6 w-40 ">
                    ชื่อที่พัก
                  </h1>
                  <input
                    type={"text"}
                    className="
                            font-IBMPlexSansThai 
                            bg-[#EFEFEF]
                            placeholder:text-zinc-500
                            text-lg
                            pl-5 
                            w-[631px]
                            h-[40px]
                            m-2
                            ml-4
                            mt-4
                            border-2 
                            border-[#162B78]
                            focus:outline-none
                            focus:border-[#162B78]
                            rounded-xl
                            "
                    placeholder="ระบุชื่อที่พัก"
                    name="name"
                    value={name}
                    onChange={onInputinformationChange}
                  />
                </div>
                <div className="flex flex-row">
                  <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-4 mt-3 w-[160px] ">
                    ชื่อที่พัก (English)
                  </h1>
                  <input
                    type={"text"}
                    className="
                            font-IBMPlexSansThai 
                            bg-[#EFEFEF]
                            placeholder:text-zinc-500
                            text-lg 
                            pl-5 
                            w-[631px]
                            h-[40px]
                            m-2
                            border-2 
                            border-[#162B78] 
                            focus:outline-none
                            focus:border-[#162B78]
                            rounded-xl text-m-4 
                            active:border-[#162B78]"
                    placeholder="ระบุชื่อที่พัก (English)"
                    name="nameEng"
                    value={nameEng}
                    onChange={onInputinformationChange}
                  />
                </div>
                <div className="flex flex-row">
                  <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-4 mt-2 w-32">
                    ที่อยู่
                  </h1>
                  <div className="flex justify-center ml-8">
                    <input
                      type={"text"}
                      className="
                                font-IBMPlexSansThai 
                                bg-[#EFEFEF]
                                placeholder:text-zinc-500
                                text-lg 
                                pl-5 
                                m-2
                                w-[200px]
                                h-[40px]
                                border-2 
                                border-[#162B78]
                                focus:outline-none
                                focus:border-[#162B78]
                                rounded-xl"
                      placeholder="เลขที่"
                      name="houseNumber"
                      value={houseNumber}
                      onChange={onInputinformationChange}
                    />
                    <input
                      type={"text"}
                      className="
                                font-IBMPlexSansThai 
                                bg-[#EFEFEF]
                                placeholder:text-zinc-500
                                text-lg 
                                pl-5 
                                w-[200px]
                                h-[40px]
                                m-2 
                                border-2 
                                border-[#162B78]
                                focus:outline-none
                                focus:border-[#162B78]
                                rounded-xl"
                      placeholder="ถนน"
                      name="street"
                      value={street}
                      onChange={onInputinformationChange}
                    />
                    <input
                      type={"text"}
                      className="
                                font-IBMPlexSansThai 
                                bg-[#EFEFEF]
                                placeholder:text-zinc-500
                                text-lg 
                                pl-5 
                                w-[200px]
                                h-[40px]
                                m-2 
                                border-2 
                                border-[#162B78]
                                focus:outline-none
                                focus:border-[#162B78]
                                rounded-xl"
                      placeholder="ซอย"
                      name="soi"
                      value={soi}
                      onChange={onInputinformationChange}
                    />
                  </div>
                </div>
                <div className="flex justify-center ml-[172px]">
                  <input
                    type={"text"}
                    className="
                                font-IBMPlexSansThai 
                                bg-[#EFEFEF]
                                placeholder:text-zinc-500
                                text-lg 
                                pl-5 
                                m-2 
                                w-[200px]
                                h-[40px]
                                border-2 
                                border-[#162B78]
                                focus:outline-none
                                focus:border-[#162B78]
                                rounded-xl"
                    placeholder="ตำบล / แขวง"
                    name="subArea"
                    value={subArea}
                    onChange={onInputinformationChange}
                  />
                  <input
                    type={"text"}
                    className="
                                font-IBMPlexSansThai 
                                bg-[#EFEFEF]
                                placeholder:text-zinc-500
                                text-lg 
                                pl-5 
                                w-[200px]
                                h-[40px]
                                m-2 
                                border-2 
                                border-[#162B78]
                                focus:outline-none
                                focus:border-[#162B78]
                                rounded-xl"
                    placeholder="อำเภอ / เขต"
                    name="area"
                    value={area}
                    onChange={onInputinformationChange}
                  />
                  <input
                    type={"text"}
                    className="
                                font-IBMPlexSansThai 
                                bg-[#EFEFEF]
                                placeholder:text-zinc-500
                                text-lg 
                                pl-5 
                                w-[200px]
                                h-[40px]
                                m-2 
                                border-2 
                                border-[#162B78]
                                focus:outline-none
                                focus:border-[#162B78]
                                rounded-xl"
                    placeholder="จังหวัด"
                    name="city"
                    value={city}
                    onChange={onInputinformationChange}
                  />
                </div>
                <input
                  type={"text"}
                  className="
                                place-center 
                                bg-[#EFEFEF]
                                placeholder:text-zinc-500
                                m-2 
                                h-[40px]
                                ml-[233px]
                                font-IBMPlexSansThai 
                                text-lg 
                                pl-5 
                                w-[200px]
                                border-2 
                                border-[#162B78]
                                focus:outline-none
                                focus:border-[#162B78]
                                rounded-xl"
                  placeholder="รหัสไปรษณีย์"
                  name="postalCode"
                  value={postalCode}
                  onChange={onInputinformationChange}
                />
              </div>
            </div>
          </div>
          <div className="facilities">
            <div className='items-center  '>
              <div className='content' >
                <h1 className="font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96" >2. สิ่งอำนวยความสะดวก</h1>
                <div className='flex flex-row mt-4 '>
                  <div >
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78] ml-10' name="airconditioner" onChange={onChangeFacility} />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44" >เครื่องปรับอากาศ</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78] ml-10' name="furniture" onChange={onChangeFacility} />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >เฟอร์นิเจอร์-ตู้, เตียง</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78] ml-10' name="waterheater" onChange={onChangeFacility} />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >เครื่องทำน้ำอุ่น</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78] ml-10' name="fan" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >พัดลม</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78] ml-10' name="tv" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >โทรทัศน์</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78] ml-10' name="fridge" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >ตู้เย็น</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78] ml-10' name="directphone" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >โทรศัพท์สายตรง</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78] ml-10' name="wifi" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-64 " >อินเทอร์เน็ตไร้สาย (WIFI) ในห้อง</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78] ml-10' name="motoparking" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >ที่จอดรถมอเตอร์ไซด์ / จักรยาน</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78] ml-10' name="carparking" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >ที่จอดรถยนต์</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78] ml-10' name="swimmingpool" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >สระว่ายน้ำ</h1>
                    </div>
                  </div>

                  <div className='ml-32'>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78]' name="fingerprintscanner" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >มีระบบรักษาความปลอดภัย (สแกนลายนิ้วมือ)</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78]' name="CCTV" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >กล้องวงจรปิด (CCTV)</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78]' name="elevator" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >ลิฟต์</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78]' name="securityguard" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >รปภ.</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78]' name="conveniencestore" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >ร้านค้า สะดวกซื้อ</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78]' name="washingmachine" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >ร้านซัก-รีด / มีบริการเครื่องซักผ้า</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78]' name="hairsalon" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >ร้านทำผม-เสริมสวย</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78]' name="foodstore" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >ร้านขายอาหาร</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78]' name="gym" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >โรงยิม / ฟิตเนส</h1>
                    </div>
                    <div className='flex flex-row'>
                      <Checkbox {...label} className='text-[#162B78]' name="petallowed" />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >อนุญาตให้เลี้ยงสัตว์</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Type />
          <Cost />
          <Detail />
          <Image />
          <Promotion />
          <Contact />
        </div>
        <div className="flex justify-end m-5">
          <button
            class="
                            bg-[#162B78] 
                            font-IBMPlexSansThai
                            hover:bg-white 
                            hover:text-[#162B78] 
                            text-white 
                            py-2 
                            px-4 
                            rounded-full 
                            border border-[#162B78]
                            shadow-md shadow-[#162B78]
                            "
          >
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddLodge;
/*
import React, { useState } from "react";
import "./AddLodge.css";
import Information from "./1_Information";
import Facility from "./2_Facility";
import Type from "./3_Type";
import Cost from "./4_Cost";
import Detail from "./5_Detail";
import Image from "./6_Image";
import Promotion from "./7_Promotion";
import Contact from "./8_Contact";

function AddLodge() {
  const [inputData, setInputData] = useState({
    information: {
      name: "",
      nameEng: "",
      houseNumber: "",
      street: "",
      soi: "",
      subArea: "",
      area: "",
      city: "",
      postalCode: ""
    },
    facility: {
      facilities: []
    }
  })

  return (
    <div className="flex justify-center">
      <div className="flex flex-col ">
        <div className="max-w-[960px] bg-[#EFEFEF] flex flex-col mt-10 rounded-3xl ">
          <div className="mb-10">
            <Information />
          </div>
          <div className="mb-10">
            <Facility />
          </div>
          <div className="mb-10">
            <Type />
          </div>
          <div className="mb-10">
            <Cost />
          </div>
          <div className="mb-10">
            <Detail />
          </div>
          <div className="mb-10">
            <Image />
          </div>
          <div className="mb-10">
            <Promotion />
          </div>
          <div className="mb-10">
            <Contact />
          </div>
        </div>
        <div className="flex justify-end m-5">
          <a href="/Page404">
            <button
              class="
                            bg-[#162B78] 
                            font-IBMPlexSansThai
                            hover:bg-white 
                            hover:text-[#162B78] 
                            text-white 
                            py-2 
                            px-4 
                            rounded-full 
                            border border-[#162B78]
                            shadow-md shadow-[#162B78]
                            "
            >
              บันทึก
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AddLodge;

*/
