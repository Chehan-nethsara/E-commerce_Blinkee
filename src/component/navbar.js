import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import blinkee from '../resources/images/blinkee.png';
import home from "./home";
import Link from "@material-ui/core/Link";
import login from "./login";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "./Header/customDropDown";
import {Apps} from "@material-ui/icons";
import List from "@material-ui/core/List";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import blinkee_logo_5 from '../resources/images/blinkee_logo_5.jpg';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 2,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(8),
            width: '40%',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem href= "/login" >Login</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>CartPage</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            {/*<MenuItem>*/}
            {/*    <IconButton aria-label="show 11 new notifications" color="inherit">*/}
            {/*        <Badge badgeContent={11} color="secondary">*/}
            {/*           <AccountCircle/>*/}
            {/*        </Badge>*/}
            {/*    </IconButton>*/}
            {/*    <p>Login</p>*/}
            {/*</MenuItem>*/}
            {/*<MenuItem onClick={handleProfileMenuOpen}>*/}
            {/*    <IconButton*/}
            {/*        aria-label="account of current user"*/}
            {/*        aria-controls="primary-search-account-menu"*/}
            {/*        aria-haspopup="true"*/}
            {/*        color="inherit"*/}
            {/*    >*/}
            {/*        <AccountCircle />*/}
            {/*    </IconButton>*/}
            {/*    <p>Log-In</p>*/}
            {/*</MenuItem>*/}
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <List className={classes.list}>
                        <ListItem className={classes.listItem}>
                            <CustomDropdown
                                noLiPadding
                                buttonText="Category"
                                buttonProps={{
                                    className: classes.navLink,
                                    color: "transparent"

                                }}
                                buttonIcon={Apps}
                                dropdownList={[
                                    <Link href= '/product' className={classes.dropdownLink}>
                                        Jewellery
                                    </Link>,
                                    <Link href= '/productPage' className={classes.dropdownLink}>
                                        Watches
                                    </Link>,
                                    <Link href= '/productPage' className={classes.dropdownLink}>
                                        Perfumes
                                    </Link>,
                                    <Link href= '/productPage' className={classes.dropdownLink}>
                                        Shoes & Heals
                                    </Link>,
                                    <Link href= '/productPage' className={classes.dropdownLink}>
                                        Bloosam
                                    </Link>,
                                    <Link href= '/productPage' className={classes.dropdownLink}>
                                        Women's Fashion
                                    </Link>,
                                    <Link href= '/productPage' className={classes.dropdownLink}>
                                        Men's Watches
                                    </Link>,
                                    <Link href= '/productPage' className={classes.dropdownLink}>
                                        Men's fashion
                                    </Link>,
                                    <Link href= '/productPage' className={classes.dropdownLink}>
                                        Gifts
                                    </Link>,
                                    <Link href= '/productPage' className={classes.dropdownLink}>
                                        Decorations
                                    </Link>,
                                    <Link href= '/productPage' className={classes.dropdownLink}>
                                        Kids & Baby Items
                                    </Link>,
                                    <Link href= '/productPage' className={classes.dropdownLink}>
                                        Beauty Health & Hair
                                    </Link>,
                                    <Link href= '/productPage' className={classes.dropdownLink}>
                                        Bags & Shoes
                                    </Link>,
                                    <Link href= '/productPage' className={classes.dropdownLink}>
                                       Toys
                                    </Link>,
                                    <Link href= '/productPage' className={classes.dropdownLink}>
                                        Other
                                    </Link>



                                ]}
                            />
                        </ListItem>
                    </List>
                    {/*<IconButton*/}
                    {/*    edge="start"*/}
                    {/*    className={classes.menuButton}*/}
                    {/*    color="inherit"*/}
                    {/*    aria-label="open drawer"*/}
                    {/*    aria-controls={mobileMenuId}*/}
                    {/*    aria-haspopup="true"*/}
                    {/*    onClick={handleProfileMenuOpen}*/}
                    {/*>*/}

                    {/*    <MenuIcon />*/}
                    {/*</IconButton>*/}
                    <Button href="/">
                        <div>
                            <img
                                src={blinkee_logo_5}
                                alt="First slide"
                                className="slick-image"
                            />
                        </div>
                    </Button>
                    {/*<Typography className={classes.title} variant="h6" noWrap>*/}
                    {/*   Blinkee*/}
                    {/*</Typography>*/}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>

                        <Button color="inherit" href= "/login">LogIn</Button>
                        <Button color="inherit" href= "/register">Sign Up</Button>
                        <IconButton
                                   aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <IconButton
                            href= "/cart"
                            color="inherit"
                        >
                            <ShoppingCartIcon/>
                        </IconButton>
                    </div>
                    {/*<div className={classes.sectionMobile}>*/}
                    {/*    <IconButton*/}
                    {/*        aria-label="show more"*/}
                    {/*        aria-controls={mobileMenuId}*/}
                    {/*        aria-haspopup="true"*/}
                    {/*        onClick={handleMobileMenuOpen}*/}
                    {/*        color="inherit"*/}
                    {/*        href="/register"*/}
                    {/*    >*/}
                    {/*        <MoreIcon />*/}
                    {/*    </IconButton>*/}
                    {/*</div>*/}
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
