import React from 'react';
import Avatar from '@material-ui/core/Avatar';
//import Button from '@material-ui/core/Button';
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
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "./Button/button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from '@material-ui/core/styles';

import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import image_pr_9 from "../resources/images/image_pr_9.jpg";
import image_pr_10 from "../resources/images/image_pr_10.jpg";
import image_pr_7 from "../resources/images/image_pr_7.jpg";
import image_pr_6 from "../resources/images/image_pr_6.jpg";
;



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
const products = [
    { name: 'My shopping cart ', desc: '', price: '(1 item)' },
    { name: 'Subtotal >', desc: '', price: '$3.45' },

];

const drawerWidth = 240;

const cards = [1, 2, 3, 4];
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
        marginBottom: theme.spacing(3),
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
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(20),
    },
    buttonsss: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(5),
    },
    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    card: {
        height: '100%',
        width:'50',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '8.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },

    roots1: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 400,
        width: '100%',
        margin: theme.spacing(false),
    },

    papers: {
        margin: theme.spacing(10, 10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    drawers: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    menuButtons: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },

    forms: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(5),
    },
    submits: {
        margin: theme.spacing(3, 2, 2),
    },

    // necessary for content to be below app bar
    toolbars: theme.mixins.toolbar,
    drawerPapers: {
        width: drawerWidth,
    },
    contents: {
        flexGrow: 1,
        padding: theme.spacing(20),
    },
    icons: {
        marginRight: theme.spacing(10),
    },


    cardGrids: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    cards: {
        height: '70%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedias: {
        paddingTop: '56.25%', // 16:9
    },
    cardContents: {
        flexGrow: 1,
    },

    images: {
        position: 'relative',
        height: 50,
        width:100,

        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisibles: {},
    imageButtons: {
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
    imageSrcs: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrops: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitles: {
        position: 'relative',
        padding: `${theme.spacing(3)}px ${theme.spacing(4)}px ${theme.spacing(2) + 6}px`,
    },
    imageMarkeds: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    listItems: {
        padding: theme.spacing(1, 2),
    },
    totals: {
        fontWeight: 700,
    },
    titles: {
        marginTop: theme.spacing(2),

    },
    buttons1: {
        display: 'flex',
        justifyContent: 'flex-end',


    },

    button1: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(10),
        marginLeft: theme.spacing(9),
        marginRight: theme.spacing(15),
    },
    button2: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(10),
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(10),
    },
    coupn:{
      width:100 ,
      height:3,
        marginLeft: theme.spacing(5),
    },
}));
const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: purple[500],
        },

    },
});
// const DialogTitle = withStyles(styles)((props) => {
//     const { children, classes, onClose, ...other } = props;
//     return (
//         <MuiDialogTitle disableTypography className={classes.root} {...other}>
//             <Typography variant="h6">{children}</Typography>
//             {onClose ? (
//                 <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//                     <CloseIcon />
//                 </IconButton>
//             ) : null}
//         </MuiDialogTitle>
//     );
// });
// const DialogContent = withStyles((theme) => ({
//     root: {
//         padding: theme.spacing(2),
//     },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//     root: {
//         margin: 0,
//         padding: theme.spacing(1),
//     },
// }))(MuiDialogActions);
const components = {
    sm: 'em',
    md: 'u',
    lg: 'del',
};

