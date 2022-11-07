import React,{ useState } from 'react'
import './Footer.css'

function Footer() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);

    return (
        <div className='main-footer'>
            <div className='container'>
                <div className='row'>
                    <p>
                        &copy;{new Date().getFullYear()} PIRANYA-HUB | All right reserved | Term Of Service | Privacy
                    </p>
                </div>
                <br></br>

            </div>
        </div>
    )
}

export default Footer

