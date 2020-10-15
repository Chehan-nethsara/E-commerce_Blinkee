import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './Feedback/chart';
import FeedbackDes from './Feedback/feedbackDes';
import Reviews from './Feedback/reviews';
import Navbar from "./navbar";
import Footer from './Footer/footer';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    card:{
        minHeight: 50,
        minWidth: 300,
        background: 'linear-gradient(45deg, #5BA3F6 30%, #FFB028 90%)',
    },
    cardChart:{
        minHeight: 50,
        minWidth: 300,
        background: '#FFFE81',
    },
    uButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    // appBarSpacer: theme.mixins.toolbar,
    // content: {
    //     flexGrow: 1,
    //     height: '100vh',
    //     overflow: 'auto',
    // },
    container: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(15),
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        marginLeft: "120px"
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 300,
        width:1000,
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div>
            <Navbar/>

            <div className={classes.root}>
                <CssBaseline />
                <main className={classes.content}>
                    {/*<div className={classes.appBarSpacer} />*/}
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            {/* Feedback Description */}
                            <Grid item xs={12} md={4} lg={3}>
                                <Card className={classes.card}>
                                    {/*<Paper className={fixedHeightPaper}>*/}
                                    <FeedbackDes/>
                                    {/*</Paper>*/}
                                </Card>
                            </Grid>
                            {/* Chart */}
                            <Grid item xs={12} md={8} lg={9}>
                                <Card className={classes.cardChart}>
                                    {/*<Paper className={fixedHeightPaper}>*/}
                                    <Chart/>
                                    {/*</Paper>*/}
                                </Card>
                            </Grid>
                            {/* Recent Orders */}
                            <Grid item xs={12} md={8}>
                                <Paper className={classes.paper}>
                                    <Reviews/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </main>
            </div>
            <Footer/>
        </div>

    );
}
