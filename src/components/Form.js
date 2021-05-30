import React, { Component } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Completion from './Completion';

export class Form extends Component {
    state = {
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        streetnumber: '',
        streetname: '',
        streettype: '',
        suburb: '',
        postcode: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { step } = this.state;
        const { firstname, lastname, email, phone, streetnumber, streetname, streettype, suburb, postcode } = this.state;
        const values = { firstname, lastname, email, phone, streetnumber, streetname, streettype, suburb, postcode };

        switch (step) {
            case 1:
                return (
                    <Page1
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <Page2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Completion
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
        }
    }
}

export default Form
