import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './navbar';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import ButtonBase from "@material-ui/core/ButtonBase";
import image_cartPage_1 from "../resources/images/image_cartPage_1.jpg";
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import IconButton from '@material-ui/core/IconButton';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import Forward5Icon from '@material-ui/icons/Forward5';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ChatIcon from '@material-ui/icons/Chat';
import Rating from '@material-ui/lab/Rating';
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Footer from './Footer/footer';



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        margin: theme.spacing(4),

    },
    roots: {
        height: '100vh',
        margin: theme.spacing(3),

    },

    paper: {
        margin: theme.spacing(3, 0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },



    image: {
        position: 'relative',
        height: 270,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(3)}px ${theme.spacing(4)}px ${theme.spacing(2) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },

    margin:{
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(10),
        marginLeft: theme.spacing(6),
        marginRight: theme.spacing(8),
        width:500,
        height:100,

    },
    buttons: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(10),
        marginLeft: theme.spacing(12),
        marginRight: theme.spacing(7),
        width:100,
        height:50,
    },
    buttonss: {
        display: 'flex',
        justifyContent: 'flex-end',
width:500,
        height:100,

    },
    button: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(1),
    },
    buttonsss: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(2),
    },
}));
const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: purple[500],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});
const components = {
    sm: 'em',
    md: 'u',
    lg: 'del',
};

