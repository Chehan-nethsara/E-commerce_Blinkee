/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "./customDropDown";
import Button from "../Button/button";

import styles from "../../resources/jss/headerLinkStyle";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="SignIN"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"

                    }}
                    buttonIcon={Apps}
                    dropdownList={[
                        <Link to="/register" className={classes.dropdownLink}>
                            Create
                        </Link>,
                    ]}
                />
            </ListItem>
        {/*    <ListItem className={classes.listItem}>*/}
        {/*        /!*<Tooltip title="Delete">*/}
        {/*  <IconButton aria-label="Delete">*/}
        {/*    <DeleteIcon />*/}
        {/*  </IconButton>*/}
        {/*</Tooltip>*!/*/}
        {/*       */}
        {/*    </ListItem>*/}
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-facebook"
                    title="Follow us on facebook"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        color="transparent"
                        href="https://www.facebook.com"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <FacebookIcon  />
                        <i className={classes.socialIcons + " fab fa-facebook"} />
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-tooltip"
                    title="Follow us on instagram"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        color="transparent"
                        href="https://www.instagram.com"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <InstagramIcon/>
                        <i className={classes.socialIcons + " fab fa-instagram"} />
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}
