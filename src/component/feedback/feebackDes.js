import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../feedback/title';
import Button from "@material-ui/core/Button";
import StarRating from 'react-star-rating';
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
    feedbackBtn:{
      marginBottom: 20,
    },
});

export default function Deposits() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title><h1>Ratings</h1></Title>
            <Typography component="p" variant="h4">
                3.5
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                Average Rating
            </Typography>
            <Rating name="size-large" defaultValue={3.5} size="large" precision={0.5} readOnly/>

            <div>
                <br/>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.feedbackBtn}
                >
                    Get Start
                </Button>
            </div>
        </React.Fragment>
    );
}