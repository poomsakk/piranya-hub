import React ,{ useState } from 'react'
import "./Information.css"
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

function information() {

    const steps = [
      '','','','','','','','',
    ];

  return (
    <>
        <div className='items-center '>
            <div className='container'>
              <Stepper activeStep={0} alternativeLabel className='py-5 mt-7 '>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
            <div className='content'>
              <h1 className = "font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96 mt-2" >ลงประกาศอพาร์ทเม้นท์</h1> 
              <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-96 mt-4" >1. ข้อมูลที่พัก</h1> 
              <div className='flex flex-row'>
                <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 mt-6 w-40 " >ชื่อที่พัก</h1> 
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
                    rounded-xl
                    "
                    
                  placeholder="ระบุชื่อที่พัก"
                  name="name"
                />
              </div>
              <div className='flex flex-row'>
                <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-4 mt-3 w-[160px] " >ชื่อที่พัก (English)</h1> 
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
                    rounded-xl text-m-4 
                    active:border-[#162B78]"
                  placeholder="ระบุชื่อที่พัก (English)"
                  name="name"
                />
              </div>
                <div className = "flex flex-row">
                  <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-4 mt-2 w-32" >ที่อยู่</h1> 
                  <div className='flex justify-center ml-8'>
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
                        border-2 border-[#162B78]
                        rounded-xl"
                      placeholder="เลขที่"
                      name="name"
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
                        border-2 border-[#162B78]
                        rounded-xl"
                      placeholder="ถนน"
                      name="name"
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
                        border-2 border-[#162B78]
                        rounded-xl"
                      placeholder="ซอย"
                      name="name"
                    />
                  </div>
                </div>
                <div className='flex justify-center ml-[136px]'>
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
                        border-2 border-[#162B78]
                        rounded-xl"
                      placeholder="ตำบล / แขวง"
                      name="name"
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
                        border-2 border-[#162B78]
                        rounded-xl"
                      placeholder="อำเภอ / เขต"
                      name="name"
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
                        border-2 border-[#162B78]
                        rounded-xl"
                      placeholder="จังหวัด"
                      name="name"
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
                        border-2 border-[#162B78]
                        rounded-xl"
                      placeholder="รหัสไปรษณีย์"
                      name="name"
                    />
                <div className='flex justify-end ml-5 mr-5 mt-8' >
                  <a href="/facility">
                      <button href='/facility'
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
