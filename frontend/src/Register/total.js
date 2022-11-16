import React, { useState, useMemo } from "react";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Button, Switch } from "@mui/material";
import { landLordApi } from "../axiosConfig";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setData } from "../redux/mhooSlice"
import { v4 as uuidv4 } from 'uuid';
import Map3 from "./Map3";
import Type from "./3_Type"

function AddLodge() {
  // Main section >>>
  const dispatch = useDispatch()
  const userReduxData = useSelector((state) => state.data.userData)
  let navigate = useNavigate()
  function handleSubmitForm(e) {
    e.preventDefault()//
    let userLodges = userReduxData.lodgeOwn.slice(1, userReduxData.lodgeOwn.length - 1).split(", ")
    landLordApi.post(`/lodge/add/${userReduxData.id}`, {
      information: { ...informationData, lat: positon.lat, lng: positon.lng },
      facility: { facilities: tempF },
      roomType: [typeFields],
      cost: costData,
      detail: detailData,
      imagePath: imageData,
      promotion: promotionData,
      contact: contactData
    },{
      headers: {
        "Authorization" : "Bearer " + userReduxData.access_token
      }
    }).then((res) => {
      userLodges.push(res.data.lodgeId)
      let str = "["
      if (userLodges.length === 1) {
        str = str + userLodges.toString() + "]"
      } else {
        userLodges.forEach(element => {
          str = str + element + ", "
        });
        str = str.slice(0, str.length - 2) + "]"
      }

      const newData = { ...userReduxData, lodgeOwn: str }
      dispatch(setData(newData))
      localStorage.clear("user")
      localStorage.setItem("user", JSON.stringify(newData))
      alert("Add success")
      navigate("/dashboard")
    }).catch((error) => {
      console.log(error)
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert(error.message)
      }
    })
    // console.log(informationData)
    // console.log({ facilities: tempF })
    // console.log(typeData)
    // console.log(costData)
    // console.log(detailData)
    // console.log(imageData)
    // console.log(promotionData)
    // console.log(contactData)
  }
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
    postalCode: "",
    lat: 3,
    lng: 3
  })
  const { name, nameEng, houseNumber, street, soi, subArea, area, city, postalCode, lat, lng } = informationData
  function onInputinformationChange(e) {
    setInformationData({ ...informationData, [e.target.name]: e.target.value })
  }
  // 1.1 Map section >>
  const [positon, SetPositon] = useState({ lat: 13.7298889, lng: 100.7782323 })
  // 1.1 Map section <<
  // 1 Information  section <<<
  // const [roomInpField, setRoomInpField] = useState([{
  //   roomType: "", roomSize: "",
  //   rentMonth:"", rentDay: ""
  // }])

  // 2 Facility section >>>
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [facilityData, setFacilityData] = useState({
    facilities: []
  })
  const [tempF, setTempF] = useState([])
  function onChangeFacility(e) {
    let found = tempF.indexOf(e.target.name) !== -1
    if (found) {
      //remove
      setTempF(tempF.filter(x => x !== e.target.name))
    } else {
      //add it
      setTempF([...tempF, e.target.name])
    }
    setFacilityData(prev => { return { facilities: tempF } })
    //console.log(facilityData)   <<< this not work it show prev data i dont know why, but tempF is works ...
  }
  // 2 Facility section <<<


  // 3 Type section <<<
  const [typeFields, setTypeFields] = useState([
    { id: uuidv4(), 
      typeName: "", 
      size: "",
      pricePerMonth: "",
      pricePerDay: "",
      available: true
    },
      
  ]);

  const handleChangeInput = (id, event) => {
    const newInputFields = typeFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setTypeFields(newInputFields);
  }

  const handleChangeAvailable = (id, event) => {
    const newAvailableFields = typeFields.map(i => {
      if(id === i.id) {
        i[event.target.checked] = !event.target.checked
      }
      return i;
    })
    
    setTypeFields(newAvailableFields);
  }

  const handleAddFields = () => {
    setTypeFields([...typeFields, { id: uuidv4(),  typeName: "", size: "", pricePerMonth: "", pricePerDay: "", available: true}])
  }

  const handleRemoveFields = id => {
    const values  = [...typeFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setTypeFields(values);
  }
  // 3 Type section <<<


  // 4 Cost section <<<
  const [costData, setCostData] = useState({
    waterPerUnit: 0,
    electricPerUnit: 0,
    commonFee: 0,
    insurance: 0,
  })
  const { waterPerUnit, electricPerUnit, commonFee, insurance } = costData
  function onInputcostChange(e) {
    setCostData({ ...costData, [e.target.name]: parseFloat(e.target.value) })
  }
  // 4 Cost section <<<

  // 5 Detail section >>>
  const [detailData, setDetailData] = useState({
    detailTHA: "",
    detailENG: ""
  })
  const { detailTHA, detailENG } = detailData
  function onInputDetailChange(e) {
    setDetailData({ ...detailData, [e.target.name]: e.target.value })
  }

  // 5 Detail section <<<

  // 6 Image section >>>
  const [imageData, setImageData] = useState({
    imagePaths: []
  })
  const { imagePaths } = imageData
  function onImagePathChange(e) {
    setImageData({ imagePaths: [] })
    let temp = []
    temp.push(e.target.value)
    setImageData({ imagePaths: temp })
  }
  // 6 Image section <<<

  // 7 Promotions section >>>
  const [promotionData, setPromotionData] = useState({
    promotion: ""
  })
  const { promotion } = promotionData
  function onInputPromotionChange(e) {
    setPromotionData({ promotion: e.target.value })
  }
  // 7 Promotions section <<<

  // 8 Contact section >>>
  const [contactData, setContactData] = useState({
    nameContact: "",
    phoneNumber: "",
    email: "",
    lineId: ""
  })
  const { nameContact, phoneNumber, email, lineId } = contactData
  function onInputContactonChange(e) {
    setContactData({ ...contactData, [e.target.name]: e.target.value })
  }
  // 8 Contact section <<<

  return (
    <div className="flex justify-center">
      <div className="flex flex-col ">
        <form onSubmit={handleSubmitForm}>
          <div className="max-w-[960px] bg-[#EFEFEF] flex flex-col mt-10 rounded-3xl border-2 border-[#162B78] ">
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
                {/* <h1>lat:{positon.lat} ,lng:{positon.lng}</h1> */}
                <div className = "ml-12 mr-12 mt-5">
                  <Map3 
                    SetPositon={SetPositon}>
                  </Map3>
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
                        <Checkbox {...label} className='text-[#162B78] ml-10' name="fan" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >พัดลม</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-[#162B78] ml-10' name="tv" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >โทรทัศน์</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-[#162B78] ml-10' name="fridge" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >ตู้เย็น</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-[#162B78] ml-10' name="directphone" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >โทรศัพท์สายตรง</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-[#162B78] ml-10' name="wifi" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-64 " >อินเทอร์เน็ตไร้สาย (WIFI) ในห้อง</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-[#162B78] ml-10' name="motoparking" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >ที่จอดรถมอเตอร์ไซด์ / จักรยาน</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-[#162B78] ml-10' name="carparking" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >ที่จอดรถยนต์</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-[#162B78] ml-10' name="swimmingpool" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >สระว่ายน้ำ</h1>
                      </div>
                    </div>

                    <div className='ml-32'>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-[#162B78]' name="fingerprintscanner" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >มีระบบรักษาความปลอดภัย (สแกนลายนิ้วมือ)</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-[#162B78]' name="CCTV" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >กล้องวงจรปิด (CCTV)</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-[#162B78]' name="elevator" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >ลิฟต์</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-[#162B78]' name="securityguard" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >รปภ.</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-[#162B78]' name="conveniencestore" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >ร้านค้า สะดวกซื้อ</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-[#162B78]' name="washingmachine" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >ร้านซัก-รีด / มีบริการเครื่องซักผ้า</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-[#162B78]' name="hairsalon" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >ร้านทำผม-เสริมสวย</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-[#162B78]' name="foodstore" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >ร้านขายอาหาร</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-[#162B78]' name="gym" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >โรงยิม / ฟิตเนส</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-[#162B78]' name="petallowed" onChange={onChangeFacility} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >อนุญาตให้เลี้ยงสัตว์</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="RoomType mb-5">
              <div className="flex flex-row" >
                <h1 className="font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96" >3. ประเภทห้องพัก</h1>
                <button
                    type="button"
                    onClick={handleAddFields}
                    class="ml-[320px] group relative inline-block outline-none text-sm font-medium text-white focus:outline-none focus:ring"
                    >
                    <span class="rounded-xl absolute outline-0 inset-0 border focus:outline-none outline-none border-[#162B78] group-active:border-[#162B78]"></span>
                    <span class="rounded-xl font-IBMPlexSansThai outline-0 focus:outline-none outline-none text-base block border border-[#162B78] text-white bg-[#162B78] px-4 py-3 transition-transform active:border-[#162B78]  active:bg-black group-hover:-translate-x-1 group-hover:-translate-y-1">
                      เพิ่มประเภท
                    </span>
                  </button>
              </div>
              <div>
                { typeFields.map(inputField => (
                  <div 
                    className="border-2 border-[#162B78] rounded-3xl ml-12 mr-12 mt-5 mb-5"
                    key={inputField.id}>
                      <div className="ml-6 mb-6">
                        <div class="flex flex-row ">
                          <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-3 m-2 w-36 mt-7" >รูปแบบห้อง</h1>
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
                            value={inputField.typeName}
                            onChange={event => handleChangeInput(inputField.id, event)}
                          />
                        </div>
                        {/* /////////////////////////////////////////////////////////////////////////////// */}
                        <div class="flex flex-row">
                          <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-3 m-2 w-36 mt-6" >ขนาดห้อง</h1>
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
                            value={inputField.size}
                            onChange={event => handleChangeInput(inputField.id, event)}
                          />
                          <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 mt-7" >ตารางเมตร</h1>
                        </div>
                        {/* /////////////////////////////////////////////////////////////////////////////// */}
                        <div class="flex flex-row">
                        <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-3 m-2 w-36 mt-7" >เช่ารายเดือน</h1>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          defaultValue={1}
                        >
                          <FormControlLabel value={1} control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} className='mt-5 ' />} />
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
                            value={inputField.pricePerMonth}
                            onChange={event => handleChangeInput(inputField.id, event)}

                          />
                          <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-32 mt-7" >บาท/เดือน</h1>
                          <FormControl class="flex flex-row">
                            <FormControlLabel
                              className='mt-5'
                              value="NoMonth"
                              control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} />} />
                            <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] w-44 mt-7 ml-[-15px]" >ไม่มีห้องเช่ารายเดือน</h1>
                          </FormControl>
                        </RadioGroup>
                        </div>
                        {/* /////////////////////////////////////////////////////////////////////////////// */}
                        <div class="flex flex-row ">
                          <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-3 m-2 w-36 mt-7" >เช่ารายวัน</h1>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue={1}
                          >
                            <FormControlLabel value={1} control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} className='mt-5 ' />} />
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
                              value={inputField.pricePerDay}
                              onChange={event => handleChangeInput(inputField.id, event)}
                            />
                            <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-32 mt-7" >บาท/วัน</h1>
                            <FormControl class="flex flex-row">
                              <FormControlLabel
                                className='mt-5  font-IBMPlexSansThai text-xl text-[#162B78]'
                                value="NoDay"
                                control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} />} />
                              <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] w-44 mt-7 ml-[-15px]" >ไม่มีห้องเช่ารายวัน</h1>
                            </FormControl>
                          </RadioGroup>
                        </div>
                        <div class="flex flex-row">
                          <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-3 m-2 w-32 mt-7" >ห้องว่าง</h1>
                          <Switch
                            className="mt-6"
                            checked={typeFields.available}
                            inputProps={{ 'aria-label': 'controlled' }}
                            onChange={handleChangeAvailable}
                          />
                          {typeFields.length !== 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveFields(inputField.id)}
                            class="
                            ml-[550px]
                            mb-[-50px]
                            font-IBMPlexSansThai
                            text-lg 
                            text-[#162B78] 
                            underline 
                            hover:text-red-500
                            m-2"
                            >
                            ลบ
                          </button>
                        )}
                        </div>
                        {/* /////////////////////////////////////////////////////////////////////////////// */}
                      </div>
                  </div>
                )) }
              </div>
            </div>
            <div className="Cost mb-10">
              <div className='items-center '>
                <div className='container'>
                  <h1 className="font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96" >4. ค่าใช้จ่าย</h1>
                  <div class="flex flex-row mt-2 ml-6">
                    <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-40 mt-7" >ค่าน้ำ</h1>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue={1}
                      >
                        <FormControlLabel value={1} control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} className='mt-5 ' />} />
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
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-24 mt-7" >บาท/ยูนิต</h1>
                        <FormControlLabel value={0} control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} className='mt-5' />} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-56 mt-7 " >ราคาตามที่การประปากำหนด</h1>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div class="flex flex-row mt-2 ml-6">
                    <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-40 mt-7" >ค่าไฟ</h1>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue={1}
                      >
                        <FormControlLabel value={1} control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} className='mt-5 ' />} />
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
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-24 mt-7" >บาท/ยูนิต</h1>
                        <FormControlLabel value={0} control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} className='mt-5' />} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-56 mt-7 " >ราคาตามที่การไฟฟ้ากำหนด</h1>
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <div class="flex flex-row mt-2 ml-6">
                    <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-40 mt-7" >ค่าบริการอื่นๆ</h1>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue={1}
                      >
                        <FormControlLabel value={1} control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} className='mt-5 ' />} />
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
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-24 mt-7" >บาท/เดือน</h1>
                        <FormControlLabel value={0} control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} className='mt-5' />} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-56 mt-7 " >รวมในค่าห้องแล้ว</h1>
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <div class="flex flex-row mt-2 ml-6">
                    <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-40 mt-7" >เงินมัดจำ/ประกัน</h1>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue={1}
                      >
                        <FormControlLabel value={1} control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} className='mt-5 ' />} />
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
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-24 mt-7" >บาท</h1>
                        <FormControlLabel value={0} control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} className='mt-5' />} />
                        <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-56 mt-7 " >ไม่มีการเก็บเงินประกัน</h1>
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <div className='Detail container '>
              <h1 className="font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96" >5. รายละเอียด</h1>
              <div className="flex flex-row ml-5">
                <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 mt-6 w-28 ">
                  รายละเอียดภาษาไทย
                </h1>
                <input
                  type={"text"}
                  multiline
                  className="
                            font-IBMPlexSansThai 
                            bg-[#EFEFEF]
                            placeholder:text-zinc-500
                            text-lg
                            pl-5 
                            w-[631px]
                            h-[120px]
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
                  name="detailTHA"
                  value={detailTHA}
                  onChange={onInputDetailChange}
                />
              </div>

              <div className="flex flex-row ml-5">
                <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 mt-6 w-28 ">
                  รายละเอียดภาษาอังกฤษ
                </h1>
                <TextField
                  sx={{ border: '2px solid', borderRadius: 1, font: 'IBMPlexSansThai' }}
                  className='
                            fontfont-IBMPlexSansThai 
                            bg-[#EFEFEF]
                            placeholder:text-zinc-500
                            text-lg
                            pl-2 
                            w-[631px]
                            h-[120px]
                            m-2
                            ml-4
                            mt-4
                            border-[#162B78]
                            rounded-xl'
                  multiline
                  rows={4}
                  placeholder="ระบุชื่อที่พัก"
                  name="detailENG"
                  value={detailENG}
                  onChange={onInputDetailChange}
                />

              </div>
            </div>
            <div className='Image container'>
              <h1 className="font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96" >6. รูปภาพ</h1>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="EXAMPLE IMAGE PATH"
                name="imagePaths"
                value={imagePaths}
                onChange={onImagePathChange}
              />
              <Button variant="contained">เพิ่ม image path</Button>
            </div>
            <div className="Promotion">
              <h1 className="font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96" >7. โปรโมชั่น</h1>
              <div className="flex flex-row ml-5">
                <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 mt-6 w-28 ">
                  รายละเอียดโปรโมชัน
                </h1>
                <input
                  type={"text"}
                  multiline
                  className="
                            font-IBMPlexSansThai 
                            bg-[#EFEFEF]
                            placeholder:text-zinc-500
                            text-lg
                            pl-5 
                            w-[631px]
                            h-[120px]
                            m-2
                            ml-4
                            mt-4
                            border-2 
                            border-[#162B78]
                            focus:outline-none
                            focus:border-[#162B78]
                            rounded-xl
                            "
                  placeholder="ระบุโปร ไม่มีใส่ -"
                  name="promotion"
                  value={promotion}
                  onChange={onInputPromotionChange}
                />
              </div>
            </div>
            <div className="Contact mb-10">
              <div className='container'>
                <h1 className="font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96" >8. ข้อมูลสำหรับติดต่อ</h1>
                <div className="ml-6">
                  <div class="flex flex-row mt-2">
                    <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-24 mt-7" >ชื่อผู้ดูแล</h1>
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
                      name="nameContact"
                      value={nameContact}
                      onChange={onInputContactonChange}
                    />
                  </div>
                  <div class="flex flex-row">
                    <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-24 mt-6" >เบอร์ติดต่อ</h1>
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
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={onInputContactonChange}
                    />
                  </div>

                  <div class="flex flex-row">
                    <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-24 mt-7" >E-mail</h1>
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
                      name="email"
                      value={email}
                      onChange={onInputContactonChange}
                    />
                  </div>
                  <div class="flex flex-row">
                    <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-24 mt-7" >Line ID</h1>
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
                      name="lineId"
                      value={lineId}
                      onChange={onInputContactonChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end m-5">
            <button
              type="submit"
              class="ml-5 group relative inline-block outline-none text-sm font-medium text-white focus:outline-none focus:ring"
            >
              <span class="rounded-xl absolute outline-0 inset-0 border focus:outline-none outline-none border-[#162B78] group-active:border-[#162B78]"></span>
              <span class="rounded-xl font-IBMPlexSansThai outline-0 focus:outline-none outline-none text-base block border border-[#162B78] text-white bg-[#162B78] px-4 py-3 transition-transform active:border-[#162B78]  active:bg-[#162B78] group-hover:-translate-x-1 group-hover:-translate-y-1">
                บันทึก
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddLodge;