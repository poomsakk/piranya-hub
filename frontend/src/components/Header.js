import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";
import logo from "../image/logo1.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // console.log(click);

  return (
    <div className={`${pathname == "/" ? "header-in-main-page" : "header"}`}>
      <div className="container">
        <div className="header-con">
          <div className="logo-container">
            <Link to="/">
              <img className="h-16" src={logo} />{" "}
            </Link>
          </div>
          <Link
            to="/information"
            className="Resgistor-btn font-IBMPlexSansThai text-lg "
          >
            ลงประกาศที่พัก
          </Link>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
