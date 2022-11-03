import React from 'react'
import "./Cost.css"
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
              <Stepper activeStep={3} alternativeLabel
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
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
              </Stepper>
            </div>
            <div className='content'>
              <h1 className = "font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96 mt-2" >ลงประกาศอพาร์ทเม้นท์</h1> 
              <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-96 mt-4" >4. ค่าใช้จ่าย</h1> 
              <div className='flex justify-between ml-5 mr-5 mt-8' >
                  <a href="/type">
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
                  <a href="/detail">
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
