import React,{ useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import './Footer.css'
import logo from "../image/logo1.png"

function Footer() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);

    return (
        <div className='header'>
            <div className='container'>
                
            </div>
        </div>
    )
}

export default Footer

