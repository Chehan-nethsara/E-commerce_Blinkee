import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import image_cartPage_1 from '../resources/images/image_cartPage_1.jpg';
import Link from '@material-ui/core/Link';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from "@material-ui/core/Paper";
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


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
const cards = [1, 2, 3, 4, 5, 6, 7, 8];




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
        margin: theme.spacing(false),
    },

    paper: {
        margin: theme.spacing(10, 10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    menuButton: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(5),
    },
    submit: {
        margin: theme.spacing(3, 2, 2),
    },

    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(20),
    },
    icon: {
        marginRight: theme.spacing(10),
    },


    cardGrid: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
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
    listItem: {
        padding: theme.spacing(1, 2),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),

    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',


    },
    button: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(10),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(20),
    },
}));


function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };



    return (

        <Grid item xs={10} sm={12} md={12} component={Paper} elevation={5} square >
            <CloseIcon  style={{ cursor: 'pointer' }} >   </CloseIcon>
            <div className={classes.root}>
            <CssBaseline />


                <Grid item xs={false} sm={4} md={6} component={Paper} elevation={2} square >


                        <Paper elevation={3} />

                            <Grid container spacing={0}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.image} alt="complex" src={image_cartPage_1} style={{ cursor: 'pointer' }} />
                                    </ButtonBase>
                                </Grid>

                                <Grid item xs={10} sm container>
                                    <Grid item xs container direction="column" spacing={4}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                1 New item(s) have added to your cart
                                            </Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography variant="body2" gutterBottom>
                                                RS 1000
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                ID: 1030114
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                Remove
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
                                <ListItem className={classes.listItem} key={product.name}>
                                    <ListItemText primary={product.name} secondary={product.desc} />
                                    <Typography variant="body2">{product.price}</Typography>
                                </ListItem>
                            ))}
                            <ListItem className={classes.listItem}>
                                <ListItemText primary="Total > " />
                                <Typography variant="subtitle1" className={classes.total}>
                                    $34.06
                                </Typography>
                            </ListItem>
                        </List>
                        <div className={classes.buttons}>

                                <Button  className={classes.button} variant="outlined" color="secondary" >
                                    Go To Cart
                                </Button>

                            <Button

                                variant="contained"
                                color="secondary"

                                className={classes.button}
                            >
CHECKOUT
                            </Button>
                        </div>

                    </React.Fragment>


                </Grid>

                <Grid item xs={false} sm={4} md={12} component={Paper} elevation={0} square>

                    <Paper elevation={0} />
                            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                                <Toolbar className={classes.toolbar}>
                                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                                        Just for you
                                    </Typography>

                                </Toolbar>
                            </AppBar>


                </Grid>














            </div>


        </Grid>



    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;









