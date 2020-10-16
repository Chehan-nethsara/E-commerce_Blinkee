import React from 'react';
import Navbar from './navbar';
import Footer from './Footer/footer';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import { CardContent } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image_c1 from '../resources/images/image_c1.jpg';
import image_c2 from '../resources/images/image_c2.png';

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

            {/*<GridItem xs={8} sm={12}></GridItem>*/}
            <Grid container justify="center" spacing={300}>
                {[0, 1, 2, 3].map((value) => (
                    <Card style={{width: "20rem"}}>
                        <img
                            style={{height: "180px", width: "100%", display: "block"}}
                            className={classes.imgCardTop}
                            src={ image_c1 }
                            alt="Card-img-cap"
                        />
                        <CardContent>
                            <h4 className={classes.cardTitle}>Blinkee Custom</h4>
                            <p>This is new creation</p>
                            <Button color="primary">View project</Button>
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
                                    src={ image_c2 }
                                    alt="Card-img-cap"
                                />
                                <CardContent>
                                    <h4 className={classes.cardTitle}>Blinkee Custom</h4>
                                    <p>This is new creation</p>
                                    <Button color="primary">View project</Button>
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
