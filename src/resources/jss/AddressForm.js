import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { useForm, Form } from '../jss/useForm';

const initialFValues = {
    id: 0,
    firstName: '',
    lastName: '',
    Email: '',
    Phone: '',
    Address: '',
    City: '',
    state: '',
    zip: '',
    country: '',

}

export default function AddressForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('firstName' in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required."
        if ('lastName' in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "This field is required."
        if ('Email' in fieldValues)
            temp.Email = (/$^|.+@.+..+/).test(fieldValues.Email) ? "" : "Email is not valid."
        if ('Phone' in fieldValues)
            temp.Phone = fieldValues.Phone.length > 9 ? "" : "Minimum 10 numbers required."
        if ('address' in fieldValues)
            temp.address = fieldValues.address ? "" : "This field is required."
        if ('City' in fieldValues)
            temp.City = fieldValues.City ? "" : "This field is required."
        if ('state' in fieldValues)
            temp.state = fieldValues.state ? "" : "This field is required."
        if ('zip' in fieldValues)
            temp.zip = fieldValues.zip ? "" : "This field is required."
        if ('country' in fieldValues)
            temp.country = fieldValues.country ? "" : "This field is required."

        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){

            resetForm()
        }
    }


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        value={values.firstName}
                        onChange={handleInputChange}
                        error={errors.firstName}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        value={values.lastName}
                        onChange={handleInputChange}
                        error={errors.lastName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="Email"
                        name="Email"
                        label="Email"
                        fullWidth
                        autoComplete="Your email address"
                        value={values.Email}
                        onChange={handleInputChange}
                        error={errors.Email}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="Phone"
                        name="Phone"
                        label="Phone"
                        fullWidth
                        autoComplete="Your contact number"
                        value={values.Phone}
                        onChange={handleInputChange}
                        error={errors.Phone}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address"
                        name="address"
                        label="Address"
                        fullWidth
                        autoComplete="shipping address"
                        value={values.address}
                        onChange={handleInputChange}
                        error={errors.address}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="City"
                        name="City"
                        label="City"
                        fullWidth
                        autoComplete="Your city"
                        value={values.City}
                        onChange={handleInputChange}
                        error={errors.City}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="State/Province/Region" fullWidth required
                               value={values.state}
                               onChange={handleInputChange}
                               error={errors.state}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                        value={values.zip}
                        onChange={handleInputChange}
                        error={errors.zip}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        value={values.country}
                        onChange={handleInputChange}
                        error={errors.country}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                    />
                </Grid>
            </Grid>
            </Form>
        </React.Fragment>
    );
}