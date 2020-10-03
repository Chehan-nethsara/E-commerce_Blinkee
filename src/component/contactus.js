import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Navbar from "./navbar";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '70ch',


        },
        button: {
            margin: theme.spacing(1),
        },
    },
}));
const gender = [
    {
        value: 'Seller',
        label: 'Seller',
    },
    {
        value: 'Customer',
        label: 'Customer',
    },
];
export default function FormPropsTextFields() {
    const classes = useStyles();
    const [value, setValue] = React.useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
        <Navbar/>

            <h1>contact us</h1>

        <form className={classes.root} noValidate autoComplete="on">
            <div>


                <TextField
                id="outlined-name-input"
                label="Name"
                type="text"
                autoComplete="current-name"
                variant="outlined"
            />
            </div>
            <div>
            <TextField
                id="outlined-email-input"
                label="E-mail"
                type="email"
                autoComplete="current-email"
                variant="outlined"
            />
            </div>
            <div>
                <TextField
                    id="filled-select-currency"
                    select
                    label="Select"
                    helperText="Please select "
                    variant="filled"
                >
                    {gender.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div>
                <TextField
                    id="filled-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value={value}
                    onChange={handleChange}
                    variant="filled"
                    label="Message"
                    type="text"
                    autoComplete="current-message"
                    variant="outlined"
                />
            </div>
            <div>
                <div className={classes.root}>
                    <Button
                        variant="contained"
                        color="A400"
                        className={classes.button}
                        endIcon={<Icon></Icon>}
                    >
                        send
                    </Button>
                </div>
            </div>
        </form>
        </div>
    );
}