const message = `Rating & Reviews of Product. `;
const messagee = `This product has no reviews. Let other know what do you think and be the first to write a review   . `;
const messages = `Quections about the product `;
const messagess = `There are no quection yet. ASk the seller now and their answer will show here. `;
export default function SignInSide() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [value, setValue] = React.useState(2);

    return (
        <Container  component="main" maxWidth="full">
            <Navbar/>
        <Container  component="main" maxWidth="full">

        <Grid container component="main" className={classes.root}>
            <CssBaseline />

            <Grid item xs={false} sm={4} md={7} component={Paper} elevation={5} square >
                <Paper elevation={3} />
                <Grid container spacing={0}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.image} alt="complex" src={image_cartPage_1} style={{ cursor: 'pointer' }} />
                        </ButtonBase>
                    </Grid>
                    <div style={{ width: 300 }}>
                        <Box component="fieldset" mb={2} borderColor="transparent">
                        <Typography variant="h6" color="inherit" >
                        Product Name
                        </Typography>
                        </Box>
                        <Box component="fieldset" mb={2} borderColor="transparent">
                            <Typography component="legend"></Typography>
                            <Rating name="read-only" value={null} size="small" readOnly />
                        </Box>

                        <Grid item xs={false} sm={4} md={12} component={Paper} elevation={0} square>
                            <Paper elevation={0} />
                            <AccordionSummary

                                aria-label="Expand"
                                aria-controls="additional-actions1-content"
                                id="additional-actions1-header"
                            >
                                <Box component="div" my={1} whiteSpace="normal" bgcolor="background.paper">
                                    Brand / More products
                                </Box>
                            </AccordionSummary>

                        </Grid>

                        <Typography component="legend" variant="h6">
                        <Box color="info.main" textAlign="left">RS 3000</Box>
                        </Typography>
                        <Box color="error.main">27%</Box>

                        <Typography component="div">
                            <Box textAlign="justify" m={1}>
                               Promotion
                            </Box>
                            <Box textAlign="left" m={1}>
                                Quntity
                            </Box>
                            <Box textAlign="center" m={1}>
                                <div className={classes.buttonss}>

                                    <Button  className={classes.buttonsss} variant="outlined" color="secondary" >
                                        Buy Now
                                    </Button>

                                    <Button

                                        variant="contained"
                                        color="secondary"

                                        className={classes.button}
                                    >
                                        Add to cart
                                    </Button>
                                </div>
                            </Box>
                            <Box textAlign="right" m={1}>

                            </Box>
                        </Typography>
                    </div>
                </Grid>
            </Grid>



                <Grid item xs={12} sm={8} md={4} component={Paper} elevation={5} square>

                    <Paper elevation={3} />
                    <Grid container wrap="nowrap" spacing={0}>
                    <AppBar position="static" color="default" elevation={2} className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h8" color="inherit" noWrap className={classes.toolbarTitle}>
                                Delivery options
                                <IconButton  color="inherit">
                                    <ErrorOutlineIcon  />
                                </IconButton>

                                <form>
                                    <IconButton  color="inherit">
                                            <LocationOnIcon  />
                                    </IconButton>
                                   colombo 01 - fort
                                </form>
                                <form>
                                    <IconButton  color="inherit">
                                        <AllInboxIcon />
                                    </IconButton>
                                    Home Delivery 3-5 days
                                </form>

                                <form>
                                    <IconButton  color="inherit">
                                        <MonetizationOnIcon  />
                                    </IconButton>

                                    Cash on Deliver Available
                                </form>

                            </Typography>
                            <Typography variant="h8" color="inherit"  icon={LocationOnIcon} noWrap className={classes.toolbarTitle}>

                            </Typography>


                        </Toolbar>
                    </AppBar>
                    </Grid>
                        <Grid container wrap="nowrap" spacing={0}>
                    <AppBar position="static" color="default" elevation={2} className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h7" color="inherit" noWrap className={classes.toolbarTitle}>
                                Return & Warantity
                                <IconButton  color="inherit">
                                    <ErrorOutlineIcon  />
                                </IconButton>
                                <form>
                                    <IconButton  color="inherit">
                                        <Forward5Icon  />
                                    </IconButton>

                                    5 days Returns
                                </form>
                                <form>
                                    <IconButton  color="inherit">
                                        <AssignmentReturnedIcon  />
                                    </IconButton>

                                    1 year Local seller waranty
                                </form>
                            </Typography>

                        </Toolbar>
                    </AppBar>
                        </Grid>

                    <ThemeProvider theme={theme}>
                        <Button color="primary">Go To Store</Button>
                    </ThemeProvider>
            </Grid>



            <div className={classes.roots}>
                <Grid item xs={false} sm={5} md={12} component={Paper} elevation={5} square >
                    <Paper elevation={3} />
                    <Grid container wrap="nowrap" spacing={0}>
                        <Grid item>

                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                                <Toolbar className={classes.toolbar}>
                                    <Typography variant="h7" color="inherit" noWrap className={classes.toolbarTitle}>
                                        Rating & Reviews of Product
                                    </Typography>

                                </Toolbar>
                            </AppBar>

                            <div>
                                <Box component="fieldset" mb={1} borderColor="transparent">
                                    <Typography component="legend"></Typography>
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        size="small"
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />

                                </Box>
                                <Box component="fieldset" mb={1} borderColor="transparent">
                                    <Typography component="legend"></Typography>
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        size="small"
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />

                                </Box>
                                <Box component="fieldset" mb={1} borderColor="transparent">
                                    <Typography component="legend"></Typography>
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        size="small"
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />

                                </Box>
                                <Box component="fieldset" mb={1} borderColor="transparent">
                                    <Typography component="legend"></Typography>
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        size="small"
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </Box>

                            </div>
                            <Typography noWrap>{messagee}</Typography>
                        </Grid>
                    </Grid>
                </Grid>



                <Paper className={classes.paper}>
                    <Paper elevation={3} />
                    <Grid container wrap="nowrap" spacing={0}>
                        <Grid item>
                        </Grid>
                        <Grid item xs>
                            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                                <Toolbar className={classes.toolbar}>
                                    <Typography variant="h7" color="inherit" noWrap className={classes.toolbarTitle}>
                                        Quections about the product
                                    </Typography>

                                </Toolbar>
                            </AppBar>

                            <FormControl className={classes.margin}>
                                <InputLabel htmlFor="demo-customized-textbox"></InputLabel>

                                <TextField id="outlined-basic" label="Enter coupon code" variant="outlined" />
                            </FormControl>
                            <Button variant="contained" color="primary" className={classes.buttons}>
                                Apply
                            </Button>
                            <Typography noWrap>{messagess}</Typography>
                        </Grid>
                    </Grid>
                </Paper>

            </div>
        </Grid>
        </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </Container>
    );
}