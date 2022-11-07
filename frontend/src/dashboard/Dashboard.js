import React from 'react'
import { useState, useEffect } from 'react'
import "./Content.css"
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

    const getLodge = () => {
        setIsLoading(true)
        return landLordApi.get("/lodge/list")
            .then((response) => setLodges(response.data))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        getLodge()
    }, [])

    if (isLoading) return <p>Loading data...</p>


    return (<>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        {/* <div className="container">
            {lodges.map((lodge) => {
                return <section className="content-con" key={lodge.lodgeId}>
                    <div className="content-l">
                        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="img" />
                    </div>
                    <div className="content-r">
                        <h2>Name : {lodge.information.name}</h2>
                        <p>
                            information : {lodge.detail.detailENG}
                        </p>
                    </div>
                </section>
            })}
        </div> */}
    </>)
}

export default Dashboard