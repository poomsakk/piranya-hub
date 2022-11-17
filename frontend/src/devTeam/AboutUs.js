import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import "./AboutUs.css";
function AboutUs() {
    return (<>
        <section className="bg-gray-900 text-white">
            <div className='content'>
                <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text lg:text-7xl font-extrabold text-transparent sm:text-5xl custom-font">
                    Our Team
                </div>
                <div className='flex flex-row flex justify-center mt-4 '>
                    <div className='card-container'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        63010766
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        ภูมิศักดิ์ 		แก้วสี
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <a href='https://github.com/poomsakk'>
                                        <Button size="small">GitHub</Button>
                                    </a>
                                    <a href='https://guthib.com/'>
                                        <Button size="small">GutHib</Button>
                                    </a>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className='card-container'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={require("../image/IMG_20200730_171253_356.jpg")}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        63010767
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        ภูริช 		จันทร์ประสิทธิ์
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <a href='https://github.com/Phurich63010767'>
                                        <Button size="small">GitHub</Button>
                                    </a>
                                    <a href='https://guthib.com/'>
                                        <Button size="small">GutHib</Button>
                                    </a>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className='card-container'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={require("../image/1666268168266.jpg")}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        63010841
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        วรภพ 		เกียรติคงแสง
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <a href='https://github.com/Warapob'>
                                        <Button size="small">GitHub</Button>
                                    </a>
                                    <a href='https://guthib.com/'>
                                        <Button size="small">GutHib</Button>
                                    </a>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className='card-container'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        63010846
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        วรรธนัย		เมธาเมลือง
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <a href='https://github.com/Watanai1245'>
                                        <Button size="small">GitHub</Button>
                                    </a>
                                    <a href='https://guthib.com/'>
                                        <Button size="small">GutHib</Button>
                                    </a>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
                <div className='flex flex-row flex justify-center mt-4 '>
                    <div className='card-container'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={require("../image/IMG_9547.jpg")}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        63010852
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        วรวิชญ์		ธรรมารักษ์วัฒนะ
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <a href='https://github.com/KuR0uSaGi'>
                                        <Button size="small">GitHub</Button>
                                    </a>
                                    <a href='https://guthib.com/'>
                                        <Button size="small">GutHib</Button>
                                    </a>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className='card-container'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        63011018
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        สุรพัศ 		วงศ์ประไพพักตร์
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <a href='https://github.com/surapat12'>
                                        <Button size="small">GitHub</Button>
                                    </a>
                                    <a href='https://guthib.com/'>
                                        <Button size="small">GutHib</Button>
                                    </a>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className='card-container'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={require("../image/IMG_7817.JPG")}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        63011075
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        อับดุลฮากิม 	มาหะ
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <a href='https://github.com/Abdulhakim-Maha'>
                                        <Button size="small">GitHub</Button>
                                    </a>
                                    <a href='https://guthib.com/'>
                                        <Button size="small">GutHib</Button>
                                    </a>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className='card-container'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        63011414
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        อับดุลฮากีม 	มามุ
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <a href='https://github.com/hakimparoo'>
                                        <Button size="small">GitHub</Button>
                                    </a>
                                    <a href='https://guthib.com/'>
                                        <Button size="small">GutHib</Button>
                                    </a>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default AboutUs