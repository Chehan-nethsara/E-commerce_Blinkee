import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from "./Footer/footer";
import Navbar from "./navbar";
import return1 from "../resources/images/return01.png"


function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        width: 400,
        height: 400,
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div>
            <Navbar/>
        <div className={classes.root}>
            <img className={classes.img} alt="complex" src={return1} />

            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                    Blinkee.com Return Policy
                </Typography>
            </Container>
            <h2>
                <NewlineText text={'We want you to be happy with your purchase from Blinkee.com. Returns of unopened, unused merchandise within 30 days of order receipt will be credited the full amount of the merchandise to the original payment method. Please use an insured carrier to ship the items back.\n' +
                '\n' +
                'Blinkee.com will not accept returns on used merchandise. If the return is not in its original packaging, a restocking fee of 25% will be applied.\n' +
                '\n' +
                'Please report any merchandise shortages or defects within 30 days of receipt of the order to help@blinkee.com. We will fix it right away. '}/>
            </h2>
        </div>
            <Footer/>
        </div>
    );
}