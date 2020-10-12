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
import { makeStyles , withStyles} from '@material-ui/core/styles';
import Navbar from './navbar';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';

import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import MoreVertIcon from '@material-ui/icons/MoreVert';
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
    { name: 'My shopping cart ', desc: '', price: '(1 item)' },
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
        marginBottom: theme.spacing(10),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(10),
    },
    buttons: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(10),
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(7),
    },
    margin:{
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(10),
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(7),

    }
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function SignInSide() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container  component="main" maxWidth="full">
            <Navbar/>
            <Container  component="main" maxWidth="full" color="default" >


                <Grid container component="main" className={classes.root} >
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
                                <Grid item xs={false} sm={4} md={12} component={Paper} elevation={0} square>

                                    <Paper elevation={0} />
                                <Accordion>

                                    <AccordionSummary
                                        expandIcon={<DeleteIcon/>}
                                        aria-label="Expand"
                                        aria-controls="additional-actions1-content"
                                        id="additional-actions1-header"
                                    >
                                        <FormControlLabel
                                            aria-label="Acknowledge"
                                            onClick={(event) => event.stopPropagation()}
                                            onFocus={(event) => event.stopPropagation()}
                                            control={<Checkbox />}
                                            label="Select All"
                                        />
                                    </AccordionSummary>

                                </Accordion>
                                </Grid>
                            </AppBar>

                        </Grid>
                        <Grid item xs={false} sm={4} md={12} component={Paper} elevation={0} square>

                            <Paper elevation={0} />
                        </Grid>

                        <Grid item xs={false} sm={4} md={12} component={Paper} elevation={0} square>
                            <Paper elevation={0} />
                        <Accordion>
                            <AccordionSummary>
                                <FormControlLabel
                                    aria-label="Acknowledge"
                                    onClick={(event) => event.stopPropagation()}
                                    onFocus={(event) => event.stopPropagation()}
                                    control={<Checkbox />}
                                    label="Product"
                                />
                            </AccordionSummary>
                        </Accordion>
                        </Grid>

                        <Grid item xs={false} sm={4} md={12} component={Paper} elevation={0} square>
                            <Paper elevation={0} />
                            <Accordion>
                                <AccordionSummary>
                                    <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={(event) => event.stopPropagation()}
                                        onFocus={(event) => event.stopPropagation()}
                                        control={<Checkbox />}
                                        label="Product"
                                    />
                                </AccordionSummary>
                            </Accordion>
                        </Grid>


                    </Grid>





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
                                                <Button variant="contained" color="primary" className={classes.buttons}>
                                                    Apply
                                                </Button>
                                            </AccordionDetails>
                                        </Accordion>
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
                                        color="secondary"

                                        className={classes.button}
                                    >
                                        CHECKOUT
                                    </Button>
                                </div>

                            </React.Fragment>

                        </React.Fragment>

                    </Grid>


                </Grid>
            </Container>
        </Container>
    );
}