import React, { useState, useMemo, useEffect } from "react";
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
import { useParams } from "react-router-dom";
import Map3 from "../Register/Map3.js";

export default function Edit() {
  // Main section >>>
  const { lodgeId } = useParams()
  const dispatch = useDispatch()
  const userReduxData = useSelector((state) => state.data.userData)
  let navigate = useNavigate()
  function handleSubmitForm(e) {
    e.preventDefault()//
    let userLodges = userReduxData.lodgeOwn.slice(1, userReduxData.lodgeOwn.length - 1).split(", ")
    landLordApi.put(`/lodge/update/${lodgeId}`, {
      information: { ...informationData, lat: positon.lat, lng: positon.lng },
      facility: { facilities: tempF },
      roomType: [typeData],
      cost: costData,
      detail: detailData,
      imagePath: imageData,
      promotion: promotionData,
      contact: contactData
    }).then((res) => {
      alert("Edit success")
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

  const [lodge, setLodge] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [informationData, setInformationData] = useState({
    name: "Hello",
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

  const [facilityData, setFacilityData] = useState({
    facilities: []
  })

  const [typeData, setTypeData] = useState({
    typeName: "",
    size: 0,
    pricePerMonth: 0,
    pricePerDay: 0,
    available: true
  })

  const [costData, setCostData] = useState({
    waterPerUnit: 0,
    electricPerUnit: 0,
    commonFee: 0,
    insurance: 0,
  })

  const [detailData, setDetailData] = useState({
    detailTHA: "",
    detailENG: ""
  })

  const [promotionData, setPromotionData] = useState({
    promotion: ""
  })

  const [contactData, setContactData] = useState({
    nameContact: "",
    phoneNumber: "",
    email: "",
    lineId: ""
  })
  const [imageData, setImageData] = useState({
    imagePaths: []
  })
  let hello = 'yo'
  const getLodge = async () => {
    await landLordApi
      .get("/lodge/get/" + lodgeId)
      .then((response) => {
        setLodge(response.data)
        setInformationData({
          name: response.data.information.name,
          nameEng: response.data.information.nameEng,
          houseNumber: response.data.information.houseNumber,
          street: response.data.information.street,
          soi: response.data.information.soi,
          subArea: response.data.information.subArea,
          area: response.data.information.area,
          city: response.data.information.city,
          postalCode: response.data.information.postalCode,
          lat: response.data.information.lat,
          lng: response.data.information.lng
        })
        setFacilityData({
          facilities: response.data.facility.facilities
        })
        setTempF(response.data.facility.facilities)
        for (let i = 0; i < response.data.roomType.length; i++) {
          setTypeData({
            typeName: response.data.roomType[i].typeName,
            size: response.data.roomType[i].size,
            pricePerMonth: response.data.roomType[i].pricePerMonth,
            pricePerDay: response.data.roomType[i].pricePerDay,
            available: response.data.roomType[i].available
          })
        }
        setCostData({
          waterPerUnit: response.data.cost.waterPerUnit,
          electricPerUnit: response.data.cost.electricPerUnit,
          commonFee: response.data.cost.commonFee,
          insurance: response.data.cost.insurance,
        })
        setDetailData({
          detailTHA: response.data.detail.detailTHA,
          detailENG: response.data.detail.detailENG
        })
        setPromotionData({
          promotion: response.data.promotion.promotion
        })
        setContactData({
          nameContact: response.data.contact.nameContact,
          phoneNumber: response.data.contact.phoneNumber,
          email: response.data.contact.email,
          lineId: response.data.contact.lineId
        })
        setImageData({
          imagePaths: response.data.imagePath.imagePaths
        })
        setIsLoading(false)
        console.log(response.data)
        console.log(response.data.roomType[0].typeName)
        SetPositon({ lat: response.data.information.lat, lng: response.data.information.lng })


      })
      .catch((error) => console.log(error))
    // console.log(lodge.information)

  };

  useEffect(() => {
    getLodge();
  }, []);

  // 1 Information  section >>>
  const { name, nameEng, houseNumber, street, soi, subArea, area, city, postalCode, lat, lng } = informationData
  function onInputinformationChange(e) {
    setInformationData({ ...informationData, [e.target.name]: e.target.value })
  }
  // 1.1 Map section >>
  const [positon, SetPositon] = useState({ lat: 13.7298889, lng: 100.7782323 })
  // 1.1 Map section <<
  // 1 Information  section <<<


  // 2 Facility section >>>
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
  const { typeName, size, pricePerMonth, pricePerDay, available } = typeData
  function onInputtypeChange(e) {
    setTypeData({ ...typeData, [e.target.name]: e.target.name === "typeName" ? e.target.value : parseFloat(e.target.value) })
  }
  function onInputtypeChangeAvaliable(e) {
    setTypeData(({ ...typeData, available: !available }))
  }
  // 3 Type section <<<


  // 4 Cost section <<<
  const { waterPerUnit, electricPerUnit, commonFee, insurance } = costData
  function onInputcostChange(e) {
    setCostData({ ...costData, [e.target.name]: parseFloat(e.target.value) })
  }
  // 4 Cost section <<<

  // 5 Detail section >>>
  const { detailTHA, detailENG } = detailData
  function onInputDetailChange(e) {
    setDetailData({ ...detailData, [e.target.name]: e.target.value })
  }
  // 5 Detail section <<<

  // 6 Image section >>>

  const { imagePaths } = imageData
  function onImagePathChange(e) {
    setImageData({ imagePaths: [] })
    let temp = []
    temp.push(e.target.value)
    setImageData({ imagePaths: temp })
  }
  // 6 Image section <<<

  // 7 Promotions section >>>
  const { promotion } = promotionData
  function onInputPromotionChange(e) {
    setPromotionData({ promotion: e.target.value })
  }
  // 7 Promotions section <<<

  // 8 Contact section >>>
  const { nameContact, phoneNumber, email, lineId } = contactData
  function onInputContactonChange(e) {
    setContactData({ ...contactData, [e.target.name]: e.target.value })
  }
  // 8 Contact section <<<

  return (<>

    <div className="flex justify-center bg-[#EFEFEF]">
      <div className="flex flex-col ">
        <form onSubmit={handleSubmitForm}>
          <div className="max-w-[960px] bg-white flex flex-col mt-10 rounded-3xl border-2 border-gray-900 ">
            <div className="information mb-10">
              <div className="items-center ">
                <div className="container">
                  <h1 className="font-IBMPlexSansThai text-3xl text-gray-900 ml-12 w-96 mt-10 ">
                    ????????????????????????????????????????????????????????????
                  </h1>
                  <div class="mb-5 mt-5 ml-12 mr-12 border-b border-gray-900"></div>
                  <h1 className="font-IBMPlexSansThai text-2xl text-gray-900 ml-12 m-2 w-96 mt-4">
                    1. ????????????????????????????????????
                  </h1>
                  <div className="flex flex-row">
                    <h1 className="font-IBMPlexSansThai text-xl text-gray-900 ml-12 m-2 mt-6 w-40 ">
                      ??????????????????????????????
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
                            border-gray-900
                            focus:outline-none
                            focus:border-gray-900
                            rounded-xl
                            "
                      placeholder="??????????????????????????????????????????"
                      name="name"
                      value={name}
                      onChange={onInputinformationChange}
                    />
                  </div>
                  <div className="flex flex-row">
                    <h1 className="font-IBMPlexSansThai text-xl text-gray-900 ml-12 m-4 mt-2 w-32">
                      ?????????????????????
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
                                border-gray-900
                                focus:outline-none
                                focus:border-gray-900
                                rounded-xl"
                        placeholder="??????????????????"
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
                                border-gray-900
                                focus:outline-none
                                focus:border-gray-900
                                rounded-xl"
                        placeholder="?????????"
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
                                border-gray-900
                                focus:outline-none
                                focus:border-gray-900
                                rounded-xl"
                        placeholder="?????????"
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
                                border-gray-900
                                focus:outline-none
                                focus:border-gray-900
                                rounded-xl"
                      placeholder="???????????? / ????????????"
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
                                border-gray-900
                                focus:outline-none
                                focus:border-gray-900
                                rounded-xl"
                      placeholder="??????????????? / ?????????"
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
                                border-gray-900
                                focus:outline-none
                                focus:border-gray-900
                                rounded-xl"
                      placeholder="?????????????????????"
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
                                border-gray-900
                                focus:outline-none
                                focus:border-gray-900
                                rounded-xl"
                    placeholder="????????????????????????????????????"
                    name="postalCode"
                    value={postalCode}
                    onChange={onInputinformationChange}
                  />
                </div>
                <div className="ml-12 mr-12 mt-5">
                  <Map3
                    SetPositon={SetPositon}>
                  </Map3>
                </div>
              </div>
            </div>
            <div class="mb-5 ml-12 mr-12 border-b border-gray-900"></div>
            <div className="facilities mb-5">
              <div className='items-center  '>
                <div className='content' >
                  <h1 className="font-IBMPlexSansThai text-2xl text-gray-900 ml-12 m-2 w-96" >2. ??????????????????????????????????????????????????????</h1>
                  <div className='flex flex-row mt-4 '>
                    <div >
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900 ml-10' name="airconditioner" onChange={onChangeFacility} checked={tempF.indexOf("airconditioner") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-44" >????????????????????????????????????????????????</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900 ml-10' name="furniture" onChange={onChangeFacility} checked={tempF.indexOf("furniture") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-44 " >????????????????????????????????????-?????????, ???????????????</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900 ml-10' name="waterheater" onChange={onChangeFacility} checked={tempF.indexOf("waterheater") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-44 " >????????????????????????????????????????????????</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900 ml-10' name="fan" onChange={onChangeFacility} checked={tempF.indexOf("fan") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-44 " >???????????????</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900 ml-10' name="tv" onChange={onChangeFacility} checked={tempF.indexOf("tv") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-44 " >????????????????????????</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900 ml-10' name="fridge" onChange={onChangeFacility} checked={tempF.indexOf("fridge") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-44 " >?????????????????????</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900 ml-10' name="directphone" onChange={onChangeFacility} checked={tempF.indexOf("directphone") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-44 " >??????????????????????????????????????????</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900 ml-10' name="wifi" onChange={onChangeFacility} checked={tempF.indexOf("wifi") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-64 " >?????????????????????????????????????????????????????? (WIFI) ??????????????????</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900 ml-10' name="motoparking" onChange={onChangeFacility} checked={tempF.indexOf("motoparking") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-60 " >????????????????????????????????????????????????????????? / ?????????????????????</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900 ml-10' name="carparking" onChange={onChangeFacility} checked={tempF.indexOf("carparking") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-60 " >????????????????????????????????????</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900 ml-10' name="swimmingpool" onChange={onChangeFacility} checked={tempF.indexOf("swimmingpool") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-60 " >??????????????????????????????</h1>
                      </div>
                    </div>

                    <div className='ml-32'>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900' name="fingerprintscanner" onChange={onChangeFacility} checked={tempF.indexOf("fingerprintscanner") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-96 " >?????????????????????????????????????????????????????????????????? (??????????????????????????????????????????)</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900' name="CCTV" onChange={onChangeFacility} checked={tempF.indexOf("CCTV") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-96 " >???????????????????????????????????? (CCTV)</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900' name="elevator" onChange={onChangeFacility} checked={tempF.indexOf("elevator") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-96 " >???????????????</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900' name="securityguard" onChange={onChangeFacility} checked={tempF.indexOf("securityguard") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-60 " >?????????.</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900' name="conveniencestore" onChange={onChangeFacility} checked={tempF.indexOf("conveniencestore") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-96 " >????????????????????? ???????????????????????????</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900' name="washingmachine" onChange={onChangeFacility} checked={tempF.indexOf("washingmachine") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-96 " >?????????????????????-????????? / ???????????????????????????????????????????????????????????????</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900' name="hairsalon" onChange={onChangeFacility} checked={tempF.indexOf("hairsalon") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-96 " >????????????????????????-????????????????????????</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900' name="foodstore" onChange={onChangeFacility} checked={tempF.indexOf("foodstore") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-96 " >????????????????????????????????????</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900' name="gym" onChange={onChangeFacility} checked={tempF.indexOf("gym") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-60 " >?????????????????? / ??????????????????</h1>
                      </div>
                      <div className='flex flex-row'>
                        <Checkbox {...label} className='text-gray-900' name="petallowed" onChange={onChangeFacility} checked={tempF.indexOf("petallowed") !== -1} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-60 " >????????????????????????????????????????????????????????????</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-5 ml-12 mr-12 border-b border-gray-900"></div>
            <div className="RoomType mb-5">
              <div className='items-center '>
                <div className='container'>
                  <h1 className="font-IBMPlexSansThai text-2xl text-gray-900 ml-12 m-2 w-96" >3. ???????????????????????????????????????</h1>
                  <div className="">
                    <div className="ml-6">
                      <div class="flex flex-row mt-2">
                        <h1 className="font-IBMPlexSansThai text-xl text-gray-900 ml-12 m-2 w-36 mt-7" >??????????????????????????????</h1>
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
                            border-gray-900 
                            focus:outline-none
                            focus:border-gray-900
                          rounded-xl
                              "
                          placeholder="??????????????????????????????"
                          name="typeName"
                          value={typeName}
                          onChange={onInputtypeChange}
                        />
                      </div>
                      <div class="flex flex-row">
                        <h1 className="font-IBMPlexSansThai text-xl text-gray-900 ml-12 m-2 w-36 mt-6" >????????????????????????</h1>
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
                                    border-gray-900
                                    focus:outline-none
                                    focus:border-gray-900
                                    rounded-xl
                                    "
                          placeholder="????????????????????????????????????"
                          name="size"
                          value={size}
                          onChange={onInputtypeChange}
                        />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-44 mt-7" >???????????????????????????</h1>
                      </div>

                      <div class="flex flex-row">
                        <h1 className="font-IBMPlexSansThai text-xl text-gray-900 ml-12 m-2 w-36 mt-7" >????????????????????????????????????</h1>
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
                                        border-gray-900
                                        focus:outline-none
                                        focus:border-gray-900
                                        rounded-xl
                                        "
                            placeholder="?????????????????????????????????????????????????????????"
                            name="pricePerMonth"
                            value={pricePerMonth}
                            onChange={onInputtypeChange}

                          />
                          <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-32 mt-7" >?????????/???????????????</h1>
                          <FormControl class="flex flex-row">
                            <FormControlLabel
                              className='mt-5'
                              value="NoMonth"
                              control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} />} />
                            <h1 className="font-IBMPlexSansThai text-lg text-gray-900 w-44 mt-7 ml-[-15px]" >???????????????????????????????????????????????????????????????</h1>
                          </FormControl>
                        </RadioGroup>
                      </div>

                      <div class="flex flex-row">
                        <h1 className="font-IBMPlexSansThai text-xl text-gray-900 ml-12 m-2 w-36 mt-7" >??????????????????????????????</h1>
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
                                        border-gray-900
                                        focus:outline-none
                                        focus:border-gray-900
                                        rounded-xl
                                        "
                            placeholder="???????????????????????????????????????????????????"
                            name="pricePerDay"
                            value={pricePerDay}
                            onChange={onInputtypeChange}
                          />
                          <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-32 mt-7" >?????????/?????????</h1>
                          <FormControl class="flex flex-row">
                            <FormControlLabel
                              className='mt-5  font-IBMPlexSansThai text-xl text-gray-900'
                              value="NoDay"
                              control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} />} />
                            <h1 className="font-IBMPlexSansThai text-lg text-gray-900 w-44 mt-7 ml-[-15px]" >?????????????????????????????????????????????????????????</h1>
                          </FormControl>
                        </RadioGroup>
                      </div>
                      <div class="flex flex-row">
                        <h1 className="font-IBMPlexSansThai text-xl text-gray-900 ml-12 m-2 w-28 mt-7" >????????????????????????</h1>
                        <Switch
                          className="ml-4 mt-6 "
                          sx={{ '& .MuiSwitch-switchBase.Mui-checked': { color: '#162B78', } }}
                          checked={available}
                          inputProps={{ 'aria-label': 'controlled' }}
                          onChange={onInputtypeChangeAvaliable}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-5 ml-12 mr-12 border-b border-gray-900"></div>
            <div className="Cost mb-5">
              <div className='items-center '>
                <div className='container'>
                  <h1 className="font-IBMPlexSansThai text-2xl text-gray-900 ml-12 m-2 w-96" >4. ??????????????????????????????</h1>
                  <div class="flex flex-row mt-2 ml-6">
                    <h1 className="font-IBMPlexSansThai text-xl text-gray-900 ml-12 m-2 w-40 mt-7" >??????????????????</h1>
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
                                  border-gray-900 
                                  focus:outline-none
                                  focus:border-gray-900
                                  rounded-xl
                                  "
                          name="waterPerUnit"
                          value={waterPerUnit}
                          onChange={onInputcostChange}
                        />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-24 mt-7" >?????????/???????????????</h1>
                        <FormControlLabel value={0} control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} className='mt-5' />} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 ml-[-15px] w-56 mt-7 " >?????????????????????????????????????????????????????????????????????</h1>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div class="flex flex-row mt-2 ml-6">
                    <h1 className="font-IBMPlexSansThai text-xl text-gray-900 ml-12 m-2 w-40 mt-7" >???????????????</h1>
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
                              border-gray-900 
                              focus:outline-none
                              focus:border-gray-900
                              rounded-xl
                              "
                          name="electricPerUnit"
                          value={electricPerUnit}
                          onChange={onInputcostChange}
                        />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-24 mt-7" >?????????/???????????????</h1>
                        <FormControlLabel value={0} control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} className='mt-5' />} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 ml-[-15px] w-56 mt-7 " >?????????????????????????????????????????????????????????????????????</h1>
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <div class="flex flex-row mt-2 ml-6">
                    <h1 className="font-IBMPlexSansThai text-xl text-gray-900 ml-12 m-2 w-40 mt-7" >??????????????????????????????????????????</h1>
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
                              border-gray-900 
                              focus:outline-none
                              focus:border-gray-900
                              rounded-xl
                              "
                          name="commonFee"
                          value={commonFee}
                          onChange={onInputcostChange}
                        />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-24 mt-7" >?????????/???????????????</h1>
                        <FormControlLabel value={0} control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} className='mt-5' />} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 ml-[-15px] w-56 mt-7 " >????????????????????????????????????????????????</h1>
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <div class="flex flex-row mt-2 ml-6">
                    <h1 className="font-IBMPlexSansThai text-xl text-gray-900 ml-12 m-2 w-40 mt-7" >???????????????????????????/??????????????????</h1>
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
                              border-gray-900 
                              focus:outline-none
                              focus:border-gray-900
                              rounded-xl
                              "
                          name="insurance"
                          value={insurance}
                          onChange={onInputcostChange}
                        />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 m-2 w-24 mt-7" >?????????</h1>
                        <FormControlLabel value={0} control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} className='mt-5' />} />
                        <h1 className="font-IBMPlexSansThai text-lg text-gray-900 ml-[-15px] w-56 mt-7 " >??????????????????????????????????????????????????????????????????</h1>
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-5 ml-12 mr-12 border-b border-gray-900"></div>
            <div className='Detail mb-5 '>
              <h1 className="font-IBMPlexSansThai text-2xl text-gray-900 ml-12 m-2 w-96" >5. ??????????????????????????????</h1>
              <div className="flex flex-row ml-5">
                <h1 className="font-IBMPlexSansThai text-xl text-gray-900 ml-12 m-2 mt-6 w-28 ">
                  ????????????????????????????????????????????????
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
                            pt-2
                            border-gray-900
                            rounded-xl
                            '
                  multiline
                  rows={4}
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  placeholder="????????????????????????????????????????????????????????????"
                  name="detailTHA"
                  value={detailTHA}
                  onChange={onInputDetailChange}
                />
              </div>
            </div>
            <div class="mb-5 ml-12 mr-12 border-b border-gray-900"></div>
            <div className='Image mb-5'>
              <h1 className="font-IBMPlexSansThai text-2xl text-gray-900 ml-12 m-2 w-96" >6. ??????????????????</h1>
              <div className="font-IBMPlexSansThai text-gray-900 ml-12 m-2 w-96">
                {imageData.imagePaths?.map((img, idx) => {
                  return <p key={idx}>
                    {img}
                  </p>
                })}
              </div>
            </div>
            <div class="mb-5 ml-12 mr-12 border-b border-gray-900"></div>
            <div className="Promotion mb-5">
              <h1 className="font-IBMPlexSansThai text-2xl text-gray-900 ml-12 m-2 w-96" >7. ???????????????????????????</h1>
              <div className="flex flex-row ml-5">
                <h1 className="font-IBMPlexSansThai text-xl text-gray-900 ml-12 m-2 mt-6 w-28 ">
                  ??????????????????????????????????????????????????????
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
                            border-gray-900
                            focus:outline-none
                            focus:border-gray-900
                            rounded-xl
                            "
                  placeholder="????????????????????? ???????????????????????? -"
                  name="promotion"
                  value={promotion}
                  onChange={onInputPromotionChange}
                />
              </div>
            </div>
            <div class="mb-5 ml-12 mr-12 border-b border-gray-900"></div>
            <div className="Contact mb-10">
              <div className='container'>
                <h1 className="font-IBMPlexSansThai text-2xl text-gray-900 ml-12 m-2 w-96" >8. ??????????????????????????????????????????????????????</h1>
                <div className="ml-6">
                  <div class="flex flex-row mt-2">
                    <h1 className="font-IBMPlexSansThai text-xl text-gray-900 ml-12 m-2 w-24 mt-7" >?????????????????????????????????</h1>
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
                              border-gray-900 
                              focus:outline-none
                              focus:border-gray-900
                              rounded-xl
                              "
                      placeholder="?????????????????????????????????????????????"
                      name="nameContact"
                      value={nameContact}
                      onChange={onInputContactonChange}
                    />
                  </div>
                  <div class="flex flex-row">
                    <h1 className="font-IBMPlexSansThai text-xl text-gray-900 ml-12 m-2 w-24 mt-6" >?????????????????????????????????</h1>
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
                                    border-gray-900 
                                    focus:outline-none
                                    focus:border-gray-900
                                    rounded-xl
                                    "
                      placeholder="?????????????????????????????????????????????"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={onInputContactonChange}
                    />
                  </div>

                  <div class="flex flex-row">
                    <h1 className="font-IBMPlexSansThai text-xl text-gray-900 ml-12 m-2 w-24 mt-7" >E-mail</h1>
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
                                        border-gray-900 
                                        focus:outline-none
                                        focus:border-gray-900
                                        rounded-xl
                                        "
                      placeholder="???????????? E-mail"
                      name="email"
                      value={email}
                      onChange={onInputContactonChange}
                    />
                  </div>
                  <div class="flex flex-row">
                    <h1 className="font-IBMPlexSansThai text-xl text-gray-900 ml-12 m-2 w-24 mt-7" >Line ID</h1>
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
                                        border-gray-900 
                                        focus:outline-none
                                        focus:border-gray-900
                                        rounded-xl
                                        "
                      placeholder="???????????? Line ID"
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
              class="rounded-full ml-5 group relative inline-block outline-none text-sm font-medium text-white focus:outline-none focus:ring"
            >
              <span class="shadow-md shadow-gray-900 rounded-full absolute outline-0 inset-0 border focus:outline-none outline-none border-gray-900 group-active:border-gray-900"></span>
              <span class="rounded-full font-IBMPlexSansThai outline-0 focus:outline-none outline-none text-base block border border-gray-900 text-white bg-gray-900 px-4 py-3 transition-transform active:border-gray-900  active:bg-gray-900 group-hover:-translate-x-1 group-hover:-translate-y-1">
                ??????????????????
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </>)
}
