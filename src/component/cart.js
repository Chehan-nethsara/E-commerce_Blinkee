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
import {createMuiTheme, makeStyles, withStyles} from '@material-ui/core/styles';
import Navbar from './navbar';
import {purple, red} from '@material-ui/core/colors';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import DeleteIcon from '@material-ui/icons/Delete';
import image_cartPage_1 from "../resources/images/image_cartPage_1.jpg";
import ButtonBase from "@material-ui/core/ButtonBase";
import Footer from './Footer/footer';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ThemeProvider} from "@material-ui/styles";
import Alert from "@material-ui/lab/Alert";
import Button from "./Button/button";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';

function preventDefault(event) {
    event.preventDefault();
}
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright Â© '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const products = [

    { name: 'Subtotal >', desc: '', price: '$3.45' },

];
const cards = [1];
const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);
const useStyles = makeStyles((theme) => ({

    root: {
        backgroundcolor:"primary",
        display: 'flex',
        '& > *': {
            margin: theme.spacing(3),
            width:'100vh',
            height: '100vh',

        },
    },


    paper: {
        margin: theme.spacing(4, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
        marginLeft:'auto',
    },
    form: {
        width: '10%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(1, 0, 1),
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
    cardMedia: {
        paddingTop: '20%', // 16:9
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    },
    cardGrid: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },

    nested: {
        paddingLeft: theme.spacing(4),
    },
    button: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(false),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(35),
        height: 40,
        width: 451.7,
        padding: '0 30px',
    },
    buttons: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(7),
    },
    margin:{
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(10),
        height: 27,
        width: 805,
    },
    image: {
        position: 'relative',
        height: 200,
        width:300,

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

    buttonsss: {
        display: 'flex',
        justifyContent: 'flex-end',


    },
    buttonss: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(10),
        marginLeft: theme.spacing(58),
        marginRight: theme.spacing(4),
    },
    buttonss1: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(10),
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(10),
    },
    roots: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    but:{
        display:"block",
        marginLeft:theme.spacing(85),
    },
    but1:{
        display:"block",
        marginLeft:theme.spacing(25),
    },
    but2:{
        display:"block",
        marginLeft:theme.spacing(25),
    },
    blog:{
        marginRight:'200px',
    },
    shio:{
        marginLeft:theme.spacing(32),
    },
    shio1:{
        marginLeft:theme.spacing(0),
    },
}));
const theme = createMuiTheme({
    palette: {
        primarys: {
            // Purple and green play nicely together.
            main: purple[500],
        },

    },

});

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;



