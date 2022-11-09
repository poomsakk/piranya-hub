import React from 'react'
import { useState, useEffect } from 'react'
import "./Dashboard.css"
import { landLordApi } from '../axiosConfig'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Dashboard() {
    const [lodges, setLodges] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    // const [userData, setUserData] = useState({})
    // let lodges = {}

    // let ownLodges = []
    const [ownLodges, setOwnLodges] = useState([])

    const getLodge = () => {
        let userData = {}
        userData = JSON.parse(localStorage.getItem("user"))
        console.log(userData)
        const userLodges = userData.lodgeOwn.slice(1, userData.lodgeOwn.length - 1).split(", ")
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


    return (<>
        <div className='container'>
            {ownLodges.map((lodge) => {
                return <section class="m-5 flex flex-row overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt="Office"
                        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        class="h-56 w-25 object-cover"
                    />
                    <div class="bg-white p-4 sm:p-6">

                        <a href="#">
                            <h3 class="mt-0.5 text-lg text-gray-900">
                                {lodge.information.name}
                            </h3>
                        </a>
                        <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                            information : {lodge.detail.detailENG}
                        </p>
                    </div>
                </section>
            })}
        </div>
    </>)
}

export default Dashboard
{/* <div className='container'>
    {ownLodges.map((lodge) => {
        return <section className="card-content-con" key={lodge.lodgeId}>
            <Card className='color-#162B78' sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <div className='{lodge.information.name}'>
                            {lodge.information.name}
                        </div>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" >
                        <div className='{lodge.information.name}'>
                            information : {lodge.detail.detailENG}
                        </div>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Edit</Button>
                    <Button size="small">Delete</Button>
                </CardActions>
            </Card>
        </section>
    })}
</div> */}