const message = `Rating & Reviews of Product. `;
const messagee = `This product has no reviews. Let other know what do you think and be the first to write a review   . `;
const messages = `Questions about the product `;
const messagess = `There are no quection yet. Ask the seller now and their answer will show here. `;
export default function SignInSide() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [value, setValue] = React.useState(2);


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloses = () => {
        setOpen(false);
    };
    const [opens, setOpens] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpens(true);
    };
    const handleClose2 = () => {
        setOpens(false);
    };


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
                        <Box component="fieldset" mb={2} borderColor="transparent" textAlign="left">
                        <Typography variant="h6" color="inherit" textAlign="left" >
                        Product Name
                        </Typography>
                        </Box>
                        <Box component="fieldset" mb={0} borderColor="transparent" textAlign="left">

                            <Rating name="read-only" value={null} size="small" readOnly />
                            <Typography component="legend">  </Typography>
                        </Box>

                        <Grid item xs={false} sm={4} md={12} component={Paper} elevation={0} square>
                            <Paper elevation={0} />
                            <AccordionSummary

                                aria-label="Expand"
                                aria-controls="additional-actions1-content"
                                id="additional-actions1-header"
                            >
                                <Box component="div" my={0} whiteSpace="normal" bgcolor="background.paper" textAlign="left">
                                    <ThemeProvider theme={theme} textAlign="center">

                                        <Button color="transparent" href="/product" >Brand / More products</Button>
                                    </ThemeProvider>

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

                                <ThemeProvider theme={theme} textAlign="center">

                                    <Button className={classes.coupn} color="danger" onClick={handleClickOpen1}>Min spend $20</Button>

                                    <Dialog onClose={handleClose2} aria-labelledby="customized-dialog-title" open={opens}>
                                        <DialogTitle id="customized-dialog-title" onClose={handleClose2 }>

                                        </DialogTitle>
                                        <DialogContent dividers>
                                            <Typography gutterBottom>
                                               Use Code: 45fg

                                            </Typography>
                                            <Typography variant="h8"gutterBottom>

                                                <Box color="error.main">$20</Box>
                                            </Typography>
                                            <Typography variant="h8" gutterBottom>

                                                <Box color="error.main">Min spend $100</Box>
                                            </Typography>
                                            <Typography variant="h9" gutterBottom>
                                              2020.09.10 - 2020.09.15
                                            </Typography>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button autoFocus onClick={handleClose2} color="transparent">
                                                Collect
                                            </Button>
                                        </DialogActions>
                                        <DialogTitle id="customized-dialog-title" onClose={handleClose2 }>

                                        </DialogTitle>
                                        <DialogContent dividers>
                                            <Typography gutterBottom>

                                                Use Code: 40fg
                                            </Typography>
                                            <Typography variant="h8" gutterBottom>

                                            <Box color="error.main">$100</Box>
                        </Typography>
                                            <Typography  variant="h8" gutterBottom>

                                                <Box color="error.main">Min spend $100</Box>
                                            </Typography>
                                            <Typography variant="h9" gutterBottom>
                                                2020.09.10 - 2020.09.15
                                            </Typography>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button autoFocus onClick={handleClose2} color="transparent">
                                                Collect
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </ThemeProvider>
                            </Box>

                            <Box textAlign="left" m={1}>
                                Quntity
                            </Box>
                            <Box textAlign="center" m={1}>
                                <div className={classes.buttonss}>

                                    <Button  className={classes.buttonsss} variant="outlined" color="facebook" >
                                        Buy Now
                                    </Button>

                                    <Button

                                        variant="contained"
                                        color="danger"

                                        className={classes.button}
                                        onClick={handleClickOpen}
                                    >
                                        Add to cart
                                    </Button>
                                    <Dialog
                                        open={open}
                                        onClose={handleCloses}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                        href="/cartPage"
                                    >
                                        <Grid item xs={10} sm={12} md={20} component={Paper} elevation={5} square >
                                            <CloseIcon  style={{ cursor: 'pointer' }} >   </CloseIcon>
                                            <div className={classes.roots1}>
                                                <CssBaseline />
                                                <Grid item xs={false} sm={4} md={6} component={Paper} elevation={2} square >
                                                    <Paper elevation={3} />
                                                    <Grid container spacing={0}>
                                                        <Grid item>
                                                            <ButtonBase className={classes.images}>
                                                                <img className={classes.images} alt="complex" src={image_cartPage_1} style={{ cursor: 'pointer' }} />
                                                            </ButtonBase>
                                                        </Grid>

                                                        <Grid item xs={10} sm container>
                                                            <Grid item xs container direction="column" spacing={4}>
                                                                <Grid item xs>
                                                                    <Typography gutterBottom variant="subtitle1">

                                                                        <Box color="info.main" textAlign="center"> 1 New item(s) have added to your cart</Box>
                                                                    </Typography>
                                                                    <Typography component="legend" variant="h6">

                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs>
                                                                    <Typography variant="body2" gutterBottom>
                                                                        product name
                                                                    </Typography>
                                                                    <Typography variant="body2" color="textSecondary">
                                                                        $34
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                                        Qty 1
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item >
                                                                <Typography variant="subtitle1"></Typography>
                                                            </Grid>
                                                            <Grid item >
                                                                <Typography variant="subtitle1"></Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>

                                                <Grid item xs={false} sm={4} md={6} component={Paper} elevation={2} square>

                                                    <Paper elevation={3} />

                                                    <React.Fragment>
                                                        <List disablePadding>
                                                            {products.map((product) => (
                                                                <ListItem className={classes.listItems} key={product.name}>
                                                                    <ListItemText primary={product.name} secondary={product.desc} />
                                                                    <Typography variant="body2">{product.price}</Typography>
                                                                </ListItem>
                                                            ))}
                                                            <ListItem className={classes.listItem1}>
                                                                <ListItemText primary="Total > " />
                                                                <Typography variant="subtitle1" className={classes.totals}>

                                                                    <Box color="error.main">$34.06</Box>
                                                                </Typography>
                                                            </ListItem>
                                                        </List>
                                                        <div className={classes.buttons1}>

                                                            <Button  className={classes.button2} variant="outlined" color="danger" onClick={handleCloses} href= "/cart" >
                                                                Go To Cart
                                                            </Button>

                                                            <Button

                                                                variant="contained"
                                                                color="facebook"
                                                                onClick={handleCloses}
                                                                className={classes.button1}
                                                            >
                                                                CHECKOUT
                                                            </Button>
                                                        </div>

                                                    </React.Fragment>


                                                </Grid>

                                                <Grid item xs={false} sm={4} md={12} component={Paper} elevation={0} square>

                                                    <Paper elevation={0} />
                                                    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                                                        <Toolbar className={classes.toolbars}>
                                                            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                                                                Just for you
                                                            </Typography>

                                                        </Toolbar>
                                                    </AppBar>

                                                    <Container className={classes.cardGrids} maxWidth="md">
                                                        {/* End hero unit */}
                                                        <Grid container spacing={9}>
                                                            {cards.map((card) => (
                                                                <Grid item key={card} xs={10} sm={5} md={3}>
                                                                    <Card className={classes.cards}>
                                                                        <CardMedia
                                                                            className={classes.cardMedias}
                                                                            image="https://source.unsplash.com/random"
                                                                            title="Image title"
                                                                        />
                                                                        <CardContent className={classes.cardContents}>
                                                                            <Typography gutterBottom variant="h5" component="h2">
                                                                                Product Name
                                                                            </Typography>
                                                                            <Typography>
                                                                                RS 500/-
                                                                            </Typography>
                                                                        </CardContent>
                                                                        <CardActions>
                                                                            <DialogActions>
                                                                            <Button size="small" color="transparent" >
                                                                                View
                                                                            </Button>
                                                                            <Button size="small" color="transparent" onClick={handleCloses}>
                                                                                Edit
                                                                            </Button>
                                                                            </DialogActions>
                                                                        </CardActions>
                                                                    </Card>
                                                                </Grid>
                                                            ))}
                                                        </Grid>

                                                    </Container>
                                                </Grid>
                                            </div>
                                        </Grid>

                                    </Dialog>
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
                            </Typography>



                        </Toolbar>

                            <Toolbar className={classes.toolbar}>
                                <form>
                                    <IconButton  variant="h8" color="inherit" href="/productPage">
                                            <LocationOnIcon  />
                                    </IconButton>
                                   colombo 01 - fort
                                </form>
                                <form>
                                    <IconButton variant="h8"  color="inherit">
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
                            </Typography>

                        </Toolbar>
                        <Toolbar className={classes.toolbar}>
                                <form>
                                    <IconButton  color="inherit">
                                        <Forward5Icon  />
                                    </IconButton>

                                    5 days Returns
                                </form>
                        </Toolbar>
                            <Toolbar className={classes.toolbar}>
                                <form>
                                    <IconButton  color="inherit">
                                        <AssignmentReturnedIcon  />
                                    </IconButton>

                                    1 year Local seller waranty
                                </form>
                            </Toolbar>
                    </AppBar>
                        </Grid>
                    <AppBar position="static" color="default" elevation={1} className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h7" color="inherit" noWrap className={classes.toolbarTitle}>
                    <ThemeProvider theme={theme} textAlign="center">

                        <Button color="transparent" href="/product">Go To Store</Button>
                    </ThemeProvider>
                            </Typography>

                        </Toolbar>
                    </AppBar>

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

                                <TextField id="outlined-basic" label="Enter your question(s) here" variant="outlined" />
                            </FormControl>
                            <Button variant="contained" color="primary" className={classes.buttons}>
                                Apply
                            </Button>
                            <Typography noWrap>{messagess}</Typography>
                        </Grid>
                    </Grid>
                </Paper>



                    <Paper elevation={0} />
                    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                                Just for you
                            </Typography>

                        </Toolbar>
                    </AppBar>

                    <Container className={classes.cardGrid} maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={9}>
                            {[0].map((card) => (
                                <Grid item key={card} xs={10} sm={5} md={3}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}

                                            title="Image title"
                                        />
                                        <img
                                            style={{height: "100px", width: "100%"}}

                                            src={ image_pr_6}

                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h7" >
                                                Ring
                                            </Typography>
                                            <Typography>
                                                $5
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </Grid>
                            ))}


                            {[0].map((card) => (
                                <Grid item key={card} xs={10} sm={5} md={3}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}

                                            title="Image title"
                                        />
                                        <img
                                            style={{height: "100px", width: "100%"}}

                                            src={ image_pr_7}

                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h7"  >
                                                Product
                                            </Typography>
                                            <Typography>
                                                $10
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </Grid>
                            ))}
                            {[0].map((card) => (
                                <Grid item key={card} xs={10} sm={5} md={3}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}

                                            title="Image title"
                                        />
                                        <img
                                            style={{height: "100px", width: "100%"}}

                                            src={ image_pr_9}

                                        />

                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h7"  >
                                                Product
                                            </Typography>
                                            <Typography>
                                                $50
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                            {[0].map((card) => (
                                <Grid item key={card} xs={10} sm={5} md={3}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}

                                            title="Image title"
                                        />
                                        <img
                                            style={{height: "100px", width: "100%"}}

                                            src={ image_pr_10}

                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h7"  >
                                                Product
                                            </Typography>
                                            <Typography>
                                                $100
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </Grid>
                            ))}



                        </Grid>

                    </Container>






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