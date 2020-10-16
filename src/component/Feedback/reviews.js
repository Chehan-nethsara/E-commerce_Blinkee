import { makeStyles } from '@material-ui/core/styles';
import Title from "../Feedback/title";
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from "../Button/button";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
        },
        icon: {
            marginRight: theme.spacing(2),
        },
        heroContent: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(8, 0, 6),
        },
        heroButtons: {
            marginTop: theme.spacing(4),
        },
        cardGrid: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(8),
        },
        card: {
        backgroundColor: "#BFFFE7",
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
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(6),
        },
    }));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Orders() {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);

    return (
        <React.Fragment>
            <Title> <h1> Recent Reviews </h1> </Title>
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <div><AccountCircleIcon/></div>
                                           Customer Name
                                        </Typography>
                                        <Typography>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                        <br/>
                                        <Rating name="read-only" size="medium" value={value} readOnly />
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="danger">
                                           <ThumbDownIcon/>
                                        </Button>
                                        <Button size="small" color="facebook">
                                            <ThumbUpIcon/>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}

