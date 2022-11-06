import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { authApi } from '../axiosConfig'

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
            <div className='items-center '>
                <div className='usersignincontent'>
                    <form onSubmit={onSubmit}>
                        <div className='flex flex-row'>
                            <h1 className="font-IBMPlexSansThai text-2xl text-[#162B78] m-4 mt-8 w-64 " >Username :</h1>
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
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='flex flex-row'>
                            <h1 className="font-IBMPlexSansThai text-2xl text-[#162B78] m-4 mt-8 w-64 " >Name-Surname :</h1>
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
                                placeholder="Name-Surname"
                                name="nameSurname"
                                value={nameSurname}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='flex flex-row'>
                            <h1 className="font-IBMPlexSansThai text-2xl text-[#162B78] m-4 mt-8 w-64 " >Email :</h1>
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
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='flex flex-row'>
                            <h1 className="font-IBMPlexSansThai text-2xl text-[#162B78] m-4 mt-8 w-64 " >Password :</h1>
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
                                value={password}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='flex justify-center ml-5 mr-5 mt-8' >
                            <a href="/facility">
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
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserSignUp