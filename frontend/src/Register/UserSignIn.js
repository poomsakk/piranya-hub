import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { authApi } from '../axiosConfig'
import "./UserSignIn.css"

function UserSignIn() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("")
  const [passWord, setpassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    const data = { username: userName, password: passWord }
    authApi.post('/signin', data)
      .then(function (response) {
        // console.log(response.data.access_token);
        localStorage.setItem("access_token", response.data.access_token)
        localStorage.setItem("user", JSON.stringify(response.data))
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
      <div className="flex justify-center ">
        <div className='max-w-[960px] bg-[#EFEFEF] flex flex-col mt-16 rounded-3xl'>
          <div className='usersignincontent mr-16 ml-12 mt-10 mb-5'>
            <form onSubmit={handleSubmit}>
              <h1 className="flex justify-center font-IBMPlexSansThai text-3xl text-[#162B78]" >เข้าสู่ระบบ</h1>
              <div className='flex flex-row'>
                <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] m-4 mt-10 w-40 " >Username :</h1>
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
                  border-[#162B78] 
                  focus:outline-none
                  focus:border-[#162B78]
                  rounded-xl
                  "
                  placeholder="Username/Email"
                  name="username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className='flex flex-row'>
                <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] m-4 mt-10 w-40 " >Password :</h1>
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
                  border-[#162B78] 
                  focus:outline-none
                  focus:border-[#162B78]
                  rounded-xl
                  "
                  placeholder="Password"
                  name="password"
                  value={passWord}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className='flex justify-center mt-8' >
                <button type="submit"
                  className="
                          bg-[#162B78] 
                          font-IBMPlexSansThai
                          hover:bg-white 
                          hover:text-[#162B78] 
                          text-white 
                          py-2 
                          px-4 
                          rounded-full 
                          border border-[#162B78]
                          shadow-md shadow-[#162B78]
                          ">
                  เข้าสู่ระบบ
                </button>
              </div>
            </form>
            <div className='flex justify-center ' >
              <Link to="/signup">
                <button href='/signup'
                  className="signup font-IBMPlexSansThai py-4 px-4 mt-3">
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
