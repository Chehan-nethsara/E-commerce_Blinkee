import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "./Header/header";
import HeaderLinks from "./Header/headerLinks";
// import Footer from "components/Footer/Footer.js";
import GridContainer from "./Grid/gridContainer";
import GridItem from "./Grid/gridItem";
import Button from "./Button/button";
import Card from "./Card/card";
import CardBody from "./Card/cardBody";
import CardHeader from "./Card/cardHeader";
import CardFooter from "./Card/cardFooter";
import CustomInput from "./Card/customInput";

import styles from "../resources/jss/loginStyle";

import image from "../resources/images/bg_login3.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                absolute
                color="transparent"
                brand="BlinkeeBuddy"
                href="/home"
                target="/home"
                leftLinks={<home/>}
                rightLinks={<HeaderLinks />}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes[cardAnimaton]}>
                                <form className={classes.form}>
                                    <CardHeader color="info" className={classes.cardHeader}>
                                        <h4 >Login</h4>
                                        <div className={classes.socialLine}>
                                            {/*<Button*/}
                                            {/*    justIcon*/}
                                            {/*    href="#pablo"*/}
                                            {/*    target="_blank"*/}
                                            {/*    color="primary"*/}
                                            {/*    onClick={e => e.preventDefault()}*/}
                                            {/*>*/}
                                            {/*    <i className={"fab fa-twitter"} />*/}
                                            {/*</Button>*/}
                                            <Button
                                                justIcon
                                                href="#pablo"
                                                target="_blank"
                                                color="facebook"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <FacebookIcon  />
                                                <i className={"fab fa-facebook"} />
                                            </Button>
                                            <Button
                                                justIcon
                                                href="#pablo"
                                                target="_blank"
                                                color="rose"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <InstagramIcon/>
                                                <i className={"fab fa-google-plus-g"} />
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <p className={classes.divider}>Or Be Classical</p>
                                    <CardBody>
                                        <CustomInput
                                            labelText="Email..."
                                            id="email"
                                            required
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "email",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Email className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Password"
                                            id="pass"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "password",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <LockIcon className={classes.inputIconsColor}>
                                                                lock_outline
                                                        </LockIcon>
                                                    </InputAdornment>
                                                ),
                                                autoComplete: "off"
                                            }}
                                        />
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <Button  href='/' color="success" size="sm" round>
                                           login
                                        </Button>
                                    </CardFooter>
                                    <div className={classes.forgo}>
                                        <a href="/forgotPassword" >Forgot Password</a>
                                    </div>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                {/*<Footer whiteFont />*/}
            </div>
        </div>
    );
}
