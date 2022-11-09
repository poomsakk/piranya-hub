import React, { useState } from "react";
import Information from "./1_Information";
import Facility from "./2_Facility";
import Checkbox from '@mui/material/Checkbox';
import Type from "./3_Type";
import Cost from "./4_Cost";
import Detail from "./5_Detail";
import Image from "./6_Image";
import Promotion from "./7_Promotion";
import Contact from "./8_Contact";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

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
    console.log(informationData)
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


  // 3 Type section <<<
  const [typeData, setTypeData] = useState({
    typeName: "",
    size: "",
    pricePerMonth: "",
    pricePerDay: "",
    })
    const { typeName, size, pricePerMonth, pricePerDay } = typeData
    function onInputtypeChange(e) {
      setTypeData({ ...typeData, [e.target.name]: e.target.value })
      console.log(typeData)
    }
  // 3 Type section <<<


  // 4 Cost section <<<
  const [costData, setCostData] = useState({
    waterPerUnit: "",
    electricPerUnit: "",
    commonFee: "",
    insurance: "",
    })
    const { waterPerUnit, electricPerUnit, commonFee, insurance } = costData
    function onInputcostChange(e) {
      setCostData({ ...costData, [e.target.name]: e.target.value })
      console.log(costData)
    }
  // 4 Cost section <<<

  return (
    <div className="flex justify-center">
      <div className="flex flex-col ">
        <div className="max-w-[960px] bg-[#EFEFEF] flex flex-col mt-10 rounded-3xl ">
          <div className="information mb-10">
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
          <div className="facilities mb-10">
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
          <div className="Type mb-10">
          <div className='items-center '>
                <div className='container'>
                    <h1 className = "font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96" >3. ประเภทห้องพัก</h1> 
                    <div className="ml-6">
                        <div class="flex flex-row mt-2">
                        <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-36 mt-7" >รูปแบบห้อง</h1>
                        <input
                          type={"text"}
                          className="
                              font-IBMPlexSansThai 
                              bg-[#EFEFEF]
                              placeholder:text-zinc-500
                              text-lg
                              pl-5 
                              w-[180px]
                              h-[40px]
                              mt-5
                              ml-8
                              border-2 
                              border-[#162B78] 
                              focus:outline-none
                              focus:border-[#162B78]
                              rounded-xl
                              "
                          placeholder="ระบุประเภท"
                          name="typeName"
                          value={typeName}
                          onChange={onInputtypeChange}
                          />
                        </div>
                        <div class="flex flex-row">
                            <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-36 mt-6" >ขนาดห้อง</h1>
                            <input
                                type={"text"}
                                className="
                                    font-IBMPlexSansThai 
                                    bg-[#EFEFEF]
                                    placeholder:text-zinc-500
                                    text-lg
                                    pl-5 
                                    w-[180px]
                                    h-[40px]
                                    mt-5
                                    ml-8
                                    border-2 
                                    border-[#162B78] 
                                    focus:outline-none
                                    focus:border-[#162B78]
                                    rounded-xl
                                    "
                                placeholder="ระบุขนาดห้อง"
                                name="size"
                                value={size}
                                onChange={onInputtypeChange}
                            />
                            <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 mt-7" >ตารางเมตร</h1>
                        </div>

                        <div class="flex flex-row">
                            <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-36 mt-7" >เช่ารายเดือน</h1>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5 '/>}/>
                                <input
                                    type={"text"}
                                    className="
                                        font-IBMPlexSansThai 
                                        bg-[#EFEFEF]
                                        placeholder:text-zinc-500
                                        text-lg
                                        pl-5 
                                        w-[180px]
                                        h-[40px]
                                        mt-5
                                        ml-[-15px]
                                        border-2 
                                        border-[#162B78] 
                                        focus:outline-none
                                        focus:border-[#162B78]
                                        rounded-xl
                                        "
                                    placeholder="ระบุค่าเช่ารายเดือน"
                                    name="pricePerMonth"
                                    value={pricePerMonth}
                                    onChange={onInputtypeChange}

                                />
                                <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-32 mt-7" >บาท/เดือน</h1>
                                <FormControl class="flex flex-row">
                                <FormControlLabel
                                className='mt-5' 
                                value="NoMonth" 
                                control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} />}/>
                                <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] w-44 mt-7 ml-[-15px]" >ไม่มีห้องเช่ารายเดือน</h1>
                                </FormControl>
                            </RadioGroup>
                        </div>

                        <div class="flex flex-row">
                            <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-36 mt-7" >เช่ารายวัน</h1>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5 '/>}/>
                                <input
                                    type={"text"}
                                    className="
                                        font-IBMPlexSansThai 
                                        bg-[#EFEFEF]
                                        placeholder:text-zinc-500
                                        text-lg
                                        pl-5 
                                        w-[180px]
                                        h-[40px]
                                        mt-5
                                        ml-[-15px]
                                        border-2 
                                        border-[#162B78] 
                                        focus:outline-none
                                        focus:border-[#162B78]
                                        rounded-xl
                                        "
                                    placeholder="ระบุค่าเช่ารายวัน"
                                    name="pricePerDay"
                                    value={pricePerDay}
                                    onChange={onInputtypeChange}
                                />
                                <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-32 mt-7" >บาท/วัน</h1>
                                <FormControl class="flex flex-row">
                                    <FormControlLabel  
                                        className='mt-5  font-IBMPlexSansThai text-xl text-[#162B78]' 
                                        value="NoDay" 
                                        control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} />}/>
                                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] w-44 mt-7 ml-[-15px]" >ไม่มีห้องเช่ารายวัน</h1>
                                </FormControl>
                            </RadioGroup>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="Cost mb-10">
            <div className='items-center '>
              <div className='container'>
                  <h1 className = "font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96" >4. ค่าใช้จ่าย</h1> 
                  <div class="flex flex-row mt-2 ml-6">
                      <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-40 mt-7" >ค่าน้ำ</h1>
                      <FormControl>
                          <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                          >
                              <FormControlLabel value="female" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5 '/>}/>
                                  <input
                                  type={"text"}
                                  className="
                                  font-IBMPlexSansThai 
                                  bg-[#EFEFEF]
                                  placeholder:text-zinc-500
                                  text-lg
                                  pl-5 
                                  w-28
                                  h-[40px]
                                  mt-5
                                  ml-[-15px]
                                  border-2 
                                  border-[#162B78] 
                                  focus:outline-none
                                  focus:border-[#162B78]
                                  rounded-xl
                                  "
                                  name="waterPerUnit"
                                  value={waterPerUnit}
                                  onChange={onInputcostChange}
                                  />
                              <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-24 mt-7" >บาท/ยูนิต</h1>
                              <FormControlLabel value="male" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5'/>}/>
                              <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-56 mt-7 " >ราคาตามที่การประปากำหนด</h1>
                              <FormControlLabel value="other" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5'/>}/>
                              <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-28 mt-7" >โทรสอบถาม</h1>
                          </RadioGroup>
                      </FormControl>
                  </div>
                  <div class="flex flex-row mt-2 ml-6">
                      <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-40 mt-7" >ค่าไฟ</h1>
                      <FormControl>
                          <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                          >
                              <FormControlLabel value="female" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5 '/>}/>
                              <input
                              type={"text"}
                              className="
                              font-IBMPlexSansThai 
                              bg-[#EFEFEF]
                              placeholder:text-zinc-500
                              text-lg
                              pl-5 
                              w-28
                              h-[40px]
                              mt-5
                              ml-[-15px]
                              border-2 
                              border-[#162B78] 
                              focus:outline-none
                              focus:border-[#162B78]
                              rounded-xl
                              "
                              name="electricPerUnit"
                              value={electricPerUnit}
                              onChange={onInputcostChange}
                              />
                              <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-24 mt-7" >บาท/ยูนิต</h1>
                              <FormControlLabel value="male" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5'/>}/>
                              <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-56 mt-7 " >ราคาตามที่การไฟฟ้ากำหนด</h1>
                              <FormControlLabel value="other" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5'/>}/>
                              <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-28 mt-7" >โทรสอบถาม</h1>
                          </RadioGroup>
                      </FormControl>
                  </div>

                  <div class="flex flex-row mt-2 ml-6">
                      <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-40 mt-7" >ค่าบริการอื่นๆ</h1>
                      <FormControl>
                          <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                          >
                              <FormControlLabel value="female" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5 '/>}/>
                              <input
                              type={"text"}
                              className="
                              font-IBMPlexSansThai 
                              bg-[#EFEFEF]
                              placeholder:text-zinc-500
                              text-lg
                              pl-5 
                              w-28
                              h-[40px]
                              mt-5
                              ml-[-15px]
                              border-2 
                              border-[#162B78] 
                              focus:outline-none
                              focus:border-[#162B78]
                              rounded-xl
                              "
                              name="commonFee"
                              value={commonFee}
                              onChange={onInputcostChange}
                              />
                              <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-24 mt-7" >บาท/เดือน</h1>
                              <FormControlLabel value="male" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5'/>}/>
                              <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-56 mt-7 " >รวมในค่าห้องแล้ว</h1>
                              <FormControlLabel value="other" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5'/>}/>
                              <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-28 mt-7" >โทรสอบถาม</h1>
                          </RadioGroup>
                      </FormControl>
                  </div>

                  <div class="flex flex-row mt-2 ml-6">
                      <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-40 mt-7" >เงินมัดจำ/ประกัน</h1>
                      <FormControl>
                          <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                          >
                              <FormControlLabel value="female" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5 '/>}/>
                              <input
                              type={"text"}
                              className="
                              font-IBMPlexSansThai 
                              bg-[#EFEFEF]
                              placeholder:text-zinc-500
                              text-lg
                              pl-5 
                              w-28
                              h-[40px]
                              mt-5
                              ml-[-15px]
                              border-2 
                              border-[#162B78] 
                              focus:outline-none
                              focus:border-[#162B78]
                              rounded-xl
                              "
                              name="insurance"
                              value={insurance}
                              onChange={onInputcostChange}
                              />
                              <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-24 mt-7" >บาท</h1>
                              <FormControlLabel value="male" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5'/>}/>
                              <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-56 mt-7 " >ไม่มีการเก็บเงินประกัน</h1>
                              <FormControlLabel value="other" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5'/>}/>
                              <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-28 mt-7" >โทรสอบถาม</h1>
                          </RadioGroup>
                      </FormControl>
                  </div>
              </div>
            </div>
          </div>
          <Detail />
          <Image />
          <Promotion />
          <div className="Contact mb-10">
            <div className='container'>
                <h1 className = "font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96" >8. ข้อมูลสำหรับติดต่อ</h1> 
                    <div className="ml-6">
                        <div class="flex flex-row mt-2">
                        <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-24 mt-7" >ชื่อผู้ดูแล</h1>
                        <input
                          type={"text"}
                          className="
                              font-IBMPlexSansThai 
                              bg-[#EFEFEF]
                              placeholder:text-zinc-500
                              text-lg
                              pl-5 
                              w-[500px]
                              h-[40px]
                              mt-5
                              ml-8
                              border-2 
                              border-[#162B78] 
                              focus:outline-none
                              focus:border-[#162B78]
                              rounded-xl
                              "
                          placeholder="ระบุชื่อผู้ดูแล"
                          name="typeName"
                          />
                        </div>
                        <div class="flex flex-row">
                            <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-24 mt-6" >เบอร์ติดต่อ</h1>
                            <input
                                type={"text"}
                                className="
                                    font-IBMPlexSansThai 
                                    bg-[#EFEFEF]
                                    placeholder:text-zinc-500
                                    text-lg
                                    pl-5 
                                    w-[500px]
                                    h-[40px]
                                    mt-5
                                    ml-8
                                    border-2 
                                    border-[#162B78] 
                                    focus:outline-none
                                    focus:border-[#162B78]
                                    rounded-xl
                                    "
                                placeholder="ระบุเบอร์ติดต่อ"
                                name="size"
                            />
                        </div>

                        <div class="flex flex-row">
                            <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-24 mt-7" >E-mail</h1>
                                <input
                                    type={"text"}
                                    className="
                                        font-IBMPlexSansThai 
                                        bg-[#EFEFEF]
                                        placeholder:text-zinc-500
                                        text-lg
                                        pl-5 
                                        w-[500px]
                                        h-[40px]
                                        mt-5
                                        ml-8
                                        border-2 
                                        border-[#162B78] 
                                        focus:outline-none
                                        focus:border-[#162B78]
                                        rounded-xl
                                        "
                                    placeholder="ระบุ E-mail"
                                    name="pricePerMonth"
                                />
                        </div>
                        <div class="flex flex-row">
                            <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-24 mt-7" >Line ID</h1>
                                <input
                                    type={"text"}
                                    className="
                                        font-IBMPlexSansThai 
                                        bg-[#EFEFEF]
                                        placeholder:text-zinc-500
                                        text-lg
                                        pl-5 
                                        w-[500px]
                                        h-[40px]
                                        mt-5
                                        ml-8
                                        border-2 
                                        border-[#162B78] 
                                        focus:outline-none
                                        focus:border-[#162B78]
                                        rounded-xl
                                        "
                                    placeholder="ระบุ Line ID"
                                    name="pricePerDay"
                                />
                        </div>
                    </div>
                </div>
          </div>
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