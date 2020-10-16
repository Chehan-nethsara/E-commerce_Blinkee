import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


import MainFeaturedPost from './AboutUs/MainFeaturedPost';
import FeaturedPost from './AboutUs/FeaturedPost';

import Navbar from "./navbar";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer/footer';


const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const tiers = [
    {
        title: 'FAQ',
        price: '',
        description: ['Quection & Answers', 'Help center access', 'Email support'],
        buttonText: 'Faq',
        buttonVariant: 'outlined',
    },
    {
        title: 'RATING',
        subheader: 'Most popular',
        price: '',
        description: [
           ,
            'Rating products',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Get started',
        buttonVariant: 'contained',
    },
    {
        title: 'CONTACT',
        price: '',
        description: [

            'Contact details',
            'Help center access',
            'Phone & email support',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
];

const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imageSizes:'100',
    imgText: 'main image description',

};

const featuredPosts = [
    {
        title: 'Our Value',
        date: '',
        description1:
            '1) Biggest Varlety : we offer million of product at great. ',

        description2:

            '2) Best Price : we provide great value by offering competitive price',
        description3:
            '3) Fast & Deliver : we am to please our customers with fast delivery.' ,

        description4:
            '4) 100% protected : we provide 100% protection for your purchase. ' ,
        description5:
            '5) Biggest Varlety : we offer million of product at great. ' ,
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Post title',
        date: '',
        description1:
            '1) Embrace product : we embrace & anticipate change. Change is growth ',

        description2:

            '2) Customer commaltment : we belive in giving the best to our customers, sellers and society',
        description3:
            '3) Intergrity : we treat our patners and each other in mutual respectand work formutual benifit.' ,

        description4:
            '4) Ownership : we know our priotrities & we do something, we do it with focus. ' ,
        description5:
            '5) Biggest Varlety : we offer million of product at great. ' ,
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
];




export default function Blog() {
    const classes = useStyles();



    return (
        <React.Fragment>
            <CssBaseline />
            <Navbar/>
            <Container maxWidth="lg">
                
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Container maxWidth="lg" component="main" className={classes.heroContent}>
                        <Typography component="h4" variant="h4" align="center" color="primary" gutterBottom>
                            About Blinkee
                        </Typography>
                        <Typography variant="h7" align="left" color="textSecondary" component="p">
                            Magic Matt's Brilliant Blinkys provides exciting glow in the dark toys, flashing jewelry, blinking pins, flashy Blinkys and accessories for the twenty-first century.

                            Magic Matt has been a vendor of light up novelties, and flashing toys online and in person for over 15 years. Over the years we've built up a great reputation of quality and service. Here are some references:
                        </Typography>
                    </Container>
                    <br/>
                    <br/>
                    <br/>
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>

                </main>

            </Container>
        <br/>
            <br/>
            <br/>

            <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Container maxWidth="xl" component="main" className={classes.heroContent}>

                    <Typography variant="h7" align="center" color="primary" component="p">


                   Magic Matt's Brilliant Blinkys only carries the highest quality products. Your satisfaction is guaranteed. Blinkee.com is owned and operated by Matt Jacobs.
                    </Typography>
                </Container>
                <br/>
                <br/>
                <br/>
            {/* End hero unit */}
            <Container maxWidth="md" component="main">
                <br/>
                <br/>
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            ${tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary">

                                        </Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={tier.buttonVariant} color="primary">
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            </Grid>
            </Container>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </React.Fragment>
    );
}