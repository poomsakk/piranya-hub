import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Call, CheckCircle } from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";
import imgUrl from "../helper/imgUrl.json";
import { data } from "../data";
import ImageCom from "./ImageCom";
import TableCT from "./TableCT";
import ArticleCT from "./ArticleCT";
import { landLordApi } from "../axiosConfig";

const LodgeInfo = () => {
  const { lodgeId } = useParams();
  const [lodge, setLodge] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getLodge = () => {
    landLordApi
      .get("/lodge/get/" + lodgeId)
      .then((response) => {
        setLodge(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getLodge();
  }, []);

  if (isLoading)
    return (
      <div className="container">
        <h1>Loading ...</h1>
      </div>
    );

  return (
    <div className="bg-[#EFEFEF]">
      <div className="container">
        <div className="w-full h-full flex justify-between ">
          <div className="font-IBMPlexSansThai w-3/4 h-full">
            <section className="my-5">
              <Typography variant="h3" className="font-IBMPlexSansThai">
                {lodge.information.name}
              </Typography>
              <Typography variant="h7" className="font-IBMPlexSansThai">
                {lodge.information.soi} {lodge.information.street}{" "}
                {lodge.information.subArea} {lodge.information.area}{" "}
                {lodge.information.city} {lodge.information.postalCode}
              </Typography>
            </section>
            <section>
              <Carousel>
                {lodge.imagePath.imagePaths.map(
                  (
                    item,
                    i //old -> imgUrl.map(...)
                  ) => (
                    <ImageCom key={i} item={item} />
                  )
                )}
              </Carousel>
            </section>
            <section>
              <h1 className="text-xl font-bold my-5">รายละเอียด</h1>
              <div className="flex">
                <div className="w-1/2">
                  <p>{lodge.detail.detailTHA}</p>
                </div>
                <div className="ml-10 w-1/2">
                  <div className="rounded border border-gray-100 p-8 shadow-lg shadow-gray-300">
                    <div className="flex justify-between">
                      <h1>ราคาที่พัก </h1>
                      <h1>{lodge.roomType[0].pricePerMonth} บาท/เดือน</h1>
                    </div>
                    <div className="flex justify-between">
                      <h1>ค่ามัดจำ </h1>
                      <h1>
                        {lodge.cost.insurance === 0
                          ? "-"
                          : lodge.cost.insurance}{" "}
                        บาท
                      </h1>
                    </div>
                    <div className="flex justify-between">
                      <h1>ค่าไฟ </h1>
                      <h1>{lodge.cost.electricPerUnit} บาทต่อหน่วย</h1>
                    </div>
                    <div className="flex justify-between">
                      <h1>ค่าน้ำ </h1>
                      <h1>{lodge.cost.waterPerUnit} บาทต่อหน่วย</h1>
                    </div>
                    <div className="flex justify-between">
                      <h1>ค่าบริการอื่นๆ: </h1>
                      <h1>
                        {lodge.cost.commonFee === 0
                          ? "-"
                          : lodge.cost.commonFee}{" "}
                        บาท
                      </h1>
                    </div>
                    <div className="flex justify-between">
                      <h1>อินเทอร์เน็ต </h1>
                      <h1>โทรสอบถาม</h1>
                    </div>
                    <div className="flex items-center justify-center mt-6">
                      <Call
                        fontSize="large"
                        sx={{
                          backgroundColor: "#00A96E",
                          borderRadius: "50%",
                          color: "#fff",
                          padding: "2px",
                        }}
                      />
                      <h1 className="text-[#00A96E] ml-3 text-2xl text-center font-bold">
                        {lodge.contact.phoneNumber}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h1 className="text-xl font-bold my-5">ประเภทห้อง</h1>
              <TableCT items={lodge.roomType} />
            </section>
            <section>
              <h1 className="text-xl font-bold my-5">สิ่งอำนวยความสะดวก</h1>
              <div className="h-[290px] flex flex-col flex-wrap">
                {data.map((item, key) => {
                  let found =
                    lodge.facility.facilities?.indexOf(item.EngName) !== -1;
                  return (
                    <div key={key} className="flex my-1">
                      {/* #00A96E #808080*/}
                      <CheckCircle
                        sx={{ color: found ? "#00A96E" : "#BBBBBB" }}
                      />
                      <h1 className="ml-2">{item.ThName}</h1>
                    </div>
                  );
                })}
              </div>
              <div className="mb-20"></div>
            </section>
          </div>
          <div className="w-1/4 h-full ml-10 font-IBMPlexSansThai">
            <h1 className="text-xl font-bold my-5 font-IBMPlexSansThai">
              ที่พักที่คล้ายกัน
            </h1>
            <ArticleCT />
            <ArticleCT />
            <ArticleCT />
            <ArticleCT />
            <ArticleCT />
            <ArticleCT />
            <ArticleCT />
            <ArticleCT />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LodgeInfo;
