import React from 'react';
import PropTypes from 'prop-types';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';

import image_cart_1 from '../resources/images/image_cart_1.jpg';
import image_cart_2 from '../resources/images/image_cart_2.jpg';
import image_cart_4 from '../resources/images/image_cart_4.jpg';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Navbar from "./navbar";
import GridItem from "@material-ui/core/Grid";
import Slider from "react-slick";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

import Select from '@material-ui/core/Select';
import Pagination from '@material-ui/lab/Pagination';




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

const drawerWidth = 240;
const cards = [1, 2, 3, 4, 5, 6, 7, 8];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(0),
    },
    icon: {
        marginRight: theme.spacing(0),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
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

    const [age, setAge] = React.useState('');

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const [view, setView] = React.useState('list');

    const handleChangeView = (event, nextView) => {
        setView(nextView);
    };

    return (


        <Container  component="main" maxWidth="full">
            <Navbar/>
            <Container  component="main" maxWidth="full">

                    <Grid container >
                        <GridItem xs={1} sm={10} xs={25} >
                            <Card>
                                <Slider {...settings}>
                                    <div>
                                        <img
                                            src={image_cart_1}
                                            alt="First slide"
                                            className="slick-image"
                                        />
                                        <div className="slick-caption">
                                            {/*<h4>*/}
                                            {/*    Yellowstone*/}
                                            {/*    National Park, United States*/}
                                            {/*</h4>*/}
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={image_cart_2}
                                            alt="Second slide"
                                            className="slick-image"
                                        />
                                        <div className="slick-caption">
                                            {/*<h4>*/}
                                            {/*    Somewhere Beyond,*/}
                                            {/*    United States*/}
                                            {/*</h4>*/}
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={image_cart_4}
                                            alt="Third slide"
                                            className="slick-image"
                                        />
                                        <div className="slick-caption">
                                            {/*<h4>*/}
                                            {/*    Yellowstone*/}
                                            {/*    National Park, United States*/}
                                            {/*</h4>*/}
                                        </div>
                                    </div>
                                </Slider>
                            </Card>
                        </GridItem>
                    </Grid>


            <Card className={classes.root}>
<div>
    <Grid container >
        <GridItem xs={1} sm={10} xs={20} >
    <Typography component="h1" variant="h5">
        Sign in
    </Typography>
        </GridItem>
    </Grid>

</div>

                <GridItem xs={1} sm={10} xs={20} >
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                </GridItem>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <GridItem xs={1} sm={10} xs={20} >
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                </GridItem>
                    <div>

                        <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChangeView}>
                    <ToggleButton value="list" aria-label="list">
                        <ViewListIcon />
                    </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    <div>
                        <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChangeView}>
                    <ToggleButton value="module" aria-label="module">
                        <ViewModuleIcon />
                    </ToggleButton>
                        </ToggleButtonGroup>
                    </div>

            </Card>

                <Grid container >

                </Grid>


            <div className={classes.root}>


                <div className={classes.heroContent}>
                <Container maxWidth="sm">

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                        </RadioGroup>
                    </FormControl>

                </Container>

                <div className={classes.heroContent}>
                    <Container maxWidth="sm">

                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                            </RadioGroup>
                        </FormControl>

                    </Container>
                </div>

            </div>




            <main className={classes.content}>
                <div className={classes.toolbar} />

                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={5}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={10} sm={5} md={3}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Product Name
                                        </Typography>
                                        <Typography>
                                            RS 500/-
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <div className={classes.heroContent}>
                    <Container>
                    <div className={classes.root}>

                        <Pagination count={10} variant="outlined" shape="rounded" />
                    </div>
                </Container>
                    </div>
                </Container>

            </main>
        </div>
            </Container>
        </Container>
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