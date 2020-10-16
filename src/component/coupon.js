import React from 'react';
import Card from '@material-ui/core/Card';
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
import DialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import CouponApply from './Coupon/couponApply'
import CouponPage from './Coupon/couponPage'

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
        padding: theme.spacing(4, 0, 4),
        // backgroundColor: "#FBFF7C"
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
    backgroundCoupon:{
       backgroundColor : '#7AAEFF'
    },
}));

const tiers = [
    {
        title: 'Gold Card',
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
        title: 'Platinum Pro',
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
        title: 'Diamond Card',
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

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Navbar/>
            <div>
            {/*<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>*/}
            {/*    Available Coupons*/}
            {/*</Typography>*/}
            <div maxWidth="sm" component="main" className={classes.heroContent}>
                <CouponPage/>
                {/*<Typography variant="h5" align="center" color="textSecondary" component="p">*/}
                {/*    Digital coupons are discounts, offers and promotions offered by an online store to current or*/}
                {/*    prospective customers. Similar to their tangible counterparts, coupons are aimed at enticing a*/}
                {/*    consumer to make a purchase at an online*/}
                {/*</Typography>*/}
            </div>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                            <Card className={classes.backgroundCoupon}>
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
                                <br/>
                                    <Button
                                        variant={tier.buttonVariant}
                                        color="warning"
                                        onClick={handleClickOpen}
                                    >
                                        {tier.buttonText}
                                    </Button>
                                    <Dialog open={open} onClose={handleClose} >
                                        <DialogActions>
                                            <Button onClick={handleClose} color="transparent">
                                                <CloseIcon/>
                                            </Button>
                                        </DialogActions>
                                        <DialogContent>
                                            <CouponApply/>
                                        </DialogContent>
                                    </Dialog>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <br/>
            </div>
            <Footer/>
        </React.Fragment>

    );
}