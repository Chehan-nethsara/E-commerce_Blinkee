import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Feedback/title';
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating"
// import RatingImg from '../../resources/images/img_rating.png'

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
        marginBottom:"55px"
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
            {/*<img src={RatingImg}/>*/}
            <Rating name="size-large" defaultValue={3.5} size="large" precision={0.5} readOnly/>

            <div>
                <br/>
                {/*<Button*/}
                {/*    type="submit"*/}
                {/*    variant="contained"*/}
                {/*    color="primary"*/}
                {/*    className={classes.feedbackBtn}*/}
                {/*>*/}
                {/*    Get Start*/}
                {/*</Button>*/}
            </div>
        </React.Fragment>
    );
}