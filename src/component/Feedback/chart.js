import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Title from '../Feedback/title';
import Button from "../Button/button";
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FeedbackApply from './feedbackApply'


const useStyles = makeStyles({
    btnChart:{
        marginBottom: 20,
    },

});

export default function Chart() {
    const theme = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Title><h1>Customer Feedback</h1></Title>
            <p>
                We were wondering if you could spare a few minutes to let us know
                what we are getting right and what we can improve. If you are game just
                click on the button below "Get Start"
            </p>
            <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                auctor fringilla...
            </p>
            <div>
                <Button className={theme.btnChart} color="rose" onClick={handleClickOpen}>
                    Get Start
                </Button>
                <Dialog open={open} onClose={handleClose} >
                    <DialogActions>
                        <Button onClick={handleClose} color="transparent">
                            <CloseIcon/>
                        </Button>
                    </DialogActions>
                    <DialogContent>
                        <FeedbackApply/>
                    </DialogContent>
                </Dialog>
            </div>
        </React.Fragment>
    );
}