import React from 'react'
import { useState, useEffect } from 'react'
import "./Dashboard.css"
import { useNavigate } from "react-router-dom";
import { landLordApi, authApi } from '../axiosConfig'
import { useSelector, useDispatch } from 'react-redux'
import { CardActions, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { setData } from '../redux/mhooSlice'


function Dashboard() {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const userReduxData = useSelector((state) => state.data.userData)
    // const [userData, setUserData] = useState({})
    // let lodges = {}

    // let ownLodges = []
    const [ownLodges, setOwnLodges] = useState([])

    const getLodge = () => {
        //const userLodges = userData.lodgeOwn.slice(1, userData.lodgeOwn.length - 1).split(", ")
        const userLodges = userReduxData.lodgeOwn.slice(1, userReduxData.lodgeOwn.length - 1).split(", ")
        setIsLoading(true)
        setOwnLodges([])
        for (let i = 0; i < userLodges.length; i++) {
            landLordApi.get("lodge/get/" + userLodges[i])
                .then((response) => {
                    setOwnLodges(ownLodges => [...ownLodges, response.data])
                })
                .catch(error => console.log(error))
                .finally(() => {
                    setIsLoading(false)
                });
        }
    }

    useEffect(() => {
        getLodge()
    }, [])

    if (isLoading) return <p>Loading data...</p>



    const handleDel = async (id) => {
        let userLodges = userReduxData.lodgeOwn.slice(1, userReduxData.lodgeOwn.length - 1).split(", ")
        await landLordApi.delete("/lodge/delete/" + id)
        await authApi.delete("/deleteLodge/" + userReduxData.id + "/" + id, {
            headers: {
                "Authorization": "Bearer " + userReduxData.access_token
            }
        })
        userLodges = userLodges.filter(w => w !== id)
        let str = "["

        userLodges.forEach(element => {
            str = str + element + ", "
        });
        str = str.slice(0, str.length - 2) + "]"

        const newData = { ...userReduxData, lodgeOwn: str }
        dispatch(setData(newData))
        localStorage.clear("user")
        localStorage.setItem("user", JSON.stringify(newData))
        alert("delete success")
        window.location.reload(false);
    }

    return (<>
        <div className='bg-[#EFEFEF] p-5'>
            <div className='container'>
                {ownLodges.length === 0 ? <h1 className='text-6xl text-center'>คุณยังไม่มีที่พักที่ลงทะเบียน</h1> : null}
                {ownLodges.map((lodge) => {
                    return <section class="m-5 flex flex-row overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt="Office"
                            src={
                                lodge.imagePath.imagePaths.length === 0
                                    ? "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                    : lodge.imagePath.imagePaths[0]
                            }
                            class="h-56 w-screen object-cover cursor-pointer"
                            onClick={() => navigate(`/Lodges/${lodge.lodgeId}`)}
                        />
                        <div class="column bg-white p-4 sm:p-6 ">
                            <h3 class="mt-0.5 text-lg text-gray-900">
                                {lodge.information.name}
                            </h3>
                            <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                                information : {lodge.detail.detailTHA}
                            </p>
                            <div className='ml-[400px]'>
                                <CardActions>
                                    <Button size="medium">
                                        <Link to={"/edit/" + lodge.lodgeId}>
                                            Edit
                                        </Link>
                                    </Button>
                                    <Button onClick={() => handleDel(lodge.lodgeId)} size="medium">
                                        Delete
                                    </Button>
                                </CardActions>
                            </div>
                        </div>
                    </section>
                })}
            </div>
        </div>
    </>)
}

export default Dashboard