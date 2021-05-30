import React, { Component } from 'react'
import { ProgressBar, Button } from 'react-bootstrap';

export class Page1 extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    validatePage(e) {
        let errors = '';

        if (this.props.values.firstname.trim() == '') {
            errors = errors + 'First Name is Empty\n';
        } 
        if (this.props.values.lastname.trim() == '') {
            errors = errors + 'Last Name is Empty\n';
        } 
        if (this.props.values.email.trim() == '') {
            errors = errors + 'Email is Empty\n';        
        } else {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(String(this.props.values.email.trim()).toLowerCase())) {
                errors = errors + 'Email is Invalid\n';
            }
        }
        if (this.props.values.phone.trim().length > 0) {
            const re = /^\D*0(\D*\d){9}\D*$/;
            if (!re.test(String(this.props.values.phone.trim()))) {
                errors = errors + 'Phone is Invalid\n';
            }
        }
        
        if (errors.trim().length > 0) {
            alert(errors);
        } else {
            this.continue(e);
        }
    }

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container page_header">
                <h2 className="mb-5">Personal Details</h2>
                <ProgressBar now={0} label={`0/2 Steps Completed`} />
                <div className="form-group progress_bar_padding">
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" className="form-control" name="firstname" data-testid='firstname-input' onChange={inputChange('firstname')} value={values.firstname} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" className="form-control" name="lastname" data-testid='lastname-input' onChange={inputChange('lastname')} value={values.lastname} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="form-control" name="email" data-testid='email-input' onChange={inputChange('email')} value={values.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" className="form-control" name="phone" data-testid='phone-input' onChange={inputChange('phone')} value={values.phone} />
                </div>

                <br/>

                <div className="text-right">
                    <button className="btn btn-primary" data-testid='page-1-continue-btn' onClick={this.validatePage.bind(this)}>Continue</button>
                </div>
            </div>
        )
    }
}

export default Page1
