import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import "../resources/style/checkout.css"
import Navbar from "./navbar";

import {Card} from "@material-ui/core";


const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: null,
            email: null,
            password: null,
            lastName: null,
            companyName: null,
            countryName: null,
            streetAdd: null,
            cityName: null,
            phoneNum: null,
            cardNum: null,
            expDate: null,
            cardCode: null,
            errors: {
                fullName: '',
                email: '',
                password: '',
                lastName: '',
                companyName: '',
                countryName: '',
                streetAdd: '',
                cityName: '',
                phoneNum: '',
                cardNum: '',
                expDate: '',
                cardCode: '',
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'fullName':
                errors.fullName =
                    value.length < 3
                        ? 'First Name must be at least 3 characters long!'
                        : '';
                break;
            case 'lastName':
                errors.lastName =
                    value.length < 5
                        ? 'Last Name must be at least 5 characters long!'
                        : '';
                break;
            case 'companyName':
                errors.companyName =
                    value.length < 3
                        ? 'Company Name must be entered!'
                        : '';
                break;
            case 'countryName':
                errors.countryName =
                    value.length < 2
                        ? 'Country Name must be must be entered!'
                        : '';
                break;
            case 'streetAdd':
                errors.streetAdd =
                    value.length < 3
                        ? 'Street Address must be must be entered!'
                        : '';
                break;
            case 'cityName':
                errors.cityName =
                    value.length < 4
                        ? 'City Name must be must be entered!'
                        : '';
                break;
            case 'phoneNum':
                errors.phoneNum =
                    value.length < 9
                        ? 'Phone number must be must be entered!'
                        : '';
                break;
            case 'cardNum':
                errors.cardNum =
                    value.length < 5
                        ? 'Card number must be must be entered!'
                        : '';
                break;
            case 'expDate':
                errors.expDate =
                    value.length < 4
                        ? 'Card expiry date must be must be entered!'
                        : '';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be at least 8 characters long!'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'cardCode':
                errors.cardCode =
                    value.length < 5
                        ? 'Card code must be must be entered!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({errors, [name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
    }


    render() {
        const {errors} = this.state;
        return (

            <div className="header">
                <Navbar/>
                <div className="content">
                    <br/>

                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="container2">
                            <h2>Blinkee Billing Details</h2>


                            <div className='fullName'>
                                <label htmlFor="fullName">First Name:*</label>
                                <input type='text' id= 'fname' name='fullName'  onChange={this.handleChange} noValidate /> <br/>
                                {errors.fullName.length > 0 &&
                                <span className='error'>{errors.fullName}</span>}
                            </div>
                            <div className='fullName'>
                                <label htmlFor="lastName">Last Name:*</label>
                                <input type='text' id= 'lname' name='lastName' onChange={this.handleChange} noValidate /> <br/>
                                {errors.lastName.length > 0 &&
                                <span className='error'>{errors.lastName}</span>}
                            </div>
                            <div className='fullName'>
                                <label htmlFor="companyName">Company Name:*</label>
                                <input type='text' id= 'cname' name='companyName' onChange={this.handleChange} noValidate /> <br/>
                                {errors.companyName.length > 0 &&
                                <span className='error'>{errors.companyName}</span>}
                            </div>
                            <div className='fullName'>
                                <label htmlFor="countryName">Country:*</label>
                                <input type='text' id= 'count' name='countryName' onChange={this.handleChange} noValidate /> <br/>
                                {errors.countryName.length > 0 &&
                                <span className='error'>{errors.countryName}</span>}
                            </div>
                            <div className='fullName'>
                                <label htmlFor="streetAdd">Street Address:*</label>
                                <input type='text' id= 'street' name='streetAdd' onChange={this.handleChange} noValidate /> <br/>
                                {errors.streetAdd.length > 0 &&
                                <span className='error'>{errors.streetAdd}</span>}
                            </div>
                            <div className='fullName'>
                                <label htmlFor="cityName">Town/City:*</label>
                                <input type='text' id= 'town' name='cityName' onChange={this.handleChange} noValidate /> <br/>
                                {errors.cityName.length > 0 &&
                                <span className='error'>{errors.cityName}</span>}
                            </div>
                            <div className='fullName'>
                                <label htmlFor="phoneNum">Phone:*</label>
                                <input type='number' id= 'phone' name='phoneNum' onChange={this.handleChange} noValidate /> <br/>
                                {errors.phoneNum.length > 0 &&
                                <span className='error'>{errors.phoneNum}</span>}
                            </div>

                            <div className='fullName'>
                                <label htmlFor="email">Email:*</label>
                                <input type='email' id='Email' name='email' onChange={this.handleChange} noValidate /> <br/>
                                {errors.email.length > 0 &&
                                <span className='error'>{errors.email}</span>}
                            </div>
                            <div className='fullName'>
                                <label htmlFor="password">Password:*</label>
                                <input type='password' id='pasw' name='password' onChange={this.handleChange} noValidate /> <br/>
                                {errors.password.length > 0 &&
                                <span className='error'>{errors.password}</span>}
                            </div>

                            <div className="detail">
                                <p>If you don't have account?<a href="#" id="acc">Create an Account</a></p>
                                <div className="required">
                                    <h3>* Indicates required feelds.</h3>
                                </div>
                            </div>
                        </div>


                        <div className="container3">
                            <h2>Credit Card Details</h2>
                            <h4>Pay with your card*</h4>


                            <div className='fullName'>
                                <label htmlFor="cardNum">Card Number:*</label>
                                <input type='text' id= 'card' name='cardNum' onChange={this.handleChange} noValidate /> <br/>
                                {errors.cardNum.length > 0 &&
                                <span className='error'>{errors.cardNum}</span>}
                            </div>

                            <div className='fullName'>
                                <label htmlFor="expDate">Expiry (MM/YY):*</label>
                                <input type='text' id= 'exp' name='expDate' onChange={this.handleChange} noValidate /> <br/>
                                {errors.expDate.length > 0 &&
                                <span className='error'>{errors.expDate}</span>}
                            </div>

                            <div className='password'>
                                <label htmlFor="cardCode">Card Code:*</label>
                                <input type='password' id='code' name='cardCode' onChange={this.handleChange} noValidate /> <br/>
                                {errors.cardCode.length > 0 &&
                                <span className='error'>{errors.cardCode}</span>}
                            </div>


                            <div className="button">

                                <button type="submit" id="sub" onSubmit={this.handleSubmit}>Pay</button> <br/>

                                <button type="Reset" id="res">Reset</button> <br/>

                                <button type="Cancel" id="cal"> Cancel</button>

                            </div>
                            <div className="required">
                                <h3>* Indicates required feelds.</h3>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}