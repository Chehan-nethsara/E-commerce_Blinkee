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
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';

import Divider from '@material-ui/core/Divider';




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
const cards = [1];
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
        margin: theme.spacing(2),
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
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
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
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },

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
            <Container  component="main" maxWidth="full">


                <Grid container component="main" className={classes.root}>
                    <CssBaseline />

                    <Grid item xs={false} sm={4} md={7} component={Paper} elevation={5} square >

                        <div className={classes.paper}>
                            <Paper elevation={3} />

                            <Card >
                                <CardContent>
                            <form className={classes.form} noValidate>
                                <Typography variant="body2" color="textSecondary" component="p">
                                   Shopping Cart
                                </Typography>
                            </form>
                                </CardContent>
                            </Card>

                        </div>
<div>
                                <Card >
                                    <CardContent>
                                <form className={classes.form} noValidate>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </form>
                                    </CardContent>
                                </Card>

</div>
                            <div className={classes.paper}>
                                <Paper elevation={3} />
                                <Card >
                                    <CardContent>
                                        <form className={classes.form} noValidate>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
                                            </Typography>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>


                       
                    </Grid>





                    <Grid item xs={12} sm={8} md={4} component={Paper} elevation={5} square>

                        <div className={classes.paper}>
                            <Paper elevation={3} />

                            <Card >
                                <CardContent>
                                    <form className={classes.form} noValidate>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Shopping Cart
                                        </Typography>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                            <div className={classes.root}>
                            <Accordion defaultExpanded>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1c-content"
                                    id="panel1c-header"
                                >
                                    <div className={classes.column}>
                                        <Typography className={classes.heading}>Location</Typography>
                                    </div>
                                    <div className={classes.column}>
                                        <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails className={classes.details}>
                                    <div className={classes.column} />
                                    <div className={classes.column}>
                                        <Chip label="Barbados" onDelete={() => {}} />
                                    </div>
                                    <div className={clsx(classes.column, classes.helper)}>
                                        <Typography variant="caption">
                                            Select your destination of choice
                                            <br />
                                            <a href="#secondary-heading-and-columns" className={classes.link}>
                                                Learn more
                                            </a>
                                        </Typography>
                                    </div>
                                </AccordionDetails>
                                <Divider />
                                <AccordionActions>
                                    <Button size="small">Cancel</Button>
                                    <Button size="small" color="primary">
                                        Save
                                    </Button>
                                </AccordionActions>
                            </Accordion>
                        </div>

                    </Grid>


                </Grid>
            </Container>
        </Container>
    );
}