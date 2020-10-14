import React from 'react';
import Navbar from './navbar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridItem from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { Card } from '@material-ui/core';
import { CardContent } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import image9 from '../resources/images/image9.jpg';
import image14 from '../resources/images/image14.jpg';
import image3 from '../resources/images/image3.jpg';
import Slider from "react-slick";
import Carousel  from 'react-stick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer/footer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function Home() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <div>
            <Navbar/>
            <Grid container >
                <GridItem xs={12} sm={12} md={8} >
                    <Card>
                        <Slider {...settings}>
                            <div>
                                <img
                                    src={image9}
                                    alt="First slide"
                                    className="slick-image"
                                />
                                <div className="slick-caption">
                                    {/*<h4>*/}
                                    {/*    Yellowstone*/}
                                    {/*    National Park, United States*/}
                                    {/*</h4>*/}
                                </div>
                            </div>
                            <div>
                                <img
                                    src={image9}
                                    alt="Second slide"
                                    className="slick-image"
                                />
                                <div className="slick-caption">
                                    {/*<h4>*/}
                                    {/*    Somewhere Beyond,*/}
                                    {/*    United States*/}
                                    {/*</h4>*/}
                                </div>
                            </div>
                            <div>
                                <img
                                    src={image9}
                                    alt="Third slide"
                                    className="slick-image"
                                />
                                <div className="slick-caption">
                                    {/*<h4>*/}
                                    {/*    Yellowstone*/}
                                    {/*    National Park, United States*/}
                                    {/*</h4>*/}
                                </div>
                            </div>
                        </Slider>
                    </Card>
                </GridItem>
            </Grid>
            {/*<GridItem xs={8} sm={12}></GridItem>*/}
            <Grid container justify="center" spacing={300}>
                {[0, 1, 2, 3].map((value) => (
                    <Card style={{width: "20rem"}}>
                        <img
                            style={{height: "180px", width: "100%", display: "block"}}
                            className={classes.imgCardTop}
                            src={ image3 }
                            alt="Card-img-cap"
                        />
                        <CardContent>
                            <h4 className={classes.cardTitle}>Card title</h4>
                            <p>This good is so pretty</p>
                            <Button color="primary">Buy</Button>
                        </CardContent>
                    </Card>
                ))}
            </Grid>

            <Grid container className={classes.root} spacing={2}>

                <Grid item xs={12}>
                    <Grid container justify="center" spacing={300}>
                        {[0, 1, 2, 3].map((value) => (
                            <Card style={{width: "20rem"}}>
                                <img
                                    style={{height: "180px", width: "100%", display: "block"}}
                                    className={classes.imgCardTop}
                                    src={ image3 }
                                    alt="Card-img-cap"
                                />
                                <CardContent>
                                    <h4 className={classes.cardTitle}>Card title</h4>
                                    <p>This good is so pretty</p>
                                    <Button color="primary">Buy</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>

                </Grid>

            </Grid>
            <Footer/>
        </div>
    );
}
