import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { authApi } from '../axiosConfig'

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
        alert("Login successful")
        navigate("/")
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
      <div className='items-center '>
        <div className='usersignincontent'>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-row'>
              <h1 className="font-IBMPlexSansThai text-2xl text-[#162B78] m-4 mt-10 w-40 " >Username:</h1>
              <input
                type={"text"}
                className="
                    font-IBMPlexSansThai 
                    bg-[#EFEFEF]
                    placeholder:text-zinc-500
                    text-lg 
                    pl-5 
                    w-[100%] 
                    m-4 
                    ml-20 
                    mt-6 
                    border-2 
                    border-[#162B78] 
                    rounded-xl 
                    text-m-4"
                placeholder="Username/Email"
                name="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className='flex flex-row'>
              <h1 className="font-IBMPlexSansThai text-2xl text-[#162B78] m-4 mt-8 w-64 " >Password:</h1>
              <input
                type={"text"}
                className="
                    font-IBMPlexSansThai 
                    bg-[#EFEFEF]
                    placeholder:text-zinc-500
                    text-lg 
                    pl-5 
                    w-[99%] 
                    mb-4 
                    mr-4 
                    mt-4 
                    border-2 
                    border-[#162B78] 
                    rounded-xl text-m-4 
                    focus:border-[#162B78]"
                placeholder="Password"
                name="password"
                value={passWord}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className='flex justify-center ml-5 mr-5 mt-8' >
              <a href="/information">
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
              </a>
            </div>
          </form>
          <div className='flex justify-center ' >
            <a href="/signup">
              <button href='/signup'
                className="signup font-IBMPlexSansThai py-4 px-4">
                สมัครบัญชี
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserSignIn
