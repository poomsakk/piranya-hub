import React, { useState } from 'react'
import "./filter.css"
import Checkbox from '@mui/material/Checkbox';
import { Slider } from '@mui/material';
import {useLoadScript, GoogleMap} from '@react-google-maps/api';

function Filter(){
    const locationType = [
        { label: '1 ห้องนอน'},
        { label: '2 ห้องนอน'},
        { label: '3 ห้องนอน'},
      ];

      const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

      const [val,setVal] = useState(20)
      const updateRange=(e,data)=>{
        setVal(data)
      }

      return(
        <>
        <div className='content' >
            <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-96 mt-4" >ระยะห่างจากมหาวิทยาลัย</h1> 
            <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-96 mt-4" >{val} กิโลเมตร</h1>
            <Slider
                min={0}
                max={20}
                step={0.1} 
                value={val}
                onChange={updateRange}
            />
              <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-96 mt-4" >ที่ค้นหาบ่อย</h1> 
              <div className='flex flex-row mt-4'>
                <div > 
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44" >ลิฟต์</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >เครื่องปรับอากาศ</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >โรงยิม/ฟิตเนส</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >อนุญาตให้เลี้ยงสัตว์</h1> 
                  </div>
                </div>
              </div>
              <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-96 mt-4" >สิ่งอำนวยความสะดวก ภายในห้อง</h1> 
              <div className='flex flex-row mt-4'>
                <div > 
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44" >โทรศัพท์สายตรง</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >เครื่องปรับอากาศ</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >พัดลม</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >โทรทัศน์</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >ตู้เย็น</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >เฟอร์นิเจอร์, ตุ้, เตียง</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >เครื่องทำน้ำอุ่น</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-120 " >อินเทอร์เน็ตไร้สาย (WIFI) ในห้อง</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >อนุญาตให้เลี้ยงสัตว์</h1> 
                  </div>
                </div>
                </div>
                <h1 className = "font-IBMPlexSansThai text-xl text-[#162B78] ml-12 m-2 w-96 mt-4" >สิ่งอำนวยความสะดวก ในอาคาร</h1> 
              <div className='flex flex-row mt-4'>
                <div > 
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-120" >มีระบบรักษาความปลอดภัย (แสกนลายนิ้วมือ)</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >กล้องวงจรปิด (CCTV)</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-120 " >ที่จอดรถมอเตอร์ไซด์/จักรยาน</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >ที่จอดรถยนต์</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >สระว่ายน้ำ</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >ฟิตเนส</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-120 " >ร้านซัก-รีด / มีบริการเครื่องซักผ้า</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >ร้านทำผม-เสริมสวย</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >ลิฟต์</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >ร้านค้า สะดวกซื้อ</h1> 
                  </div>
                  <div className='flex flex-row'>
                    <Checkbox {...label}  className='text-[#162B78] ml-10' />
                    <h1 className = "font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 " >ร้านขายอาหาร</h1> 
                  </div>
                </div>
                </div>
            </div>
            <div className='content'>
              <div className='flex justify-between ml-5 mr-5 mt-7' >
                  <a href="/information">
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
                        ค้นหา
                    </button>
                  </a>
                </div>
            </div>
        </>
      )

}
export default Filter