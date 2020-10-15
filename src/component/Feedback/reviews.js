import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from "../Feedback/title";


const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Orders() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title><h2>Customer Reviews</h2></Title>

        </React.Fragment>

    );
}
