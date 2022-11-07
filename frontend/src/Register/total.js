import React from 'react'
import "./total.css"
import Information from './1_Information'
import Facility from './2_Facility'
import Type from './3_Type'
import Cost from './4_Cost'
import Detail from './5_Detail'
import Image from './6_Image'
import Promotion from './7_Promotion'
import Contact from './8_Contact'


function AddLodge() {
    
  return (
    <div className="flex justify-center">
        <div className="flex flex-col ">
            <div className='max-w-[960px] bg-[#EFEFEF] flex flex-col mt-10 rounded-3xl '>
                <div className="mb-10"><Information /></div>
                <div className="mb-10"><Facility /></div>
                <div className="mb-10"><Type /></div>
                <div className="mb-10"><Cost /></div>
                <div className="mb-10"><Detail /></div>
                <div className="mb-10"><Image /></div>
                <div className="mb-10"><Promotion /></div>
                <div className="mb-10"><Contact /></div>
            </div>
            <div className='flex justify-end m-5' >
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
        </div>
    </div>
  )
}

export default AddLodge
