import React from 'react'
import "./Contact.css"
import { Button, TextField,} from "@mui/material";

function information() {
  return (
    <>
      <div className='flex justify-between ml-5 mr-5 mt-8' >
          <a href="/promotion">
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
          <a href="/Page404">
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
                  บันทึก
              </button>
          </a>
      </div>
    </>
  )
}

export default information
