import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Navbar from "./navbar";
import TextField from '@material-ui/core/TextField';
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";
import contact01 from '../resources/images/contact01.jpg'

const useStyles = makeStyles((theme) => ({
    root1: {
        flexGrow: 1,
    },
    root2: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 'left',

        }},
    paper: {
        padding: theme.spacing(15),
        margin: 'auto',
        maxWidth: 2000,
    },
    image: {
        width: 400,
        height: 400,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div>
            <Navbar/>
            <div className={classes.root1}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <h2
                                style={{color: "blue"}}>
                                Apple 7 32GB
                            </h2>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={contact01} />
                            </ButtonBase>
                            <h2
                                style={{color: "red"}}>
                                $ 1299.00
                            </h2>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item>
                                    <Typography variant="subtitle1"><h1>$12000.00</h1></Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography  gutterBottom variant="subtitle1">
                                        The most touted and interesting new feature in this year’s phones is, first and foremost,
                                        the new triple-camera system that the 11 Pro and the 11 Pro Max will be sporting: a 12-megapixel, 26mm f/1.8 wide-angle camera,
                                        a 12-megapixel 52mm f/2.0 telephoto camera, and a 12-megapixel, 13mm f/2.4 ultra-wide camera. Located in a square on the back of the phone,
                                        these cameras will, according to Apple, present all sorts of advantages to those who want precise, high-end photography.
                                        There are also several new apps coming out that will use the triple-camera system,
                                        such as the Deep Fusion feature that will analyze nine photos to create an optimal final work
                                    </Typography>
                                    <form className={classes.root2} noValidate autoComplete="on">
                                        <div>
                                            <TextField
                                                id="outlined-number"
                                                label="Number"
                                                type="number"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                variant="outlined"
                                            />
                                        </div>
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    );
}