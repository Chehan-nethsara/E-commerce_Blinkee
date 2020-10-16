import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Navbar from "./navbar";
import dis01 from "../resources/images/dis01.jpg";
import ButtonBase from "@material-ui/core/ButtonBase";
import dropshipping from '../resources/images/Dropshipping01.png'
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import Footer from "./Footer/footer";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>

            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
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
        <div>
            <br/>
            <br/>
        <Grid container spacing={3}>
        <Grid item xs={12} lg={5} md={6} >
        <div>
            <img  alt="complex" src={dropshipping} />
        </div>
        </Grid>
            <Grid item xs={12} lg={7} md={6}>
            <div>
                <h2>
                Blinkee.com Reseller Program.
                We stand behind our products and we will always cover any product defects or other problems that are our fault.
                Please see our return policy and other company policies
            </h2>
                <Link href="./register.js" variant="body2">
                    {"  Register on Blinkee.com"}
                </Link>
            </div>
            </Grid>

            <Grid item xs={12} sm={6} md={8}>
                <div>
            <Link href="./register.js" variant="body2">
                {"  Register on Blinkee.com"}
            </Link>
            <h4>
            Add your billing address and phone number to your account.
            Add your billing address and phone number to your account.
            After a free 30 day test period we will require $15/month paypal subscription.
            Sign up here. (When you sign up you won’t be billed for the first 30 days.
            Please sign up before submitting your blinkee.com username to us)
            </h4>
        </div>
        </Grid>
        </Grid>
            <div>hfdhfgjfgjfgjfgjfgjfjfjfjfjhdfhdfh</div>

        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </div>
        </div>
            <Footer/>
        </div>

    );
}