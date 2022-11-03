import React from 'react'
import "./Facility.css"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Checkbox from '@mui/material/Checkbox';

function information() {
  const steps = [
    '','','','','','','','',
  ];
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <>
      <div className='items-center '>
            <div className='container'>
              <Stepper activeStep={1} alternativeLabel
                className='py-5 mt-7 '>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel >{label}</StepLabel>
                </Step>
              ))}
              </Stepper>
            </div>

            <div className='content' >
              <h1 className = "font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96 mt-2" >ลงประกาศอพาร์ทเม้นท์</h1> 
              <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-96 mt-4" >2. สิ่งอำนวยความสะดวก</h1> 
              <div className='flex flex-row mt-4'>
                <div > 
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44" >เครื่องปรับอากาศ</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >เฟอร์นิเจอร์-ตู้, เตียง</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >เครื่องทำน้ำอุ่น</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >พัดลม</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >โทรทัศน์</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >ตู้เย็น</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >โทรศัพท์สายตรง</h1> 
                  </div>
                </div>

                <div > 
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78]' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-64 " >อินเทอร์เน็ตไร้สาย (WIFI) ในห้อง</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78]' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >ที่จอดรถมอเตอร์ไซด์ / จักรยาน</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78]' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >ที่จอดรถยนต์</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78]' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >สระว่ายน้ำ</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78]' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >โรงยิม / ฟิตเนส</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78]' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >ลิฟต์</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78]' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-60 " >รปภ.</h1> 
                  </div>
                </div>

                <div > 
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78]' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >มีระบบรักษาความปลอดภัย (สแกนลายนิ้วมือ)</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78]' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >กล้องวงจรปิด (CCTV)</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78]' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >ร้านขายอาหาร</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78]' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >ร้านค้า สะดวกซื้อ</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78]' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >ร้านซัก-รีด / มีบริการเครื่องซักผ้า</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78]' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >ร้านทำผม-เสริมสวย</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78]' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-96 " >อนุญาตให้เลี้ยงสัตว์</h1> 
                  </div>
                </div>
              </div>
            </div>
                  
            <div className='content'>
              <div className='flex justify-between ml-5 mr-5 mt-7' >
                  <a href="/information">
                    <button class="
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
                          ">
                        กลับ
                    </button>
                  </a>
                  <a href="/type">
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
                          ">
                            ถัดไป
                      </button>
                  </a>
              </div>
            </div>
        </div>
    </>
  )
}

export default information
