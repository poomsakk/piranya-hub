import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import './Header.css'
import logo from "../image/logo1.png"

function Header() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);

    return (
        <div className='header'>
            <div className='container'>
                <div className='header-con'>
                    <div className='logo-container'>
                        <a href='/'><img className='h-16' src={logo} /> </a>
                    </div>
                    <div>
                        <a href="/sign-in" className="UserRegistor-btn font-IBMPlexSansThai text-lg ">เข้าสู่ระบบ/ลงทะเบียน</a>
                        <a href="/information" className="Resgistor-btn font-IBMPlexSansThai text-lg ">ลงประกาศที่พัก</a>
                    </div>
                    <div className='mobile-menu' onClick={handleClick}>
                        {click ? (<FiX />) : (<FiMenu />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

