import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";
import logo from "../image/logo1.png";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { isLogin } from "../auth";
import { useDispatch } from "react-redux"
import { setData } from "../redux/mhooSlice"

function Header() {
  const dispatch = useDispatch()
  const { pathname } = useLocation();
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => setClick(!click);
  // console.log(click);
  const handleClickRegister = () => {
    if (isLogin()) {
      navigate("/total");
    } else {
      alert("You need to signin");
      navigate("/signin");
    }
  };

  function handleLogout() {
    localStorage.clear("token");
    localStorage.clear("user");
    dispatch(setData({}))
    alert("Logout successful");
    navigate("/");
  }

  return (
    <div
      className={`${
        pathname == "/" ? "header-in-main-page" : "header bg-gray-900"
      }`}
    >
      <div className="container">
        <div className="header-con">
          <div className="logo-container">
            <a href="/">
              <img className="h-16" src={logo} alt="logoname" />{" "}
            </a>
          </div>
          <div className="m-2">
            {isLogin() ? (
              <Link
                to="/dashboard"
                className="font-IBMPlexSansThai text-base text-[#EFEFEF] underline hover:text-gray-400 m-2"
              >
                DASHBOARD
              </Link>
            ) : null}

            {isLogin() ? (
              <button
                onClick={handleLogout}
                className="font-IBMPlexSansThai  text-base text-[#EFEFEF] underline hover:text-gray-400 m-2"
              >
                LOGOUT
              </button>
            ) : null}

            {isLogin() ? null : (
              <Link
                class="rounded-full group relative inline-block outline-none text-sm font-medium text-white focus:outline-none focus:ring "
                to="/signin"
              >
                <span class="rounded-full absolute outline-0 inset-0 border focus:outline-none outline-none border-white group-active:border-white"></span>
                <span class="rounded-full font-IBMPlexSansThai outline-0 focus:outline-none outline-none text-base block border border-white text-black bg-white px-10 py-3 transition-transform active:border-white  active:bg-white group-hover:-translate-x-1 group-hover:-translate-y-1">
                  เข้าสู่ระบบ
                </span>
              </Link>
            )}

            {/* <a
              href="/filter"
              className="Resgistor-btn font-IBMPlexSansThai text-lg m-2"
            >
              ค้นหาที่พัก
            </a> */}
            {isLogin() ? "" : null}

            <button
              onClick={() => navigate("/search")}
              class="rounded-full ml-5 group relative inline-block outline-none text-sm font-medium text-white focus:outline-none focus:ring"
            >
              <span class="rounded-full absolute outline-0 inset-0 border focus:outline-none outline-none border-white group-active:border-white"></span>
              <span class="rounded-full font-IBMPlexSansThai outline-0 focus:outline-none outline-none text-base block border border-white text-black bg-white px-7 py-3 transition-transform active:border-white  active:bg-white group-hover:-translate-x-1 group-hover:-translate-y-1">
                ค้นหาด้วยชื่อ
              </span>
            </button>

            <button
              class="rounded-full ml-5 group relative inline-block outline-none text-sm font-medium text-white focus:outline-none focus:ring "
              onClick={handleClickRegister}
              to={isLogin() ? "/total" : "/signin"}
            >
              <span class="rounded-full absolute outline-0 inset-0 border focus:outline-none outline-none border-white group-active:border-white"></span>
              <span class="rounded-full font-IBMPlexSansThai outline-0 focus:outline-none outline-none text-base block border border-white text-black bg-white px-7 py-3 transition-transform active:border-white  active:bg-white group-hover:-translate-x-1 group-hover:-translate-y-1">
                ลงประกาศที่พัก
              </span>
            </button>
            {/* <button
              className="Resgistor-btn font-IBMPlexSansThai text-lg m-2"
            ></button> */}
          </div>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
