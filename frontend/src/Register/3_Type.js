import React from 'react'
import { useState } from "react";
import "./3_Type.css"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

function type() {

const typeRoom = [
{ label: '1 ห้องนอน'},
{ label: '2 ห้องนอน'},
{ label: '3 ห้องนอน'},
];

    return (
        <>
            <div className='items-center '>
                <div className='container'>
                    <h1 className = "font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96" >3. ประเภทห้องพัก</h1> 
                    <div className="ml-6">
                        <div class="flex flex-row mt-2">
                        <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-36 mt-7" >รูปแบบห้อง</h1>
                        <Autocomplete
                            className= 'w-60 mt-3 ml-8 bg-[#EFEFEF]'
                            disablePortal
                            id="combo-box-demo"
                            options={typeRoom}
                            sx={{ width: 500 }}
                            renderInput={(params) => <TextField{...params} label="เลือกรูปแบบห้อง" />}
                        />
                        </div>
                        <div class="flex flex-row">
                            <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-36 mt-6" >ขนาดห้อง</h1>
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
                                name="name"
                            />
                            <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 mt-7" >ตารางเมตร</h1>
                        </div>

                        <div class="flex flex-row">
                            <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-36 mt-7" >เช่ารายเดือน</h1>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5 '/>}/>
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
                                    name="name"
                                />
                                <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-32 mt-7" >บาท/เดือน</h1>
                                <FormControl class="flex flex-row">
                                <FormControlLabel
                                className='mt-5' 
                                value="NoMonth" 
                                control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} />}/>
                                <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] w-44 mt-7 ml-[-15px]" >ไม่มีห้องเช่ารายเดือน</h1>
                                </FormControl>
                            </RadioGroup>
                        </div>

                        <div class="flex flex-row">
                            <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-36 mt-7" >เช่ารายวัน</h1>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5 '/>}/>
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
                                    name="name"
                                />
                                <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-32 mt-7" >บาท/วัน</h1>
                                <FormControl class="flex flex-row">
                                    <FormControlLabel  
                                        className='mt-5  font-IBMPlexSansThai text-xl text-[#162B78]' 
                                        value="NoDay" 
                                        control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} />}/>
                                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] w-44 mt-7 ml-[-15px]" >ไม่มีห้องเช่ารายวัน</h1>
                                </FormControl>
                            </RadioGroup>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default type
