import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "./navbar";
import dropshipping from '../resources/images/Dropshipping01.png'
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer/footer";
import Button from "./Button/button";

function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 5,
        backgroundColor: theme.palette.background.paper,
    },
    texheder: {
        textAlign: "left",
        marginLeft: "40px"

    },
    but01: {
        margin: theme.spacing(2, 0, 2),
        marginLeft: "20px",
        blockSize: "50px",
        marginRight: "500px",
        backgroundSize: "10px",
        padding: "15px 62px",
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div><Navbar/>
        <div >
            <br/>
            <br/>
        <Grid container spacing={3}>
        <Grid item xs={12} lg={5} md={9} >
        <div>
            <img  alt="complex" src={dropshipping} />
        </div>
        </Grid>
            <Grid item xs={12} lg={7} md={6}>
                <div>
                    <h2>
                        <b>
                        Blinkee.com Reseller Program
                        </b>
                        </h2>
                    <h4>
                        We stand behind our products and we will always cover any product defects or other problems that are our fault. Please see our return policy and other company policies:
                    </h4>
                </div>
                <div className={classes.texheder}>
                    <Button
                        type="submit"
                        round
                        color="facebook"
                        href="/returnpolicy"
                        className={classes.but01}
                    >
                        Returns
                    </Button>
                    <Button
                        type="submit"
                        round
                        color="facebook"
                        href="/dropfaq"
                        className={classes.but01}
                    >
                        Reseller FAQ
                    </Button>
                    <Button
                        type="submit"
                        round
                        color="facebook"
                        href="/privancypolicy"
                        className={classes.but01}
                    >
                        Privacy Policy
                    </Button>

                </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <div>
                            <h4 className={classes.texheder}>
                                <h2>
                                    <NewlineText text={' * Please complete the following steps to participate in our reseller / dropship program:'}/>
                                </h2>
                                <h2>
                                <Link href="./register" >
                                    {" 1.Register"}
                                </Link>
                            </h2>
                                <NewlineText text={' 2. Add your billing address and phone number to your account.\n' +
                                 ' 3.Add your billing address and phone number to your account.\n' +
                                 ' 4.After a free 30 day test period we will require $15/month paypal subscription. Sign up here. (When you sign up you won’t be billed for the first 30 days. Please sign up before submitting your blinkee.com username to us)'} />
                    </h4>
                </div>
            </Grid>
            </Grid>



        </div>
            <Footer/>
        </div>

    );
}