import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";
import './Header.css'
import logo from "../image/logo1.png"
import { isLogin } from '../auth';

function Header() {

    const [click, setClick] = useState(false);
    const navigate = useNavigate()
    const handleClick = () => {
        setClick(!click);
    }
    const handleClickRegister = () => {
        if (isLogin()) {
            navigate("/total")
        }
        else {
            alert("You need to signin")
            navigate("/signin")
        }
    }

    function handleLogout() {
        localStorage.clear("token")
        alert("Loguot successful")
        navigate("/")
    }



    return (
        <div className='header'>
            <div className='container'>
                <div className='header-con'>
                    <div className='logo-container'>
                        <a href='/'><img className='h-16' src={logo} alt="logoname" /> </a>
                    </div>
                    <div className='m-2'>

                        {isLogin() ? 
                        <a href="/dashboard" 
                            className="font-IBMPlexSansThai text-base text-[#EFEFEF] underline hover:text-gray-400 m-2">
                            DASHBOARD
                        </a> : null}

                        {isLogin() ? 
                        <button 
                            onClick={handleLogout} 
                            className="font-IBMPlexSansThai text-base text-[#EFEFEF] underline hover:text-gray-400 m-2">
                            LOGOUT
                        </button> : null}

                        {isLogin() ? null :
                        <a href="/signin"
                            className="font-IBMPlexSansThai text-base text-[#EFEFEF] underline hover:text-gray-400 m-2">
                            LOGIN
                        </a>}

                        <a href="/filter"
                            className="Resgistor-btn font-IBMPlexSansThai text-lg m-2">
                            ค้นหาที่พัก
                            </a>{isLogin() ? "" : null}

                        <button 
                            onClick={handleClickRegister} 
                            className="Resgistor-btn font-IBMPlexSansThai text-lg m-2">
                            ลงประกาศที่พัก
                        </button>

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

