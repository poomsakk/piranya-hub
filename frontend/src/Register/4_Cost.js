import React from 'react'
import "./4_Cost.css"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { createMuiTheme } from '@mui/material/styles';


function cost() {

    return (
    <>
        <div className='items-center '>
            <div className='container'>
                <h1 className = "font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96" >4. ค่าใช้จ่าย</h1> 
                <div class="flex flex-row mt-2 ml-6">
                    <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-40 mt-7" >ค่าน้ำ</h1>
                    <FormControl>
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
                                w-28
                                h-[40px]
                                mt-5
                                ml-[-15px]
                                border-2 
                                border-[#162B78] 
                                focus:outline-none
                                focus:border-[#162B78]
                                rounded-xl
                                "
                                name="name"
                                />
                            <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-24 mt-7" >บาท/ยูนิต</h1>
                            <FormControlLabel value="male" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5'/>}/>
                            <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-56 mt-7 " >ราคาตามที่การประปากำหนด</h1>
                            <FormControlLabel value="other" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5'/>}/>
                            <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-28 mt-7" >โทรสอบถาม</h1>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div class="flex flex-row mt-2 ml-6">
                    <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-40 mt-7" >ค่าไฟ</h1>
                    <FormControl>
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
                            w-28
                            h-[40px]
                            mt-5
                            ml-[-15px]
                            border-2 
                            border-[#162B78] 
                            focus:outline-none
                            focus:border-[#162B78]
                            rounded-xl
                            "
                            name="name"
                            />
                            <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-24 mt-7" >บาท/ยูนิต</h1>
                            <FormControlLabel value="male" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5'/>}/>
                            <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-56 mt-7 " >ราคาตามที่การไฟฟ้ากำหนด</h1>
                            <FormControlLabel value="other" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5'/>}/>
                            <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-28 mt-7" >โทรสอบถาม</h1>
                        </RadioGroup>
                    </FormControl>
                </div>

                <div class="flex flex-row mt-2 ml-6">
                    <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-40 mt-7" >ค่าบริการอื่นๆ</h1>
                    <FormControl>
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
                            w-28
                            h-[40px]
                            mt-5
                            ml-[-15px]
                            border-2 
                            border-[#162B78] 
                            focus:outline-none
                            focus:border-[#162B78]
                            rounded-xl
                            "
                            name="name"
                            />
                            <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-24 mt-7" >บาท/เดือน</h1>
                            <FormControlLabel value="male" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5'/>}/>
                            <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-56 mt-7 " >รวมในค่าห้องแล้ว</h1>
                            <FormControlLabel value="other" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5'/>}/>
                            <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-28 mt-7" >โทรสอบถาม</h1>
                        </RadioGroup>
                    </FormControl>
                </div>

                <div class="flex flex-row mt-2 ml-6">
                    <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-40 mt-7" >เงินมัดจำ/ประกัน</h1>
                    <FormControl>
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
                            w-28
                            h-[40px]
                            mt-5
                            ml-[-15px]
                            border-2 
                            border-[#162B78] 
                            focus:outline-none
                            focus:border-[#162B78]
                            rounded-xl
                            "
                            name="name"
                            />
                            <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-24 mt-7" >บาท</h1>
                            <FormControlLabel value="male" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5'/>}/>
                            <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-56 mt-7 " >ไม่มีการเก็บเงินประกัน</h1>
                            <FormControlLabel value="other" control={<Radio sx={{'&, &.Mui-checked': {color: '#162B78',}}} className='mt-5'/>}/>
                            <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] ml-[-15px] w-28 mt-7" >โทรสอบถาม</h1>
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        </div>
    </>
  )
}

export default cost
