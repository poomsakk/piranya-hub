import React from 'react'
import { useState } from "react";
import "./Type.css"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

function type() {
  const steps = [
    '','','','','','','','',
  ];

  const typeRoom = [
    { label: '1 ห้องนอน'},
    { label: '2 ห้องนอน'},
    { label: '3 ห้องนอน'},
  ];

  return (
    <>
      <div className='items-center '>
            <div className='container'>
              <Stepper activeStep={2} alternativeLabel
                className='py-5 mt-7 '>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
              </Stepper>
            </div>
            <div className='content'>
              <h1 className = "font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96 mt-2" >ลงประกาศอพาร์ทเม้นท์</h1> 
              <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-96 mt-4" >3. ประเภทห้องพัก</h1> 
              <div className="ml-8">
                <div class="flex flex-row">
                  <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-44 mt-7" >รูปแบบห้อง</h1>
                  <Autocomplete
                    className= 'w-60 mt-3 bg-[#EFEFEF]'
                    disablePortal
                    id="combo-box-demo"
                    options={typeRoom}
                    sx={{ width: 500 }}
                    renderInput={(params) => <TextField{...params} label="เลือกรูปแบบห้อง" />}
                  />
                </div>

                <div class="flex flex-row">
                  <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-44 mt-7" >ขนาดห้อง</h1>
                  <input
                    type={"text"}
                    className="
                      font-IBMPlexSansThai 
                      bg-[#EFEFEF]
                      placeholder:text-zinc-500
                      text-lg
                      pl-5 
                      w-60
                      h-[40px]
                      mt-5
                      border-2 
                      border-[#162B78] 
                      rounded-xl
                      "
                    placeholder="ระบุขนาดห้อง"
                    name="name"
                  />
                  <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] m-2 w-44 mt-7" >ตารางเมตร</h1>
                </div>

                <div class="flex flex-row">
                  <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-44 mt-7" >เช่ารายเดือน</h1>
                  <input
                    type={"text"}
                    className="
                      font-IBMPlexSansThai 
                      bg-[#EFEFEF]
                      placeholder:text-zinc-500
                      text-lg
                      pl-5 
                      w-60
                      h-[40px]
                      mt-5
                      border-2 
                      border-[#162B78] 
                      rounded-xl
                      "
                    placeholder="ระบุค่าเช่ารายเดือน"
                    name="name"
                  />
                  <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] m-2 w-32 mt-7" >บาท/เดือน</h1>
                  <FormControl class="flex flex-row">
                    <FormControlLabel  className='mt-5' value="NoMonth" control={<Radio />}/>
                    <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] w-44 mt-8" >ไม่มีห้องเช่ารายเดือน</h1>
                  </FormControl>
                </div>

                <div class="flex flex-row">
                  <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-44 mt-7" >เช่ารายวัน</h1>
                  <input
                    type={"text"}
                    className="
                      font-IBMPlexSansThai 
                      bg-[#EFEFEF]
                      placeholder:text-zinc-500
                      text-lg
                      pl-5 
                      w-60
                      h-[40px]
                      mt-5
                      border-2 
                      border-[#162B78] 
                      rounded-xl
                      "
                    placeholder="ระบุค่าเช่ารายวัน"
                    name="name"
                  />
                  <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] m-2 w-32 mt-7" >บาท/วัน</h1>
                  <FormControl class="flex flex-row">
                    <FormControlLabel  className='mt-5  font-IBMPlexSansThai text-xl text-[#162B78]' value="NoDay" control={<Radio />}/>
                    <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] w-44 mt-8" >ไม่มีห้องเช่ารายวัน</h1>
                  </FormControl>
                </div>
              </div>

              <div className='flex justify-between ml-5 mr-5 mt-8' >
                  <a href="/facility">
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
                  <a href="/cost">
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

export default type
