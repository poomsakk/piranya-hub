import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { authApi } from '../axiosConfig'
import "./UserSignIn.css"
import { useDispatch } from "react-redux"
import { setData } from "../redux/mhooSlice"

function UserSignIn() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("")
  const [passWord, setpassword] = useState("")
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const data = { username: userName, password: passWord }
    authApi.post('/signin', data)
      .then(function (response) {
        // console.log(response.data.access_token);
        localStorage.setItem("access_token", response.data.access_token)
        localStorage.setItem("user", JSON.stringify(response.data))
        dispatch(setData(response.data))
        alert("Login successful")
        navigate("/dashboard")
      })
      .catch(function (error) {
        console.log(error);
        if (error.response) {
          alert(error.response.data.message) // wrong username password
        } else {
          alert(error.message) // server down
        }
      });
  }

  return (
    <>
      <div className="flex justify-center bg-[#EFEFEF] h-screen ">
        <div className='max-w-[960px] bg-white flex flex-col mt-16 rounded-3xl h-[400px] border-2 border-gray-900'>
          <div className='usersignincontent mr-16 ml-12 mt-10 mb-5'>
            <form onSubmit={handleSubmit}>
              <h1 className="flex justify-center font-IBMPlexSansThai text-3xl text-gray-900" >เข้าสู่ระบบ</h1>
              <div className='flex flex-row'>
                <h1 className="font-IBMPlexSansThai text-xl text-gray-900 m-4 mt-10 w-40 " >Username :</h1>
                <input
                  type={"text"}
                  className="
                  font-IBMPlexSansThai 
                  bg-[#EFEFEF]
                  placeholder:text-zinc-500
                  text-lg
                  pl-5 
                  w-[500px]
                  h-[40px]
                  mt-8
                  border-2 
                  border-gray-900 
                  focus:outline-none
                  focus:border-gray-900
                  rounded-xl
                  "
                  placeholder="Username"
                  name="username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className='flex flex-row'>
                <h1 className="font-IBMPlexSansThai text-xl text-gray-900 m-4 mt-10 w-40 " >Password :</h1>
                <input
                  type={"password"}
                  className="
                  font-IBMPlexSansThai 
                  bg-[#EFEFEF]
                  placeholder:text-zinc-500
                  text-lg
                  pl-5 
                  w-[500px]
                  h-[40px]
                  mt-8
                  border-2 
                  border-gray-900 
                  focus:outline-none
                  focus:border-gray-900
                  rounded-xl
                  "
                  placeholder="Password"
                  name="password"
                  value={passWord}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className='flex justify-center mt-8' >
                <button
                  type="submit"
                  class="rounded-full group relative inline-block outline-none text-sm font-medium text-white focus:outline-none focus:ring"
                >
                  <span class="shadow-md shadow-gray-900 rounded-full absolute outline-0 inset-0 border focus:outline-none outline-none border-gray-900 group-active:border-gray-900"></span>
                  <span class="rounded-full font-IBMPlexSansThai outline-0 focus:outline-none outline-none text-base block border border-gray-900 text-white bg-gray-900 px-4 py-3 transition-transform active:border-gray-900  active:bg-gray-900 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  เข้าสู่ระบบ
                  </span>
                </button>
              </div>
            </form>
            <div className='flex justify-center ' >
              <Link to="/signup">
                <button href='/signup'
                  className="signup font-IBMPlexSansThai text-base text-gray-900 hover:underline m-2 mt-5">
                  สมัครบัญชี
                </button>
                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserSignIn
