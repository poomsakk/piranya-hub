import React ,{ useState }from 'react'
import "./Information.css"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

function information() {

    const steps = [
      '','','','','','','','',
    ];
  return (
    <>
        <div className='items-center '>
            <div className='container'>
              <Stepper activeStep={0} alternativeLabel
                className='py-5 mt-7 '>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
              </Stepper>
            </div>
            <div className='content'>
              <div className='flex flex-row'>
                <h1 className = "font-IBMPlexSansThai text-2xl text-[#162B78] m-4 mt-10 w-40 " >ชื่อที่พัก</h1> 
                <input
                  type={"text"}
                  className="
                    font-IBMPlexSansThai 
                    bg-[#EFEFEF]
                    placeholder:text-zinc-500
                    text-lg 
                    pl-5 
                    w-[106%] 
                    m-4 
                    ml-20 
                    mt-6 
                    border-2 
                    border-[#162B78] 
                    rounded-xl 
                    text-m-4"
                  placeholder="ระบุชื่อที่พัก"
                  name="name"
                />
              </div>
              <div className='flex flex-row'>
                <h1 className = "font-IBMPlexSansThai text-2xl text-[#162B78] m-4 mt-8 w-64 " >ชื่อที่พัก (English)</h1> 
                <input
                  type={"text"}
                  className="
                    font-IBMPlexSansThai 
                    bg-[#EFEFEF]
                    placeholder:text-zinc-500
                    text-lg 
                    pl-5 
                    w-[99%] 
                    mb-4 
                    mr-4 
                    mt-4 
                    border-2 
                    border-[#162B78] 
                    rounded-xl text-m-4 
                    focus:border-[#162B78]"
                  placeholder="ระบุชื่อที่พัก (English)"
                  name="name"
                />
              </div>

                <div className='flex justify-center'>
                <h1 className = "font-IBMPlexSansThai text-2xl text-[#162B78] m-4 mt-8 w-64 mr-[138px]" >ที่อยู่</h1> 
                    <input
                      type={"text"}
                      className="
                        font-IBMPlexSansThai 
                        bg-[#EFEFEF]
                        placeholder:text-zinc-500
                        text-lg 
                        pl-5 
                        m-4 
                        w-[97%]
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
                        w-[97%]
                        m-4 
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
                        w-[97%]
                        m-4 
                        border-2 border-[#162B78]
                        rounded-xl"
                      placeholder="ซอย"
                      name="name"
                    />
                </div>
                <div className='
                    flex justify-center 
                    ml-52 
                    h-[79px]'>
                    <input
                      type={"text"}
                      className="
                        font-IBMPlexSansThai 
                        bg-[#EFEFEF]
                        placeholder:text-zinc-500
                        text-lg 
                        pl-5 
                        m-4 
                        w-[97%]
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
                        w-[97%]
                        m-4 
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
                        w-[97%]
                        m-4 
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
                        m-4 
                        h-[46px]
                        ml-56
                        font-IBMPlexSansThai 
                        text-lg 
                        pl-5 
                        w-[23%]
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