import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../resources/css/stylesregister.css"
import Navbar from "./navbar";

const RegisterComponent = (props) => {
    return (
        <div>
        <Navbar/>
        <div
            className="container-fluid outerContainer"
            style={{ minHeight: "100vh" }}
        >
            <div className="container innerContainer">
                <div className="row">
                    <div className="col-lg-6 col-md-6 background"></div>
                    <div className="col-lg-6 col-md-6">
                        <div className="container formContainer">
                            <h2 className="text-center">Create Account </h2>
                            <hr />
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="fname" >First Name*</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="fname"
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="lname">Last Name*</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lname"
                                            placeholder="Last Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Email*</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Password*</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder="Password"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress">Address*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAddress"
                                        placeholder="1234 Main Street"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress2">Address 2*</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputAddress2"
                                        placeholder="Apartment, Studio, or Floor"
                                        required
                                    />
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputCity">City*</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="inputCity"
                                            required
                                        />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputState">State*</label>
                                        <select
                                            id="inputState"
                                            class="form-control" required>
                                            <option selected>Choose...</option>
                                            <option>Sri Lanka</option>
                                            <option>USA</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label for="inputZip">Zip*</label>
                                        <input type="text" class="form-control" id="inputZip" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="gridCheck"
                                        />
                                        <label class="form-check-label" for="gridCheck" >
                                            By creating an account, you agree to the Blinkee.com free membership agreement and private policy
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">
                                    Create
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default RegisterComponent;
