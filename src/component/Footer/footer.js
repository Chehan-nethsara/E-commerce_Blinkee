import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../Grid/gridContainer";
import GridItem from "../Grid/gridItem";
import Button from "../Button/button";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import icons from "@material-ui/icons";
import socialButtons from "@material-ui/icons";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import styles from "../Footer/footerStyle";
import {dark} from "@material-ui/core/styles/createPalette";
import {white} from "../../resources/jss/material_kit_for_desisgnes";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(styles);

export default function FooterMain(props) {
    const classes = useStyles();
    const { whiteFont } = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return (
         <div className={classes.section}>
             {/*<div className={classes.container}>*/}
       <div>
           <footer
               theme={ dark }
           >
               <div className={classes.footer}>
                   <GridContainer>
                       <GridItem xs={12} sm={2} md={2} lassName={classes.linksVertical}>
                           <h5 className={classes.footerHead}>Our Services</h5>
                           {/*<ul className={classes.linksVertical} color={white}>*/}

                                   <a href="#e3f2fd"  className={aClasses}>Return Policy</a>
                               <br/>
                               <br/>

                                   <a href="#fff"  className={aClasses}>Resell & Dropshipping</a>
                               <br/>
                               <br/>
                                   <a href="#pablo"  className={aClasses}>Presentation</a>
                               <br/>
                               <br/>
                                   <a href="#pablo"  className={aClasses}>Contact Us</a>
                           {/*</ul>*/}
                       </GridItem>
                       <GridItem xs={12} sm={2} md={2}>
                           <h5 className={classes.footerHead}>Market</h5>
                           <div className={classes.linksVertical}>
                                   <a href="#pablo" className={aClasses}>Sales FAQ</a>

                               <br/>
                               <br/>

                                   <a href="#pablo"  className={aClasses}>How to register</a>

                               <br/>
                               <br/>

                                   <a href="#pablo"  className={aClasses}>Sell goods</a>

                               <br/>
                               <br/>

                                   <a href="#pablo"  className={aClasses}>Receive Payment</a>

                               <br/>
                               <br/>

                                   <a href="#pablo"  className={aClasses}>Transactions issues</a>

                               <br/>
                               <br/>

                                   <a href="white"  className={aClasses}>Affiliates program</a>

                           </div>
                       </GridItem>
                       <GridItem xs={12} sm={4} md={4}>
                           <h5 className={classes.footerHead}>Social Feed</h5>
                           <div className={classes.linksVertical}>
                               <div color= "#fff">
                                   <i className="fab fa-twitter" />
                                   <p>
                                       How to handle ethical disagreements with your clients.
                                   </p>
                               </div>
                               <div>
                                   <i className="fab fa-twitter" />
                                   <p>
                                       The tangible benefits of designing at 1x pixel density.
                                   </p>
                               </div>
                               <div>
                                   <i className="fab fa-facebook-square" />
                                   <p>
                                       A collection of 25 stunning sites that you can use for
                                       inspiration.
                                   </p>
                               </div>
                           </div>
                       </GridItem>
                       <GridItem xs={12} sm={4} md={4}>
                           <h5 className={classes.footerHead}>Follow Us On</h5>
                           <div >
                               <Box  mb={1}>
                               <Button color="twitter" className={classes.followIcon}>
                                   <TwitterIcon justIcon simple  color="infoColor">
                                       <Favorite className="fab fa-twitter" />
                                   </TwitterIcon>
                               </Button>
                               </Box>

                               <Box mb={1}>
                               <Button color="facebook" className={classes.followIcon}>
                                   <FacebookIcon  />
                               </Button>
                               </Box>

                               <Box mb={1}>
                               <Button color="google" className={classes.followIcon}>
                                   <InstagramIcon/>
                               </Button>
                               </Box>

                           </div>
                           <br/>

                           <div className={classes.right}>
                               &copy; {1900 + new Date().getYear()} , made with{" "}
                               <Favorite className={classes.icon} /> by{" "}
                               <a
                                   href="https://www.creative-tim.com?ref=mkr-footer"
                                   className={aClasses}
                                   target="_blank"
                               >
                                   Dominators
                               </a>{" "}
                               for a better web experience.
                           </div>

                       </GridItem>

                   </GridContainer>
               </div>
           </footer>
       </div>
        {/*</div>*/}
        </div>
    );
}

FooterMain.propTypes = {
    theme: PropTypes.oneOf(["dark", "white", "transparent"]),
    big: PropTypes.bool,
    content: PropTypes.node.isRequired
};