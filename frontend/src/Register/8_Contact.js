import React from 'react'
import "./8_Contact.css"
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

function contact() {
    return (
        <>
            <div className='container'>
                <h1 className = "font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96" >8. ข้อมูลสำหรับติดต่อ</h1> 
                    <div className="ml-6">
                        <div class="flex flex-row mt-2">
                        <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-24 mt-7" >ชื่อผู้ดูแล</h1>
                        <input
                          type={"text"}
                          className="
                              font-IBMPlexSansThai 
                              bg-[#EFEFEF]
                              placeholder:text-zinc-500
                              text-lg
                              pl-5 
                              w-[500px]
                              h-[40px]
                              mt-5
                              ml-8
                              border-2 
                              border-[#162B78] 
                              focus:outline-none
                              focus:border-[#162B78]
                              rounded-xl
                              "
                          placeholder="ระบุชื่อผู้ดูแล"
                          name="typeName"
                          />
                        </div>
                        <div class="flex flex-row">
                            <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-24 mt-6" >เบอร์ติดต่อ</h1>
                            <input
                                type={"text"}
                                className="
                                    font-IBMPlexSansThai 
                                    bg-[#EFEFEF]
                                    placeholder:text-zinc-500
                                    text-lg
                                    pl-5 
                                    w-[500px]
                                    h-[40px]
                                    mt-5
                                    ml-8
                                    border-2 
                                    border-[#162B78] 
                                    focus:outline-none
                                    focus:border-[#162B78]
                                    rounded-xl
                                    "
                                placeholder="ระบุเบอร์ติดต่อ"
                                name="size"
                            />
                        </div>

                        <div class="flex flex-row">
                            <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-24 mt-7" >E-mail</h1>
                                <input
                                    type={"text"}
                                    className="
                                        font-IBMPlexSansThai 
                                        bg-[#EFEFEF]
                                        placeholder:text-zinc-500
                                        text-lg
                                        pl-5 
                                        w-[500px]
                                        h-[40px]
                                        mt-5
                                        ml-8
                                        border-2 
                                        border-[#162B78] 
                                        focus:outline-none
                                        focus:border-[#162B78]
                                        rounded-xl
                                        "
                                    placeholder="ระบุ E-mail"
                                    name="pricePerMonth"
                                />
                        </div>
                        <div class="flex flex-row">
                            <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-24 mt-7" >Line ID</h1>
                                <input
                                    type={"text"}
                                    className="
                                        font-IBMPlexSansThai 
                                        bg-[#EFEFEF]
                                        placeholder:text-zinc-500
                                        text-lg
                                        pl-5 
                                        w-[500px]
                                        h-[40px]
                                        mt-5
                                        ml-8
                                        border-2 
                                        border-[#162B78] 
                                        focus:outline-none
                                        focus:border-[#162B78]
                                        rounded-xl
                                        "
                                    placeholder="ระบุ Line ID"
                                    name="pricePerDay"
                                />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default contact
