import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import '../styling/CarouselImage.css';
import { Button, TextField } from "@material-ui/core";
import FintractBackendClient from "./../repositories/FintractBackendClient";
import CustomerData from "../models/CustomerData";

const emailAddressRegEx = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)
const contactNumberRegExp = RegExp(/^[789]\d{9}$/)

export default class UserForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            contactNumber: '',
            age: 0,
            amount: 0,
            membershipPeriod: 0,
            isInvalid:true,
            isError: {
                name: '',
                email: '',
                password: '',
                contactNumber: '',
                age: '',
                amount: '',
                membershipPeriod: '',
            }
        }
    }

    onSubmit = e => {
        e.preventDefault();
        
        var customerData = new CustomerData();
        customerData.name = this.state.name;
        customerData.email = this.state.email;
        customerData.password = this.state.password;
        customerData.contactNumber = this.state.contactNumber;
        customerData.age = this.state.age.toString();
        customerData.amount = this.state.amount.toString();
        customerData.membershipPeriod = this.state.membershipPeriod.toString();

        var backendClient = new FintractBackendClient();
        backendClient.yogaRegistrationPost(customerData);
    };

    formValid = ({ isError, ...rest }) => {
        let isValid = false;

        Object.values(isError).forEach(val => {
            if (val.length > 0) {
                isValid = false
            } else {
                isValid = true
            }
        });

        Object.values(rest).forEach(val => {
            if (val === null) {
                isValid = false
            } else {
                isValid = true
            }
        });

        return isValid;
    };

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
            case "email":
                isError.email = emailAddressRegEx.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "password":
                isError.password =
                    value.length < 6 ? "Atleast 6 characaters required" : "";
                break;
            case "age":
                isError.age =
                    value < 18 || value > 65 ? "Only people with Age between 18 years to 65 years allowed to enrolled" : "";
                break;
            case "membershipPeriod":
                isError.membershipPeriod =
                    value > 20 ? "Could only subscribe for 20 months membership in advance " : "";

                this.setState({ amount: value * 500 })
                break;
            case "contactNumber":
                isError.contactNumber = contactNumberRegExp.test(value)
                    ? ""
                    : "Contact number is invalid";
                break;
            default:
                break;
        }
        var isInvalid = true;
        if(isError.name.length === 0 && isError.email.length===0 && isError.membershipPeriod.length===0 && isError.password.length===0 && isError.age.length ===0 && isError.contactNumber.length===0)
            isInvalid=false;
        this.setState({
            isError,
            [name]: value,
            isInvalid:isInvalid
        })
    };

    render() {
        const { isError } = this.state;

        return (
            <div>
                <h1 style={{ position: "relative", marginTop: 80 }}>Get the Membership Now!!</h1>
                <h3 style={{ position: "relative", color: "darkBlue" }}>Limited Period Offer. Grab membership at just Rs. 500/month. Fill your details and make the payment now.</h3>
                <form onSubmit={this.onSubmit} noValidate>
                    <div className="form-group">
                        <TextField
                            required
                            type="text"
                            label="Full Name"
                            className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="name"
                            style={{ width: 300, margin: 10 }}
                            onChange={this.formValChange}
                            error={isError.name.length}
                            helperText={isError.name}
                        />
                    </div>

                    <div className="form-group">
                        <TextField
                            required
                            type="password"
                            className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="password"
                            label="Password"
                            style={{ width: 300, margin: 10 }}
                            onChange={this.formValChange}
                            error={isError.password.length}
                            helperText={isError.password}
                        />
                    </div>

                    <div className="form-group">
                        <TextField
                            required
                            type="number"
                            className={isError.age.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="age"
                            label="Age"
                            style={{ width: 300, margin: 10 }}
                            onChange={this.formValChange}
                            error={isError.age}
                            helperText={isError.age}
                        />
                    </div>

                    <div className="form-group">
                        <TextField
                            required
                            type="number"
                            className={isError.age.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="membershipPeriod"
                            label="Membership Period (Months)"
                            style={{ width: 300, margin: 10 }}
                            onChange={this.formValChange}
                            error={isError.membershipPeriod}
                            helperText={isError.membershipPeriod}
                        />
                    </div>

                    <div className="form-group">
                        <TextField
                            required
                            disabled
                            type="amount"
                            className={isError.age.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="amount"
                            label="Amount (Rs 500/month)"
                            value={this.state.amount}
                            style={{ width: 300, margin: 10 }}
                            onChange={this.formValChange}
                            error={isError.amount}
                            helperText={isError.amount}
                        />
                    </div>

                    <div className="email">
                        <TextField
                            required
                            type="email"
                            className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="email"
                            label="Email Address"
                            style={{ width: 300, margin: 10 }}
                            onChange={this.formValChange}
                            error={isError.email.length}
                            helperText={isError.email}
                        />
                    </div>

                    <div className="contactNumber">
                        <TextField
                            required
                            type="contactNumber"
                            className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="contactNumber"
                            label="Contact Number"
                            style={{ width: 300, margin: 10 }}
                            onChange={this.formValChange}
                            error={isError.contactNumber.length}
                            helperText={isError.contactNumber}
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={this.state.isInvalid}
                        variant="contained"
                        >
                        Proceed to Payment
                    </Button>

                </form>
            </div>
        );
    }
}