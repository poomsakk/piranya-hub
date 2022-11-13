import React from 'react'
import "./5_Detail.css"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Checkbox from '@mui/material/Checkbox';

function detail() {
  const steps = [
    '','','','','','','','',
  ];
  return (
    <>
    <div className='container'>
              <Stepper activeStep={4} alternativeLabel
                className='py-5 mt-7 '>
              {steps.map((label) => (
                <Step key={label}
                sx={{
                  '& .MuiStepLabel-root .Mui-completed': {
                    color: '#162B78', // circle color (COMPLETED)
                  },
                  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                    {
                      color: '#EFEFEF', // Just text label (COMPLETED)
                    },
                  '& .MuiStepLabel-root .Mui-active': {
                    color: '#162B78', // circle color (ACTIVE)
                  },
                  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                    {
                      color: '#EFEFEF', // Just text label (ACTIVE)
                    },
                  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                    fill: '#EFEFEF', // circle's number (ACTIVE)
                  },
                  }}>
                  <StepLabel >{label}</StepLabel>
                </Step>
              ))}
              </Stepper>
            </div>

      
      <div className='content'>
              <h1 className = "font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96 mt-2" >ลงประกาศอพาร์ทเม้นท์</h1> 
              <h1 className = "font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96 mt-2" >5.รายละเอียด</h1>
              
              <div className='flex flex-row'>
                <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-4 mt-3 w-[160px] " >รายละเอียด</h1> 
                <input
                  type={"text"}
                  className="
                    font-IBMPlexSansThai 
                    bg-[#EFEFEF]
                    placeholder:text-zinc-500
                    text-lg 
                    pl-5 
                    w-[631px]
                    h-[200px]
                    m-2
                    border-2 
                    border-[#162B78] 
                    focus:outline-none
                    focus:border-[#162B78]
                    rounded-xl text-m-4 
                    active:border-[#162B78]"
                  
                  name="name"
                />
              </div>
                <div className = "flex flex-row">
                  <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-4 mt-2 w-32" >Detail</h1> 
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
                        w-[631px]
                        h-[200px]
                        border-2 
                        border-[#162B78]
                        focus:outline-none
                        focus:border-[#162B78]
                        rounded-xl"
              
                      name="name"
                    />
                 
                  </div>
                </div>
        </div>
            <div className='flex justify-between ml-5 mr-5 mt-8' >
          <a href="/cost">
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
          <a href="/image">
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
      
    </>
    
  )

}

export default detail