export default function SignInSide() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [opens, setOpens] = React.useState(false);
    const handleClickOpens = () => {
        setOpens(true);
    };
    const handleCloses = () => {
        setOpens(false);
    };
    const [openss, setOpenss] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpenss(true);
    };
    const handleClose2 = () => {
        setOpenss(false);
    };

    return (
        // <Container  component="main"  color="success">
        <div>
            <Navbar/>
            {/*<Container  component="main" maxWidth="full" color="default" >*/}


                <Grid container component="main" className={classes.root}  >
                    <CssBaseline />

                    <Grid item xs={false} sm={4} md={7} component={Paper} elevation={1} square >



                        <Grid item xs={false} sm={4} md={12} component={Paper} elevation={0} square>

                            <Paper elevation={0} />
                            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                                <Toolbar className={classes.toolbar}>
                                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                                        Shopping Cart
                                    </Typography>


                                </Toolbar>
                                <Grid item xs={false} sm={4} md={12} component={Paper} elevation={2} square>
                                    <Paper elevation={2} />
                                    <AccordionSummary>
                                    <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={(event) => event.stopPropagation()}
                                        onFocus={(event) => event.stopPropagation()}
                                        control={<Checkbox />}
                                        label="Select All"
                                    />
                                        <Grid item xs={false} sm={4} md={14} component={Paper} elevation={false} square>
                                        <Button className={classes.but}


color={"transparent"}
                                            startIcon={ <DeleteIcon /> }
                                            onClick={ handleClickOpen }
                                        >
                                        </Button>
                                        </Grid>

                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">{"Remove from cart"}</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    Are you sure you want to delete these item(s)?
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose} color="primary">
                                                    CANCEL
                                                </Button>
                                                <Button onClick={handleClose} color="primary" autoFocus>
                                                    REMOVE
                                                </Button>

                                            </DialogActions>
                                        </Dialog>
                                    </AccordionSummary>


                                </Grid>

                            </AppBar>

                        </Grid>
                        <Grid item xs={false} sm={4} md={12} component={Paper} elevation={0} square>

                            <Paper elevation={0} />
                            <Accordion>


                                    <Typography className={classes.heading}>Preffered Delivery option</Typography>

                            </Accordion>
                        </Grid>

                        <Grid item xs={false} sm={4} md={12} component={Paper} elevation={2} square>
                            <Paper elevation={2} />

                            <AccordionSummary>
                                <FormControlLabel
                                    aria-label="Acknowledge"
                                    onClick={(event) => event.stopPropagation()}
                                    onFocus={(event) => event.stopPropagation()}
                                    control={<Checkbox />}

                                />
                                <ThemeProvider theme={theme} textAlign="center">

                                    <Button className={classes.shio1} color={"transparent"} href="product">Product Name></Button>
                                </ThemeProvider>

                            </AccordionSummary>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                onClick={handleClickOpen1}
                            >
                                <Dialog onClose={handleClose2} aria-labelledby="customized-dialog-title" open={openss}>
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
                            </AccordionSummary>
                            <Grid container >
                                <Grid  item xs={12} lg={3} md={8}>

                                    <ButtonBase className={classes.image}>
                                        <img className={classes.image} alt="complex" src={image_cartPage_1} style={{ cursor: 'pointer' }} />
                                    </ButtonBase>
                                </Grid>
                                    <Grid item xs={12} lg={9} md={8}>
                                        <div className={classes.blog}>
                                    <Box component="div" my={1} whiteSpace="normal" bgcolor="background.paper">
                                        Necklace
                                    </Box>
                                    <Typography component="legend" variant="h6">
                                        <Box color="info.main" textAlign="center">$ 3000</Box>
                                    </Typography>
                                    <Box color="error.main">27%</Box>

                                    <Typography component="div">
                                        <Box textAlign="center" m={1}>
Qty1
                                        </Box>
                                    </Typography>
                                            <Button size="sm"
                                                    color={"transparent"}
                                                    startIcon={ <DeleteIcon /> }
                                                    onClick={ handleClickOpen }
                                            >
                                            </Button>

                                            <Button
                                                size="sm"
                                                    color={"transparent"}
                                                    startIcon={ <FavoriteBorderOutlinedIcon /> }

                                            >
                                            </Button>



                                            <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">{"Remove from cart"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Are you sure you want to delete these item(s)?
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} color="transparent">
                                            CANCEL
                                        </Button>
                                        <Button onClick={handleClose} color="facebook" autoFocus>
                                            REMOVE
                                        </Button>
                                    </DialogActions>
                                </Dialog>




                                        </div>
                                    </Grid>

                            </Grid>




                        </Grid>

                        <Grid item xs={false} sm={4} md={12} component={Paper} elevation={2} square>
                            <Paper elevation={2} />

                                <AccordionSummary>
                                    <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={(event) => event.stopPropagation()}
                                        onFocus={(event) => event.stopPropagation()}
                                        control={<Checkbox />}
                                        label="Product"
                                    />
                                </AccordionSummary>
                            <Grid container >
                                <Grid  item xs={12} lg={3} md={8}>

                                    <ButtonBase className={classes.image}>
                                        <img className={classes.image} alt="complex" src={image_cartPage_1} style={{ cursor: 'pointer' }} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} lg={9} md={8}>
                                    <div className={classes.blog}>
                                        <Box component="div" my={1} whiteSpace="normal" bgcolor="background.paper">
                                            Necklace
                                        </Box>
                                        <Typography component="legend" variant="h6">
                                            <Box color="info.main" textAlign="center">$ 3000</Box>
                                        </Typography>
                                        <Box color="error.main">27%</Box>

                                        <Typography component="div">
                                            <Box textAlign="center" m={1}>
