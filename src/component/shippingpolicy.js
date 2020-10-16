import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import image_c2 from '../resources/images/image_c2.png';
import Navbar from './navbar';
import Footer from './Footer/footer';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },

    },
}));

export default function ValidationTextFields() {
    const classes = useStyles();

    return (
        <div className= "maincontent">
            <Navbar/>


            <div className='shippingDesign'>

            <img
                style={{height: "500px", width: "100%", display: "block"}}
                src={image_c2}
                alt="First slide"
                className="slick-image"
            />
            <div className="sippingcontent">
                <h1>Blnkee.com Shipping Policy</h1>

                <h4>To calculate shipping cost please add your items to your shopping cart then click calculate shipping
                    in the shopping cart and add your zip code and state. The cart will tell you. Contact Magic Matt for
                    manual shipping quotes.</h4>
                <div className="shipping">
                <p>Fedex Ground or US Priority Mail will be used for most shipments over one pound within the 48
                    contiguous states.</p>
                <p>Orders placed using “Ground” or “Express” shipping method ship the same day if placed before 12 pm
                    PST.</p>
                <p>For express shipments after 12 pm PST please call to place your order.</p>
                <p>Orders placed using USPS may not ship the same day the order is placed and may not ship for up to 3
                    business days.</p>
                </div>
                <h4>Please Note: Refunds for shipping delays will only be honored for expedited services, orders with
                    ground or USPS shipping are not eligible for a shipping refund should a delay occur. If a delay
                    occurs when using any of our expedited shipping services, only a refund of the shipping charges paid
                    will be given (per carriers service guide).</h4>

            </div>
            </div>

    <Footer/>

        </div>

    );
}
