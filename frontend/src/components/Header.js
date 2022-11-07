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
            navigate("/information")
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
                    <div>
                        <a href="/filter" className="Resgistor-btn font-IBMPlexSansThai text-lg ">ค้นหาที่พัก</a>{isLogin() ? "" : null}
                        <button onClick={handleClickRegister} className="Resgistor-btn font-IBMPlexSansThai text-lg ">ลงประกาศที่พัก</button>

                        {isLogin() ? <button onClick={handleLogout} className="Resgistor-btn font-IBMPlexSansThai text-lg ">LOGOUT</button> : null}
                        {isLogin() ? <a href="/dashboard" className="Resgistor-btn font-IBMPlexSansThai text-lg ">Dashboard</a> : null}


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

