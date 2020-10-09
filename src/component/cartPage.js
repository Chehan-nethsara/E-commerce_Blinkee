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


const images = [
    {
        url: '/static/images/grid-list/breakfast.jpg',
        title: 'Breakfast',
        width: '40%',
    },
    {
        url: '/static/images/grid-list/burgers.jpg',
        title: 'Burgers',
        width: '30%',
    },
    {
        url: '/static/images/grid-list/camera.jpg',
        title: 'Camera',
        width: '30%',
    },
];


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
        margin: theme.spacing(5),
    },
    paper: {
        margin: theme.spacing(0, 0),
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
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    avatar: {
        margin: theme.spacing(5),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(5),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(5),
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(0),
    },
    cardGrid: {
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(0),
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
        height: 100,
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
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
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

        <Grid item xs={false} sm={4} md={12} component={Paper} elevation={5} square >
            <CloseIcon  style={{ cursor: 'pointer' }} >   </CloseIcon>
            <div className={classes.root}>
            <CssBaseline />


                <Grid item xs={false} sm={4} md={6} component={Paper} elevation={5} square >

                    <div >
                        <Paper elevation={3} />
                        <Paper className={classes.paper}>
                            <Grid container spacing={0}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.image} alt="complex" src={image_cartPage_1} style={{ cursor: 'pointer' }} />
                                    </ButtonBase>
                                </Grid>

                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                Standard license
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Full resolution 1920x1080 • JPEG
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
                                    <Grid item>
                                        <Typography variant="subtitle1">$19.00</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                </Grid>



                <Grid item xs={12} sm={8} md={6} component={Paper} elevation={5} square>
                    <div className={classes.paper}>
                        <Paper elevation={3} />

                                <form className={classes.form} noValidate>
                                    <Typography variant="body1" color="textSecondary" component="p">
                                       My Shopping Cart   (1 Item)
                                    </Typography>
                                </form>

                    </div>
                </Grid>



                <Grid item xs={10} sm={6} md={12} component={Paper} elevation={5} square >
                    <div className={classes.paper}>
                        <Paper elevation={3} />
                        <main className={classes.content}>
                            <div className={classes.toolbar} />
                            <form className={classes.form} noValidate>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    My Shopping Cart   (1 Item)
                                </Typography>
                            </form>
                            {images.map((image) => (
                                <ButtonBase
                                    focusRipple
                                    key={image.title}
                                    className={classes.image}
                                    focusVisibleClassName={classes.focusVisible}
                                    style={{
                                        width: image.width,
                                    }}
                                >
          <span
              className={classes.imageSrc}
              style={{
                  backgroundImage: `url(${image.url})`,
              }}
          />
                                    <span className={classes.imageBackdrop} />
                                    <span className={classes.imageButton}>
            <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
            >
              {image.title}
                <span className={classes.imageMarked} />
            </Typography>
          </span>
                                </ButtonBase>
                            ))}




                        </main>
                    </div>



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









