import React, { useState } from "react";
import "./1_Information.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Link } from "react-router-dom";

function Information() {
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

  function onInputChange(e) {
    setInformationData({ ...informationData, [e.target.name]: e.target.value })
  }

  return (
    <>
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
              onChange={onInputChange}
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
              onChange={onInputChange}
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
                onChange={onInputChange}
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
                onChange={onInputChange}
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
                onChange={onInputChange}
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
              onChange={onInputChange}
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
              onChange={onInputChange}
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
              onChange={onInputChange}
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
            onChange={onInputChange}
          />
        </div>
      </div>
    </>
  );
}

export default Information;
