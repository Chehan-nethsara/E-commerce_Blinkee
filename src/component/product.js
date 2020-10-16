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
import image_productbg_01 from '../resources/images/image_productbg_01.jpg';
import image_productBg_2 from '../resources/images/image_productBg_2.jpg';
import image_productBg_3 from '../resources/images/image_productBg_3.jpg';
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
import Footer from './Footer/footer';
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import image_cart_6 from '../resources/images/image_cart_6.jpg';
import image_pr_1 from "../resources/images/image_cartPage_1.jpg";
import image_cartPage_1 from "../resources/images/image_pr_1.jpg";
import image_pr_2 from "../resources/images/image_pr_2.jpg";
import image_pr_3 from "../resources/images/image_pr_3.jpg";
import image_pr_4 from "../resources/images/image_pr_4.jpg";
import image_pr_5 from "../resources/images/image_pr_5.jpg";
import image_pr_6 from "../resources/images/image_pr_6.jpg";
import image_pr_7 from "../resources/images/image_pr_7.jpg";
import image_pr_8 from "../resources/images/image_pr_8.jpg";
import image_pr_9 from "../resources/images/image_pr_9.jpg";
import image_pr_10 from "../resources/images/image_pr_10.jpg";

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
const cards = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12];

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
        padding: theme.spacing(8, 0, 1),

    },
    heroButtons: {
        marginTop: theme.spacing(3),
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
        paddingTop: '8.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    formControl: {
        marginRight: theme.spacing(10),
        marginBottom: theme.spacing(2),
        minWidth: 100,
        minHeight:10,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    ima:{
        width:100,
        height: 70,

},
    image:{
        width:200,
        height: 70,
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(5),
    },

    roots: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icons: {
        borderRadius: '50%',
        width: 10,
        height: 10,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 5,
            height: 5,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
    short:{
        marginLeft: theme.spacing(115),
    },
    root1:{
        marginLeft: theme.spacing(4),
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

    function StyledRadio(props) {
        const classes = useStyles();
    return (
        <Radio
            className={classes.roots}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icons, classes.checkedIcon)} />}
            icon={<span className={classes.icons} />}
            {...props}
        />
    );
}
    return (


        <Container  component="main" maxWidth="full">
            <Navbar/>


                    <Grid container >
                        <GridItem xs={12} sm={10}  md={12} >

                                <Slider {...settings} className={classes.images} >
                                    <div>
                                        <img className={classes.imag}
                                            src={image_productbg_01}
                                            alt="First slide"

                                        />
                                        <div className="slick-caption">
                                            {/*<h4>*/}
                                            {/*    Yellowstone*/}
                                            {/*    National Park, United States*/}
                                            {/*</h4>*/}
                                        </div>
                                    </div>
                                    <div>
                                        <img className={classes.imag}
                                            src={image_productBg_2}
                                            alt="Second slide"

                                        />
                                        <div className="slick-caption">
                                            {/*<h4>*/}
                                            {/*    Somewhere Beyond,*/}
                                            {/*    United States*/}
                                            {/*</h4>*/}
                                        </div>
                                    </div>
                                    <div>
                                        <img className={classes.imag}
                                            src={image_productBg_3}
                                            alt="Third slide"

                                        />
                                        <div className="slick-caption">
                                            {/*<h4>*/}
                                            {/*    Yellowstone*/}
                                            {/*    National Park, United States*/}
                                            {/*</h4>*/}
                                        </div>
                                    </div>
                                </Slider>

                        </GridItem>
                    </Grid>
<br/><br/>

            <Card className={classes.root}>
<div>
    <Grid container className={classes.root1} >
        <GridItem xs={1} sm={10} xs={5} >
    <Typography  variant="h8">
        Catergorie Name
    </Typography>
        </GridItem>
    </Grid>

</div>

                <GridItem className={classes.root1} xs={1} sm={10} xs={5} >
                    <Typography  variant="h8">
                        Product price in sriLanka
                    </Typography>
                </GridItem>
                <GridItem xs={1} sm={10} xs={20} className={classes.short} >
                    <Typography  variant="h8">
                        Short By:
                    </Typography>
                </GridItem>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Best Match</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChange}
                        label="Best Match"
                    >
                        <MenuItem value="">

                        </MenuItem>
                        <MenuItem value={10}>Price Low to High</MenuItem>
                        <MenuItem value={20}>Price High to Low</MenuItem>

                    </Select>
                </FormControl>


                    <Typography  variant="h9">
                        view :
                    </Typography>

                    <div>

                        <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChangeView}>
                    <ToggleButton value="list" aria-label="list" href="/product">
                        <ViewListIcon />
                    </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    <div>
                        <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChangeView}>
                    <ToggleButton value="module" aria-label="module" href="/cartPage">
                        <ViewModuleIcon />
                    </ToggleButton>
                        </ToggleButtonGroup>
                    </div>

            </Card>

                <Grid container >

                </Grid>


            <div className={classes.root}>


                <div className={classes.heroContent}>
                <Container maxWidth="s">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Brand</FormLabel>
                        <RadioGroup  name="customized-radios">
                            <FormControlLabel value="female"  control={<StyledRadio />} label="ABC" />
                            <FormControlLabel value="male" control={<StyledRadio />} label="MAC" />
                            <FormControlLabel value="other" control={<StyledRadio />} label="CC" />
                            <FormControlLabel value="male" control={<StyledRadio />} label="MA" />
                            <FormControlLabel value="other" control={<StyledRadio />} label="CA" />

                        </RadioGroup>
                    </FormControl>

                </Container>

                    <div className={classes.heroContent}>
                    <Container maxWidth="sm">

                        <FormControl component="fieldset">
                            <FormLabel component="legend">Service</FormLabel>
                            <RadioGroup  name="customized-radios">
                                <FormControlLabel value="female" control={<StyledRadio />} label="Cash on delivary" />
                                <FormControlLabel value="male" control={<StyledRadio />} label="Free Shipping" />


                            </RadioGroup>
                        </FormControl>
                    </Container>

                    </div>

                        <div className={classes.heroContent}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Location</FormLabel>
                                <RadioGroup name="customized-radios">
                                    <FormControlLabel value="female" control={<StyledRadio />} label="Sri Lanaka" />
                                    <FormControlLabel value="male" control={<StyledRadio />} label="Cina" />


                                </RadioGroup>
                            </FormControl>

                        </div>



                    <div className={classes.heroContent}>
                            <FormLabel component="legend">Rating</FormLabel>

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

                    </div>

            </div>




            <main className={classes.content}>
                <div className={classes.toolbar} />

                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={5}>
                        {[0].map((card) => (

                            <Grid item key={card} xs={10} sm={5} md={3}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}

                                        title="Image title"
                                    />
                                    <img
                                        style={{height: "100px", width: "100%"}}

                                        src={  image_cartPage_1}

                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h6" >
                                            necklace
                                        </Typography>
                                        <Typography>
                                            $500/-
                                        </Typography>
                                    </CardContent>

                                    <CardActions>
                                        <Button size="small" color="primary" href="/productPage">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Discount
                                        </Button>
                                    </CardActions>
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

                                        src={ image_cart_6}

                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Product
                                        </Typography>
                                        <Typography>
                                            RS 500/-
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href="/productPage">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Discount
                                        </Button>
                                    </CardActions>
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

                                        src={ image_pr_1}

                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Product
                                        </Typography>
                                        <Typography>
                                            RS 500/-
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href="/productPage">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Discount
                                        </Button>
                                    </CardActions>
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

                                        src={ image_pr_2}

                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Product
                                        </Typography>
                                        <Typography>
                                            RS 500/-
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href="/productPage">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Discount
                                        </Button>
                                    </CardActions>
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

                                        src={ image_pr_3}

                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Product
                                        </Typography>
                                        <Typography>
                                            RS 500/-
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href="/productPage">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Discount
                                        </Button>
                                    </CardActions>
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

                                        src={ image_pr_4}

                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Product
                                        </Typography>
                                        <Typography>
                                            RS 500/-
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href="/productPage">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Discount
                                        </Button>
                                    </CardActions>
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

                                        src={ image_pr_5}

                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Product
                                        </Typography>
                                        <Typography>
                                            RS 500/-
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href="/productPage">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Discount
                                        </Button>
                                    </CardActions>
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

                                        src={ image_pr_6}

                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Product
                                        </Typography>
                                        <Typography>
                                            RS 500/-
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href="/productPage">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Discount
                                        </Button>
                                    </CardActions>
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
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Product
                                        </Typography>
                                        <Typography>
                                            RS 500/-
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href="/productPage">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Discount
                                        </Button>
                                    </CardActions>
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

                                        src={ image_pr_8}

                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Product
                                        </Typography>
                                        <Typography>
                                            RS 500/-
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href="/productPage">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Discount
                                        </Button>
                                    </CardActions>
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
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Product
                                        </Typography>
                                        <Typography>
                                            RS 500/-
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href="/productPage">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Discount
                                        </Button>
                                    </CardActions>
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
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Product
                                        </Typography>
                                        <Typography>
                                            RS 500/-
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href="/productPage">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Discount
                                        </Button>
                                    </CardActions>
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

            <Footer/>
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