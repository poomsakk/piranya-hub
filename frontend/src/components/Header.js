import React,{ useState } from 'react'
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
                        <a href ='/'><img className='h-16' src={logo}/> </a>
                    </div>
                    <a href="/information" className="Resgistor-btn font-IBMPlexSansThai text-lg ">ลงประกาศที่พัก</a>
                    <a href="/filter" className="Resgistor-btn font-IBMPlexSansThai text-lg ">ค้นหาที่พัก</a>
                    <div className='mobile-menu' onClick={handleClick}>
                        {click ?(<FiX/>) : (<FiMenu/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

