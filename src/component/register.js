import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../resources/css/stylesregister.css"
import Navbar from "./navbar";
import {MDBRow, MDBCol, MDBBtn, MDBContainer} from "mdbreact";

class RegisterComponent extends React.Component {
    state = {
        fname: "",
        lname: "",
        email: "",
        password:"",
        address:"",
        address2:"",
        city: "",
        state: "",
        zip: ""
    };

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    render()
    {
        return (
            <div>
                <Navbar/>
                <form
                    className="container-fluid outerContainer"
                    onSubmit={this.submitHandler}
                    noValidate
                    style={{minHeight: "100vh"}}
                >
                    <MDBContainer className="container innerContainer">
                        <MDBRow>
                            <MDBCol className="col-lg-6 col-md-6 background"></MDBCol>
                            <MDBCol className="col-lg-6 col-md-6">
                                <MDBContainer className="container formContainer">
                                    <h2 className="text-center">Create Account </h2>
                                    <hr/>
                                    <form>
                                        <MDBRow className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="fname">First Name*</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fname"
                                                    placeholder="First Name"
                                                    name="fname"
                                                    value={this.state.fname}
                                                    onChange={this.changeHandler}
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide first name.
                                                </div>
                                            </div>
                                            <MDBCol className="form-group col-md-6">
                                                <label htmlFor="lname">Last Name*</label>
                                                <input
                                                    value={this.state.lname}
                                                    onChange={this.changeHandler}
                                                    name="lname"
                                                    type="text"
                                                    className="form-control"
                                                    id="lname"
                                                    placeholder="Last Name"
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide last name.
                                                </div>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className="form-row">
                                            <MDBCol className="form-group col-md-6">
                                                <label htmlFor="email">Email*</label>
                                                <input
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={this.changeHandler}
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Email"
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide an email.
                                                </div>
                                            </MDBCol>
                                            <MDBCol className="form-group col-md-6">
                                                <label htmlFor="password">Password*</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={this.changeHandler}
                                                    placeholder="Password"
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide a password.
                                                </div>
                                            </MDBCol>
                                        </MDBRow>
                                        <div className="form-group">
                                            <label htmlFor="address">Address*</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address"
                                                name="address"
                                                value={this.state.address}
                                                onChange={this.changeHandler}
                                                placeholder="1234 Main Street"
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Please provide an address.
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="address2">Address 2</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address2"
                                                name="address2"
                                                value={this.state.address2}
                                                onChange={this.changeHandler}
                                                placeholder="Apartment, Studio, or Floor"
                                            />
                                        </div>
                                        <MDBRow className="form-row">
                                            <MDBCol className="form-group col-md-6">
                                                <label htmlFor="city">City*</label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    className="form-control"
                                                    id="city"
                                                    value={this.state.city}
                                                    onChange={this.changeHandler}
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide a city.
                                                </div>
                                            </MDBCol>
                                            <MDBCol className="form-group col-md-4">
                                                <label htmlFor="state">State*</label>
                                                <select
                                                    id="state"
                                                    name="state"
                                                    value={this.state.state}
                                                    onChange={this.changeHandler}
                                                    className="form-control" required>
                                                    <div className="invalid-feedback">
                                                        Please provide a state.
                                                    </div>
                                                    <option selected>Choose...</option>
                                                    <option>Sri Lanka</option>
                                                    <option>USA</option>
                                                    <option>Other</option>
                                                </select>
                                            </MDBCol>
                                            <MDBCol className="form-group col-md-2">
                                                <label htmlFor="zip">Zip*</label>
                                                <input type="text"
                                                       className="form-control"
                                                       id="zip"
                                                       name="zip"
                                                       value={this.state.zip}
                                                       onChange={this.changeHandler}
                                                       required
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide a valid zip.
                                                </div>
                                            </MDBCol>
                                        </MDBRow>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    value=""
                                                    type="checkbox"
                                                    id="invalidCheck"
                                                    required
                                                />
                                                <label className="form-check-label" htmlFor="invalidCheck">
                                                    I agree to the Blinkee.com free membership agreement and private
                                                    policy
                                                </label>
                                                <div className="invalid-feedback">
                                                    You must agree before submitting.
                                                </div>
                                            </div>
                                        </div>
                                        <MDBBtn type="submit" color="primary">
                                            Create
                                        </MDBBtn>
                                    </form>

                                </MDBContainer>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </form>
            </div>
        );
    }
    ;
}

export default RegisterComponent;