Qty2
                                            </Box>
                                        </Typography>
                                        <Button size="sm"
                                                color={"transparent"}
                                                startIcon={ <DeleteIcon /> }
                                                onClick={ handleClickOpen }
                                        >
                                        </Button>

                                        <Button
                                            size="sm"
                                            color={"transparent"}
                                            startIcon={ <FavoriteBorderOutlinedIcon /> }

                                        >
                                        </Button>


                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">{"Remove from cart"}</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    Are you sure you want to delete these item(s)?
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose} color="transparent">
                                                    CANCEL
                                                </Button>
                                                <Button onClick={handleClose} color="primary" autoFocus>
                                                    REMOVE

                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>
                                </Grid>

                            </Grid>

                        </Grid>

                        <Grid item xs={false} sm={4} md={12} component={Paper} elevation={2} square>
                            <Paper elevation={2} />


                            <Grid container spacing={0}>
                                <Grid item>
                                    <div className={classes.buttonsss}>

                                        <Button  className={classes.buttonss1} variant="outlined" color="twitter" href="/product">
                                            Back to shop
                                        </Button>

                                        <Button

                                            variant="contained"
                                            color="twitter"

                                            className={classes.buttonss}

                                        >
                                            Update

                                        </Button>

                                        {/*<Alert onClose={() => {}}>This is a success alert — check it out!</Alert>*/}
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>


                    </Grid>

                    <br/><br/><br/>




                    <Grid item xs={false} sm={4} md={4} component={Paper} elevation={1} square>
                        <React.Fragment>
                            <Grid item xs={false} sm={4} md={12} component={Paper} elevation={0} square>

                                <Paper elevation={0} />
                                <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                                    <Toolbar className={classes.toolbar}>
                                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                                            Order Summary
                                        </Typography>

                                    </Toolbar>
                                </AppBar>

                            </Grid>



                                    <Grid item xs={false} sm={4} md={12} component={Paper} elevation={0} square>

                                        <Paper elevation={0} />
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"

                                            >
                                                <Typography className={classes.heading}>Enter Coupon</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <FormControl className={classes.margin}>
                                                    <InputLabel htmlFor="demo-customized-textbox"></InputLabel>

                                                    <TextField id="outlined-basic" label="Enter coupon code" variant="outlined" />
                                                </FormControl>
                                                <Button variant="contained" color="facebook" className={classes.buttons}>
                                                    Apply
                                                </Button>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Grid>

                            <Grid item xs={false} sm={4} md={12} component={Paper} elevation={0} square>
                                <Paper elevation={0} />

                                    <AccordionSummary

                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}>Shipping</Typography>
                                        <Grid item xs={false} sm={4} md={12}  elevation={0} square>

                                        <ThemeProvider theme={theme} textAlign="center">

                                            <Button className={classes.shio} color={"transparent"} onClick={handleClickOpens}>Colombo 07-fort</Button>


                                            <Dialog open={opens} onClose={handleCloses} aria-labelledby="form-dialog-title">

                                                <DialogContent>
                                                    <TextField
                                                        autoFocus
                                                        margin="dense"
                                                        id="name"
                                                        label="City"
                                                        type="city"
                                                        fullWidth
                                                    />
                                                    <TextField
                                                        autoFocus
                                                        margin="dense"
                                                        id="name"
                                                        label="Post code/ Zip"
                                                        type="zip"
                                                        fullWidth
                                                    />
                                                </DialogContent>
                                                <DialogActions>

                                                    <Button onClick={handleCloses} color="primary">
                                                       Update
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>

                                        </ThemeProvider>
                                        </Grid>

                                    </AccordionSummary>
                            </Grid>




                            <React.Fragment>
                                <List disablePadding>
                                    {products.map((product) => (
                                        <ListItem className={classes.listItem} key={product.name}>
                                            <ListItemText primary={product.name} secondary={product.desc} />
                                            <Typography variant="body2">{product.price}</Typography>
                                        </ListItem>
                                    ))}
                                    <ListItem className={classes.listItem}>
                                        <ListItemText primary="Total > " />
                                        <Box color="info.main">$100</Box>
                                    </ListItem>
                                </List>
                                <div className={classes.buttons}>


                                    <Button

                                        variant="contained"
                                        color="danger"

                                        className={classes.button}
                                    >
                                        CHECKOUT
                                    </Button>
                                </div>

                            </React.Fragment>

                        </React.Fragment>

                    </Grid>


                </Grid>
            {/*</Container>*/}
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
            </div>
        // </Container>
    );
}