import React, { useState, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import ButtonCT from "../../components/ButtonCT";
import Map from "../../components/Map";
import CheckBoxCT from "../../components/CheckBoxCT";
import "./FilterPage.css";
import { Slider, CircularProgress } from "@mui/material";
import { matchingApi } from "../../axiosConfig";

const FilterPage = () => {
  const [price, setPrice] = useState([1000, 6500]);
  const [circleRad, setCircleRad] = useState(1000);
  const navigate = useNavigate();
  const [lodges, setLodges] = useState([]);
  const [facilityData, setFacilityData] = useState([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  });

  const getLodge = () => {
    matchingApi
      .post("/match/filter", {
        facilitiesInput: facilityData,
        radiusFromMid: circleRad,
        minCostPerMonth: price[0],
        maxCostPerMonth: price[1],
      })
      .then((res) => {
        setLodges(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  function onCheck(e) {
    let found = facilityData.indexOf(e.target.name) !== -1;
    if (found) {
      //remove
      setFacilityData(facilityData.filter((x) => x !== e.target.name));
    } else {
      //add it
      setFacilityData([...facilityData, e.target.name]);
    }
  }

  useEffect(() => {
    getLodge();
  }, [price, circleRad, facilityData]);

  if (!isLoaded)
    return (
      <div>
        <CircularProgress />
      </div>
    );

  return (
    <div className="bg-[#EFEFEF]">
      <div className="relative w-full h-full">
        <div className="h-15 absolute top-0 mr-10 right-10 pt-12">
          {/* <ButtonCT btnName={"click to serch"} onClick={() => getLodge()} /> */}
        </div>
        <div className="container pt-12 ">
          <div className="shadow-lg shadow-gray-400">
            <Map rad={circleRad} lodgeData={lodges} />
          </div>
        </div>
        <div className="flex">
          <div className="container my-20">
            {lodges?.map((lodge, idx) => {
              return (
                <section
                  key={idx}
                  onClick={() => navigate(`/Lodges/${lodge.lodgeId}`)}
                  class="m-5 cursor-pointer flex flex-row overflow-hidden rounded-lg shadow transition hover:shadow-lg"
                >
                  <img
                    alt="Office"
                    src={
                      lodge.imagePath.imagePaths.length === 0
                        ? "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        : lodge.imagePath.imagePaths[0]
                    }
                    class="h-56 w-56 object-cover"
                  />

                  <div class="bg-white p-4 sm:p-6 w-screen">
                    <time
                      datetime="2022-10-10"
                      class="block text-xs text-gray-500"
                    >
                      10th Oct 2022
                    </time>

                    <h3 class="mt-0.5 text-lg text-gray-900">
                      {lodge.information.name}
                    </h3>

                    <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                      {lodge.detail.detailTHA}
                    </p>
                  </div>
                </section>
              );
            })}
          </div>
          <div className="w-1/4 overflow-hidden h-screen flex flex-col items-center justify-center bg-white rounded-xl m-8 shadow-lg shadow-gray-400">
            <div className="font-IBMPlexSansThai p-3 rounded  text-black w-[390px] mx-auto h-5/6 my-7">
              <h1 className="text-2xl text-center font-bold mb-5 mt-[-30px]">
                ?????????????????????????????????????????????????????????????????? ?
              </h1>
              <div className="flex flex-col w-full h-full overflow-y-scroll overflow-x-hidden custom-class">
                <h1 className="text-xl my-7">?????????????????????????????? ?????????. (????????????)</h1>
                <Slider
                  className="w-[330px] ml-3"
                  value={circleRad}
                  onChange={(e, newValue) => setCircleRad(newValue)}
                  aria-label="Default"
                  size="small"
                  min={100}
                  max={5000}
                  sx={{ color: "#000" }}
                  valueLabelDisplay="on"
                />
                <h1 className="text-xl mt-5 mb-5">????????????????????????????????????(?????????)</h1>
                <Slider
                  className="w-[330px] ml-3"
                  disableSwap
                  value={price}
                  onChange={(event, newValue) => {
                    setPrice(newValue);
                  }}
                  size="small"
                  min={0}
                  max={10000}
                  valueLabelDisplay="auto"
                  sx={{
                    color: "#000",
                  }}
                />
                <div className="flex my-5 justify-between items-center w-full">
                  <div className="flex justify-center items-center ">
                    <label className="mr-3 text-center" htmlFor="startPrice">
                      ????????????????????????????????????
                    </label>
                    <input
                      type="email"
                      id="startPrice"
                      value={price[0]}
                      disabled
                      class="p-1 w-1/2 rounded-md border-gray-500 shadow-sm sm:text-sm"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <label className="mr-3 text-center" htmlFor="endPrice">
                      ??????????????????????????????
                    </label>
                    <input
                      type="endPrice"
                      value={price[1]}
                      id="UserEmail"
                      disabled
                      class="p-1 w-1/2 rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                  </div>
                </div>

                <h1 className="text-xl m-2">?????????????????????????????????????????????????????? ???????????????????????????</h1>
                <CheckBoxCT
                  onCheck={onCheck}
                  displayName={"??????????????????????????????????????????"}
                  name="directphone"
                />
                <CheckBoxCT
                  displayName={"????????????????????????????????????????????????"}
                  onCheck={onCheck}
                  name="airconditioner"
                />
                <CheckBoxCT
                  displayName={"???????????????"}
                  onCheck={onCheck}
                  name="fan"
                />
                <CheckBoxCT
                  displayName={"????????????????????????"}
                  onCheck={onCheck}
                  name="tv"
                />
                <CheckBoxCT
                  displayName={"?????????????????????"}
                  onCheck={onCheck}
                  name="fridge"
                />
                <CheckBoxCT
                  displayName={"????????????????????????????????????, ?????????, ???????????????"}
                  onCheck={onCheck}
                  name="furniture"
                />
                <CheckBoxCT
                  displayName={"????????????????????????????????????????????????"}
                  onCheck={onCheck}
                  name="waterheater"
                />
                <CheckBoxCT
                  displayName={"?????????????????????????????????????????????????????? (WIFI)"}
                  onCheck={onCheck}
                  name="wifi"
                />
                <CheckBoxCT
                  displayName={"????????????????????????????????????????????????????????????"}
                  onCheck={onCheck}
                  name="petallowed"
                />
                <h1 className="text-xl m-2 mt-10">
                  ?????????????????????????????????????????????????????? ??????????????????????????????
                </h1>
                <CheckBoxCT
                  displayName={"?????????????????????????????????????????????????????????????????? (??????????????????????????????????????????)"}
                  onCheck={onCheck}
                  name="fingerprintscanner"
                />
                <CheckBoxCT
                  displayName={"????????????????????????????????????(CCTV)"}
                  onCheck={onCheck}
                  name="CCTV"
                />
                <CheckBoxCT
                  displayName={"????????????????????????????????????????????????????????? / ?????????????????????"}
                  onCheck={onCheck}
                  name="motoparking"
                />
                <CheckBoxCT
                  displayName={"????????????????????????????????????"}
                  onCheck={onCheck}
                  name="carparking"
                />
                <CheckBoxCT
                  displayName={"??????????????????????????????"}
                  onCheck={onCheck}
                  name="swimmingpool"
                />
                <CheckBoxCT
                  displayName={"??????????????????"}
                  onCheck={onCheck}
                  name="gym"
                />
                <CheckBoxCT
                  displayName={"?????????????????????-????????? / ???????????????????????????????????????????????????????????????"}
                  onCheck={onCheck}
                  name="washingmachine"
                />
                <CheckBoxCT
                  displayName={"????????????????????????-????????????????????????"}
                  onCheck={onCheck}
                  name="hairsalon"
                />
                <CheckBoxCT
                  displayName={"???????????????"}
                  onCheck={onCheck}
                  name="elevator"
                />
                <CheckBoxCT
                  displayName={"????????????????????????????????????????????????"}
                  onCheck={onCheck}
                  name="conveniencestore"
                />
                <CheckBoxCT
                  displayName={"????????????????????????????????????"}
                  onCheck={onCheck}
                  name="foodstore"
                />
                <CheckBoxCT
                  displayName={"?????????"}
                  onCheck={onCheck}
                  name="securityguard"
                />
                <div className="mb-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
