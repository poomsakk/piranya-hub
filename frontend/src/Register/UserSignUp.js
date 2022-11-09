import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { authApi } from '../axiosConfig'
import "./UserSignUp.css"

function UserSignUp() {
    let navigate = useNavigate()

    const [user, setUser] = useState({
        username: "",
        nameSurname: "",
        email: "",
        password: ""
    })

    const { username, nameSurname, email, password } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function onSubmit(e) {
        e.preventDefault();
        authApi.post("/signup", { username: user.username, password: user.password })
            .then(function (response) {
                alert("Signup successful")
                navigate("/signin")
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
        <div className='flex justify-center'>
            <div className='max-w-[960px] bg-[#EFEFEF] flex flex-col mt-16 rounded-3xl'>
                <div className='usersignincontent mt-10 ml-12 mr-16 mb-12'>
                    <form onSubmit={onSubmit}>
                        <h1 className = "flex justify-center font-IBMPlexSansThai text-3xl text-[#162B78]" >ลงทะเบียน</h1> 
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
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='flex flex-row'>
                            <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] m-4 mt-10 w-40 " >Name-Surname :</h1>
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
                                placeholder="Name-Surname"
                                name="nameSurname"
                                value={nameSurname}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='flex flex-row'>
                            <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] m-4 mt-10 w-40 " >Email :</h1>
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
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='flex flex-row'>
                            <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] m-4 mt-10 w-40 " >Password :</h1>
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
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='flex justify-center mt-8' >
                                <button type='submit'
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
                                    ลงทะเบียน
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserSignUp