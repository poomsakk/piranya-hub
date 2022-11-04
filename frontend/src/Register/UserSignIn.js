import React, { useState } from 'react'
import "./UserSignIn.css"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

function UserSignIn() {

  return (
    <>
      <div className='items-center '>
        <div className='usersignincontent'>
          <div className='flex flex-row'>
            <h1 className="font-IBMPlexSansThai text-2xl text-[#162B78] m-4 mt-10 w-40 " >Email :</h1>
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
              placeholder="Email"
              name="name"
            />
          </div>
          <div className='flex flex-row'>
            <h1 className="font-IBMPlexSansThai text-2xl text-[#162B78] m-4 mt-8 w-64 " >Password :</h1>
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
              placeholder="Password"
              name="name"
            />
          </div>
          <div className='flex justify-center ml-5 mr-5 mt-8' >
            <a href="/information">
              <button href='/information'
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
                เข้าสู่ระบบ
              </button>
            </a>
          </div>
          <div className='flex justify-center ' >
            <a href="/sign-up">
              <button href='/sign-up'
                class="signup font-IBMPlexSansThai py-4 px-4">
                สมัครบัญชี
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserSignIn
