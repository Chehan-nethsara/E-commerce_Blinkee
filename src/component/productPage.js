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

    paper: {
        margin: theme.spacing(8, 4),
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
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(7),

    },
    buttons: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(10),
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(7),
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
const messagee = `This product has no reviews. Let other know what do you think and be the first to write a review `;
const messages = `Quections about the product `;
const messagess = `There are no quection yet. ASk the seller now and their answer will show here. `;
export default function SignInSide() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
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
                    <div style={{ width: 200 }}>
                        <Box component="div" my={2} whiteSpace="nowrap" bgcolor="background.paper">
                            White Space Nowrap. White Space Nowrap.
                        </Box>
                        <Box component="div" my={2} whiteSpace="normal" bgcolor="background.paper">
                            White Space Normal. White Space Normal.
                        </Box>
                        <Box color="info.main">info.main</Box>
                        <Box color="error.main">error.main</Box>

                        <Typography component="div">
                            <Box textAlign="justify" m={1}>
                                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
                                Donec sed odio operae, eu vulputate felis rhoncus.
                            </Box>
                            <Box textAlign="left" m={1}>
                                Left aligned text.
                            </Box>
                            <Box textAlign="center" m={1}>
                                Center aligned text.
                            </Box>
                            <Box textAlign="right" m={1}>
                                Right aligned text.
                            </Box>
                        </Typography>
                    </div>
                </Grid>
            </Grid>



                <Grid item xs={12} sm={8} md={4} component={Paper} elevation={5} square>
                <div className={classes.paper}>
                    <Paper elevation={3} />



                    <Typography component="div">
                        <Box fontStyle="normal" m={1}>
                            Normal font style.
                        </Box>
                        <Box fontStyle="italic" m={1}>
                            Italic font Style.
                        </Box>
                        <Box fontStyle="oblique" m={1}>
                            Oblique font style.
                        </Box>
                    </Typography>


                    <ThemeProvider theme={theme}>
                        <Button color="primary">Primary</Button>
                        <Button color="secondary">Secondary</Button>
                    </ThemeProvider>

                </div>

            </Grid>


            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Paper elevation={3} />
                    <Grid container wrap="nowrap" spacing={10}>
                        <Grid item>

                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography noWrap>{message}</Typography>
                            <Typography noWrap>{messagee}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paper}>
                    <Paper elevation={3} />
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>

                        </Grid>
                        <Grid item xs>
                            <Typography noWrap>{messages}</Typography>
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
        </Container>
    );
}