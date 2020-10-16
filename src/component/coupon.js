import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from "./navbar";
import Button from "./Button/button";
import Footer from "./Footer/footer";


const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },

    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor: "#FC2222",

    },
    cardPricing: {
        backgroundColor: "#FBFF7C",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
}));

const tiers = [
    {
        title: 'Discount Coupon',
        price: '10% value',
        description: [
            'Best Offers',
            'For orders above 25$',
            'Few away from your fingertips'
        ],
        buttonText: 'Get',
        buttonVariant: 'outlined',
    },
    {
        title: 'Discount Coupon',
        subheader: 'Most popular',
        price: '25% value',
        description: [
            'Best Offers',
            'For orders above 50$',
            'Few away from your fingertips',
        ],
        buttonText: 'Get',
        buttonVariant: 'contained',
    },
    {
        title: 'Discount Coupon',
        price: '50% value',
        description: [
            'Best Offers',
            'For orders above 75$',
            'Few away from your fingertips',
        ],
        buttonText: 'Get',
        buttonVariant: 'outlined',
    },
];

export default function Pricing() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Navbar/>
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Available Coupons
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Digital coupons are discounts, offers and promotions offered by an online store to current or
                    prospective customers. Similar to their tangible counterparts, coupons are aimed at enticing a
                    consumer to make a purchase at an online
                </Typography>
            </Container>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
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
                                            {tier.price}
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
                                    <Button  variant={tier.buttonVariant} color="warning">
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <br/>
            <Footer/>
        </React.Fragment>

    );
}