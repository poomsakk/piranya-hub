import React from 'react'
import "./Cost.css"

function information() {
  return (
    <>
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
    </>
  )
}

export default information
