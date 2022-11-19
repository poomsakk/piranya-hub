import React from 'react'
import "./6_Image.css"
import DropFileInput from './dropImage/DropFileInput';

function image() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <>
            <div className='container'>
                <h1 className = "font-IBMPlexSansThai text-2xl text-[#111827] ml-12 m-2 w-96" >6. รูปภาพ</h1>
                <div className="box">
                    <DropFileInput
                        onFileChange={(files) => onFileChange(files)}
                    />
                </div>
            </div>
        </>
    )
}

export default image
