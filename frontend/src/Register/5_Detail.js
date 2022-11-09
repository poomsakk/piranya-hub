import React from 'react'
import TextField from '@mui/material/TextField';
import "./5_Detail.css"

function detail() {


    return (
        <>
            <div className='container '>
                <h1 className = "font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96" >5. รายละเอียด</h1> 
                <div className="flex flex-row ml-5">
                    <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 mt-6 w-28 ">
                        รายละเอียดภาษาไทย
                    </h1>
                    <input
                        type={"text"}
                        multiline
                        className="
                            font-IBMPlexSansThai 
                            bg-[#EFEFEF]
                            placeholder:text-zinc-500
                            text-lg
                            pl-5 
                            w-[631px]
                            h-[120px]
                            m-2
                            ml-4
                            mt-4
                            border-2 
                            border-[#162B78]
                            focus:outline-none
                            focus:border-[#162B78]
                            rounded-xl
                            "
                        placeholder="ระบุชื่อที่พัก"
                        name="name"
                        />
                </div>

                <div className="flex flex-row ml-5">
                    <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 mt-6 w-28 ">
                        รายละเอียดภาษาอังกฤษ
                    </h1>
                        <TextField 
                            sx={{border: '2px solid', borderRadius: 1, font:'IBMPlexSansThai'}}
                            className='
                            fontfont-IBMPlexSansThai 
                            bg-[#EFEFEF]
                            placeholder:text-zinc-500
                            text-lg
                            pl-2 
                            w-[631px]
                            h-[120px]
                            m-2
                            ml-4
                            mt-4
                            border-[#162B78]
                            rounded-xl'
                            multiline
                            rows={4}
                            placeholder="ระบุชื่อที่พัก"
                        />

                </div>
            </div>
        </>
    )
}

export default detail
