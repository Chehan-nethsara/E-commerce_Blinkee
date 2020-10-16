import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Navbar from "./navbar";
import Footer from "./Footer/footer";
import faq01 from "../resources/images/faq01.png";
import {indigo,roseColor} from "../resources/jss/material_kit_for_desisgnes";
import Link from "@material-ui/core/Link";

function TabPanel2(props) {
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
                <Box p={4} >
                    <Typography >{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel2.propTypes = {
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
function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        width: 400,
        height: 250,
    },
    texheder: {
        color: "indigo"


    },
    texheader01: {
        textAlign: "left"
    }

}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div><Navbar/>
        <br/>
        <img className={classes.img} alt="complex" src={faq01} />

        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" >
                    <Tab label="Customer Service"   {...a11yProps(0)} />
                    <Tab label="Inventory Download" {...a11yProps(1)} />
                    <Tab label="Shipping" {...a11yProps(2)} />
                    <Tab label="Miscellaneous" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel2 value={value} index={0} className={classes.texheader01} >
                <h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'Please use '} />
                        <Link href="/contactus" color={roseColor}>
                            {"help@blinkee.com"}
                        </Link>

                    </b>
                </h2>

            </TabPanel2>
            <TabPanel2 value={value} index={1} className={classes.texheader01} >
                <h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'1.Do you have inventory list with UPC codes in excel format?'} />
                    </b>
                </h2>
                <h5>
                         <NewlineText text={'Yes, available from you account page.'} />
                </h5>
                <h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'2.How often do you update the inventory list?'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'Whenever catalog changes – daily at most.'} />
                </h5>
                <h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'3.Can I receive the inventory list whenever updated?'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'Please download from your account page'} />
                </h5>
                <h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'4.For your out of stocks products/item, do you delete those on your website or you just list them as out of stock?'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'Out of stock items appear on our website, but are designated “Out of Stock” and cannot be ordered.'} />
                </h5>
                <h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'5.How many SKU’s do you have?'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'About 1500'} />
                </h5>
                <h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'6.How often does your pricing change?'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'As the need arises.'} />
                </h5>
                <h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'7.Do you promote MAP (Minimum Advertised Price)?'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'No, but if you use our list on our Amazon listing, please don’t underbid our price.'} />
                </h5>
            </TabPanel2>
            <TabPanel2 value={value} index={2} className={classes.texheader01} >
                <h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'1.Does your company have the ability to dropship single units?'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'Yes.'} />
                </h5>
                <h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'2.If so, do you charge a fee for dropshipping?'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'We charge $3.50 processing fee per order only if you need to use your own shipping label.'} />
                </h5>
                <h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'3.Is it possible to send orders without a) your branding on the box, and/or b) an invoice?'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'Yes, please add this item to your shopping cart when you checkout to let us know to ship the order blind:\n' +
                    'https://blinkee.com/product/blind-shipping-nopromo-material-no-invoice/'} />
                </h5><h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'4.Do you offer a drop-shipment? If yes, how can we set up the account?'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'Please take a look at this page at your convenience:\n' +
                    'https://blinkee.com/blinkee-com-resellers-and-dropshippers/'} />
                </h5><h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'5.How much is your shipping fee? Do you have a free shipping program?'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'For small orders we make flat rate shipping available as follows:\n' +
                    '0 – 1 lb. $7.49 USPS First Class Mail. This shipping option may or may not include tracking and may delay shipping for up to 2 business days.\n' +
                    'For orders weighing more than a pound shipping is calculated by weight, dimensions and zip code. These orders are shipped the same day' +
                    ' received if received before 12PM PST.'} />
                </h5><h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'6.If I order today, when will be the products/items will ship out?'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'Ground Shipping:\n' +
                    'Orders placed before 12pm PST ship same day. Otherwise, shipped the following business day.\n' +
                    'USPS shipping:\n' +
                    'Orders ship the same day or up to two days after being placed.\n' +
                    'We don’t ship on weekends.'} />
                </h5><h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'7.When I place my order online, how do I avoid paying shipping so I can send my own shipping labels?'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'Place the order and include this product:\n' +
                    'https://blinkee.com/product/customer-provided-shipping-label-service-charge\n' +
                    'Then use coupon code: shipzeroblinkee\n' +
                    'Then we can provide weight and dimensions of the order and you send us the shipping label to help@blinkee.com.'} />
                </h5>
                <h2 className={classes.texheder}>
                    <b>
                            <NewlineText text={'8.Do you offer pallet delivery to our warehouse and other locations like Amazon fulfillment centers?'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'Yes, except we do not ship to Amazon FBA nor do we ship to Amazon Prep.'} />
                </h5>
            </TabPanel2>
            <TabPanel2 value={value} index={3} className={classes.texheader01} >
                <h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'1.If you send out email deals, please add me to the list .'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'Please sign up for our newsletter during order checkout. Our retail coupons will not apply to our resellers however.'} />
                </h5>
                <h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'2.If needed, could you provide a distribution rights letter? (A templated letter that includes our company name would be fine!)'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'We can provide this for specific items after a purchase.'} />
                </h5>
                <h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'3.Do you have a minimum order(MOQ)?'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'No Minimum.'} />
                </h5>
                <h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'4.Where is your distribution warehouse located?'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'769 Center Bl STE 58 Fairfax, California,  94930'} />
                </h5>
                <h2 className={classes.texheder}>
                    <b>
                        <NewlineText text={'5.Can I pay upfront with a credit card?'} />
                    </b>
                </h2>
                <h5>
                    <NewlineText text={'Yes , or PayPal, or Amazon Pay'} />
                </h5>
            </TabPanel2>
        </div>
            <Footer/>
        </div>
    );
}