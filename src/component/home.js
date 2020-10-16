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
// import Button from '@material-ui/core/Button';
import Button from "./Button/button";
import image9 from '../resources/images/image9.jpg';
import poster_1 from '../resources/images/poster_1.jpg';
import poster_3 from '../resources/images/poster_3.jpg';
import poster_4 from '../resources/images/poster_4.jpg';
import image3 from '../resources/images/image3.jpg';
import dis01 from '../resources/images/dis01.jpg';
import coupon_apply from '../resources/images/coupon_apply.jpg';
import watch_product_2 from '../resources/images/watch_product_2.jpg';
import image_cartPage_1 from '../resources/images/image_cartPage_1.jpg';
import bangles from '../resources/images/bangles.jpg';
import neckless from '../resources/images/neckless.jpg';
import digital_clock from '../resources/images/digital_clock.jpg';
import wood_neckless from '../resources/images/wood_neckless.jpg';
import bag_women from '../resources/images/bag_women.jpg';
import rainbow_stone from '../resources/images/rainbow_stone.jpg';
import ring_black from '../resources/images/ring_black.jpg';
import makeup_set from '../resources/images/makeup_set.png';
import watch_wall from '../resources/images/watch_wall.jpg';
import pot_bonsai_1 from '../resources/images/pot_bonsai_1.jpg';
import flash_deals from '../resources/images/flash_deals.jpg';
import top_selling from '../resources/images/top_selling.jpg';
import top_selections from '../resources/images/top_selections.jpg';
import recommended from '../resources/images/recommended.jpg';
import Slider from "react-slick";
import Carousel  from 'react-stick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer/footer';
import CardFooter from "./Card/cardFooter";
import {dangerColor, primaryColor, white} from "../resources/jss/material_kit_for_desisgnes";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Typography from "@material-ui/core/Typography";

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
    textWelcome: {
        color: dangerColor,
        fontSize: "30px",
        textAlign: "center",
    },
    cardHome: {
        height: '100%',
        width: '300px',
        marginTop: '5px',
        marginBottom: '5px',
        marginRight: '7px',
        marginLeft: '7px',
        display: 'block',
        flexDirection: 'column',
    },
    cardSale: {
        height: '100%',
        width: '640px',
        marginTop: '5px',
        marginBottom: '5px',
        marginRight: '7px',
        marginLeft: '7px',
        display: 'block',
        flexDirection: 'column'
    },
    cardButton: {
        marginLeft: '20px',
        display: 'flex',
        height: '5px',
        textAlign: 'center'
    },
    viewMoreButton: {
        marginRight: '800px',
        display: 'flex',
        height: '5px',
        textAlign: 'center'
        // marginLeft: '500px',
        // marginRight: '30px',
        // marginBottom: '15px',
        // marginTop: '1%',
        // display: 'flex',
        // height: '5px',
        // paddingTop: "1rem",
        // paddingBottom: '1rem',
        // justifyContent: "center !important"
    },
    cardBtnRight: {
        marginLeft: '400px',
        display: 'flex',
        height: '5px',
        textAlign: 'center'
    },
    topPiills: {
        display: 'block',
        marginLeft: '200px',
        width: '200px',
    }
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
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <div>
            <Navbar/>
            <Grid container >
                <GridItem xs={12} sm={12} md={8}>
                    <Button  href='/product' color="google" size="sm" >Product</Button>
                    <Button  href='/productPage' color="primary" size="sm" >All Products</Button>
                    <Button  href='/coupon' color="twitter" size="sm" >Coupons</Button>
                    <Button  href='/contactus' color="danger" size="sm">Contactus</Button>
                    <Button  href='/about_us' color="success" size="sm">AboutUs</Button>
                    <Button  href='/checkout' color="rose" size="sm">Checkout</Button>
                    <Button  href='/custom' color="warning" size="sm">Custom</Button>
                    <Button  href='/feedback' color="facebook" size="sm" >FeedBack</Button>
                    <Button  href='/dropfaq' color="github" size="sm" >FAQ</Button>
                </GridItem>
                <GridItem xs={12} lg={9} md={8} >
                    <Card>
                        <Slider {...settings}>
                            <div>
                                <img
                                    src={poster_1}
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
                                    src={poster_3}
                                    alt="Third slide"
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
                                    src={poster_4}
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
                <GridItem xs={12} lg={3} md={8} >
                    <Card>
                        <div  color="success" >
                            <h1 className={classes.textWelcome}>Welcome newcomers!</h1>
                        </div>

                        <div>
                            <img
                                style={{height: "273px", width: "330px", display: "block"}}
                                className={classes.imgCardTop}
                                src={ coupon_apply }
                                alt="Card-img-cap"
                            />
                            <Button  href= "/coupon" display= "block"color= "danger" size="sm" round>
                                Apply
                            </Button>
                        </div>
                    </Card>
                </GridItem>
            </Grid>

            <Grid container  spacing={4}>
                {/*<GridItem xs={12} sm={12} md={8}>*/}
                {[0].map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={3}>
                      <Card className={classes.cardHome}>
                        <img
                            style={{height: "180px", width: "300px", display: "block"}}
                            className={classes.imgCardTop}
                            src={ watch_product_2 }
                            alt="Card-img-cap"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Luxury Mens Watch $35
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            <Button  href='/checkout'color="facebook" size="sm" round>Buy</Button>
                            <Button  href='/cart' color="danger" size="sm" round>Add Cart</Button>
                        </CardContent>
                    </Card>
                    </Grid>
                ))}
                {[0].map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={3}>
                        <Card className={classes.cardHome}>
                            <img
                                style={{height: "180px", width: "100%", display: "block"}}
                                className={classes.imgCardTop}
                                src={ dis01 }
                                alt="Card-img-cap"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Night Party glasses $10
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    The product requires 1 23A batteries, but the product set does not contain batteries,
                                    buyers need to purchase separately.LED luminous glasses use LED lights as a light
                                </Typography>
                                <Button  href='/checkout' color="facebook" size="sm" round>Buy</Button>
                                <Button  href='/cart' color="danger" size="sm" round>Add Cart</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}

                {[0].map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={3}>
                        <Card className={classes.cardHome}>
                            <img
                                style={{height: "180px", width: "100%", display: "block"}}
                                className={classes.imgCardTop}
                                src={ neckless }
                                alt="Card-img-cap"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                   Ladies Neckless $50
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Neckless get a greatest discount shop with us. Selling jewelry is an art.
                                    Jewelry businesses represent a unique market. Selling jewelry is an art.
                                </Typography>
                                <Button href='/checkout' color="facebook" size="sm" round>Buy</Button>
                                <Button  href='/cart' color="danger" size="sm" round>Add Cart</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}

                {[0].map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={3}>
                        <Card className={classes.cardHome}>
                            <img
                                style={{height: "180px", width: "100%", display: "block"}}
                                className={classes.imgCardTop}
                                src={ bangles }
                                alt="Card-img-cap"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Bangles $9
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                <Button href='/checkout' color="facebook" size="sm" round>Buy</Button>
                                <Button  href='/cart' color="danger" size="sm" round>Add Cart</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}

                {/*</GridItem>*/}
            </Grid>



            {/*<Grid container className={classes.root} spacing={2}>*/}
            {/*    <Grid item xs={12}>*/}
            {/*        <Grid container justify="center" spacing={300}>*/}
            {/*            {[0, 1, 2, 3].map((value) => (*/}
            {/*                <Card style={{width: "20rem"}}>*/}
            {/*                    <img*/}
            {/*                        style={{height: "180px", width: "100%", display: "block"}}*/}
            {/*                        className={classes.imgCardTop}*/}
            {/*                        src={ image3 }*/}
            {/*                        alt="Card-img-cap"*/}
            {/*                    />*/}
            {/*                    <CardContent>*/}
            {/*                        <h4 className={classes.cardTitle}>Card title</h4>*/}
            {/*                        <p>This good is so pretty</p>*/}
            {/*                        <Button color="primary">Buy</Button>*/}
            {/*                    </CardContent>*/}
            {/*                </Card>*/}
            {/*            ))}*/}
            {/*        </Grid>*/}

            {/*    </Grid>*/}

            {/*</Grid>*/}
            <Grid container  spacing={4}>
                {/*<GridItem xs={12} sm={12} md={8}>*/}
                {[0].map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={3}>
                        <Card className={classes.cardHome}>
                            <img
                                style={{height: "180px", width: "100%", display: "block"}}
                                className={classes.imgCardTop}
                                src={ digital_clock }
                                alt="Card-img-cap"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Digital Clock Bluetooth Speaker $20
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Cute Unicorn LED Alarm Clock 7 Color Glowing Large screen Digital Clock For Students
                                    Desktop Multifunction Electronic Clock
                                </Typography>
                                <Button href='/checkout' color="facebook" size="sm" round>Buy</Button>
                                <Button  href='/cart' color="danger" size="sm" round>Add Cart</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                {[0].map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={3}>
                        <Card className={classes.cardHome}>
                            <img
                                style={{height: "180px", width: "100%", display: "block"}}
                                className={classes.imgCardTop}
                                src={ wood_neckless }
                                alt="Card-img-cap"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Wood neckless $8
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Indian Green Fine Kundan Onyx Mala Handmade Pendant Fancy Necklace Earrings Item
                                    Oak Wood Rectangle Necklace. Opal Stone. Anniversary Gift Small Wooden Pendant.
                                </Typography>
                                <Button href='/checkout' color="facebook" size="sm" round>Buy</Button>
                                <Button  href='/cart' color="danger" size="sm" round>Add Cart</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                {[0].map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={3}>
                        <Card className={classes.cardHome}>
                            <img
                                style={{height: "180px", width: "100%", display: "block"}}
                                className={classes.imgCardTop}
                                src={ bag_women }
                                alt="Card-img-cap"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Luxury Mens Watch $13
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    The variety of ladies fancy bags is available in all shapes and sizes.
                                    Green Earth International takes absolute care in manufacturing such bags in accordance to the requirements .
                                </Typography>
                                <Button href='/checkout' color="facebook" size="sm" round>Buy</Button>
                                <Button  href='/cart' color="danger" size="sm" round>Add Cart</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                {[0].map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={3}>
                        <Card className={classes.cardHome}>
                            <img
                                style={{height: "180px", width: "100%", display: "block"}}
                                className={classes.imgCardTop}
                                src={ rainbow_stone }
                                alt="Card-img-cap"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                   Rainbow Stone Necklace $20
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    1 x Natural Rainbow Stone Necklace. Color: Rainbow.
                                    Material: Natural Stone. Pendant Size: about 4cm. hope you could understand. Weight: about 22g.
                                </Typography>
                                <Button href='/checkout' color="facebook" size="sm" round>Buy</Button>
                                <Button  href='/cart' color="danger" size="sm" round>Add Cart</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                {/*</GridItem>*/}
            </Grid>

            <Grid container  spacing={4}>
                {/*<GridItem xs={12} sm={12} md={8}>*/}
                {[0].map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={3}>
                        <Card className={classes.cardHome}>
                            <img
                                style={{height: "180px", width: "100%", display: "block"}}
                                className={classes.imgCardTop}
                                src={ ring_black }
                                alt="Card-img-cap"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Silver Ring $3
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Punk Retro Silver Plated Feathers Arrow Open Ring Adjustable Woman Men Gifts
                                    Sleek bands, with our superbly crafted rings for women and men.
                                </Typography>
                                <Button href='/checkout' color="facebook" size="sm" round>Buy</Button>
                                <Button  href='/cart' color="danger" size="sm" round>Add Cart</Button>
                            </CardContent>
                        </Card>
                    </Grid>

                ))}
                {[0].map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={3}>
                        <Card className={classes.cardHome}>
                            <img
                                style={{height: "180px", width: "100%", display: "block"}}
                                className={classes.imgCardTop}
                                src={ makeup_set }
                                alt="Card-img-cap"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Makeup Kit  $15
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    All In One Makeup Gift Kit - Ultimate Color Combination - 36 Eyeshadow, 28 Lip Gloss, 3 Blusher,
                                    74 Colors Makeup Set Combination Palette
                                </Typography>
                                <Button href='/checkout' color="facebook" size="sm" round>Buy</Button>
                                <Button  href='/cart' color="danger" size="sm" round>Add Cart</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                {[0].map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={3}>
                        <Card className={classes.cardHome}>
                            <img
                                style={{height: "180px", width: "100%", display: "block"}}
                                className={classes.imgCardTop}
                                src={ watch_wall }
                                alt="Card-img-cap"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Wall Clock $25
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Hay's Analog clock ($105) was designed by Shane Schneck, who took inspiration from traditional barometers.
                                    Available  the clock measures 10.63"
                                </Typography>
                                <Button href='/checkout' color="facebook" size="sm" round>Buy</Button>
                                <Button  href='/cart' color="danger" size="sm" round>Add Cart</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}

                {[0].map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={3}>
                        <Card className={classes.cardHome}>
                            <img
                                style={{height: "180px", width: "100%", display: "block"}}
                                className={classes.imgCardTop}
                                src={ pot_bonsai_1 }
                                alt="Card-img-cap"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Bonsai Pot $12
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Our company is known for offering Fancy Flower Pot to the customers.
                                    This product is made from high quality material under the supervision of experts.
                                </Typography>
                                <Button href='/checkout' color="facebook" size="sm" round>Buy</Button>
                                <Button  href='/cart' color="danger" size="sm" round>Add Cart</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                {/*</GridItem>*/}
            </Grid>

            <Grid container  spacing={4}>
                {/*<GridItem xs={12} sm={12} md={8}>*/}
                {[0].map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={6}>
                        <Card className={classes.cardSale}>
                            <CardContent >
                                <Button color="warning" className={classes.cardButton}>Flash Deals</Button>
                                {/*<Button color="success" >*/}
                                {/*    <ArrowForwardIcon className={classes.viewMoreButton} >ViewMore</ArrowForwardIcon>*/}
                                {/*</Button>*/}

                            </CardContent >
                            <img
                                style={{height: "273px", width: "630px", display: "flex"}}
                                className={classes.cardButton}
                                src={ flash_deals }
                                alt="Card-img-cap"
                            />
                            <Button href='/product' color="success" className={classes.cardBtnRight} href='/product'>
                                View More
                                <ArrowForwardIcon/>
                            </Button>
                        </Card>
                    </Grid>
                ))}

                {[0].map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={6}>
                        <Card className={classes.cardSale}>
                            <CardContent >
                                <Button color="success" className={classes.cardButton}>Top Selling</Button>
                                {/*<Button color="success" >*/}
                                {/*    <ArrowForwardIcon className={classes.viewMoreButton} >ViewMore</ArrowForwardIcon>*/}
                                {/*</Button>*/}
                            </CardContent >
                            <img
                                style={{height: "273px", width: "630px", display: "flex"}}
                                className={classes.cardButton}
                                src={ top_selling }
                                alt="Card-img-cap"
                            />
                            <Button  href='/product' color="success" className={classes.cardBtnRight}>
                                View More
                                <ArrowForwardIcon/>
                            </Button>
                        </Card>
                    </Grid>
                ))}
                {/*</GridItem>*/}
                {[0].map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={6}>
                        <Card className={classes.cardSale}>
                            <CardContent >
                                <Button color="google" className={classes.cardButton}>Top Selections</Button>
                                {/*<Button color="success" >*/}
                                {/*    <ArrowForwardIcon className={classes.viewMoreButton} >ViewMore</ArrowForwardIcon>*/}
                                {/*</Button>*/}
                            </CardContent >
                            <img
                                style={{height: "273px", width: "630px", display: "flex"}}
                                className={classes.cardButton}
                                src={ top_selections }
                                alt="Card-img-cap"
                            />
                            <Button  href='/product' color="success" className={classes.cardBtnRight}>
                                View More
                                <ArrowForwardIcon/>
                            </Button>
                        </Card>
                    </Grid>
                ))}

                {[0].map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={6}>
                        <Card className={classes.cardSale}>
                            <CardContent >
                                <Button color="rose" className={classes.cardButton}>Recommended</Button>
                                {/*<Button color="success" >*/}
                                {/*    <ArrowForwardIcon className={classes.viewMoreButton} >ViewMore</ArrowForwardIcon>*/}
                                {/*</Button>*/}
                            </CardContent >
                            <img
                                style={{height: "273px", width: "630px", display: "flex"}}
                                className={classes.cardButton}
                                src={ recommended }
                                alt="Card-img-cap"
                            />
                            <Button  href='/product' color="success" className={classes.cardBtnRight}>
                                View More
                                <ArrowForwardIcon/>
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Footer/>
        </div>
    );
}
