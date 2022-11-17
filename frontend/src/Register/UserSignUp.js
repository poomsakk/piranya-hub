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
            <div className='flex justify-center bg-[#EFEFEF] h-screen'>
                <div className='max-w-[960px] bg-white flex flex-col mt-16 rounded-3xl h-[540px]'>
                    <div className='usersignincontent mt-10 ml-12 mr-16 mb-12'>
                        <form onSubmit={onSubmit}>
                            <h1 className="flex justify-center font-IBMPlexSansThai text-3xl text-[#162B78]" >ลงทะเบียน</h1>
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
                                    type="password"
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
                                <button
                                type="submit"
                                class="rounded-full group relative inline-block outline-none text-sm font-medium text-white focus:outline-none focus:ring"
                                >
                                <span class="shadow-md shadow-[#162B78] rounded-full absolute outline-0 inset-0 border focus:outline-none outline-none border-[#162B78] group-active:border-[#162B78]"></span>
                                <span class="rounded-full font-IBMPlexSansThai outline-0 focus:outline-none outline-none text-base block border border-[#162B78] text-white bg-[#162B78] px-4 py-3 transition-transform active:border-[#162B78]  active:bg-[#162B78] group-hover:-translate-x-1 group-hover:-translate-y-1">
                                ลงทะเบียน
                                </span>
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