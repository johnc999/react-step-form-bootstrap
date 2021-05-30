import React, { Component } from 'react'
import { ProgressBar, Button } from 'react-bootstrap';

export class Completion extends Component {
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { firstname, lastname, email, phone, streetnumber, streetname, streettype, suburb, postcode }
        } = this.props;

        return (
            <div className="form-container page_header">
                <h2 className="mb-5">Summary</h2>
                <ProgressBar now={100} label={`2/2 Steps Completed`} />
                <ul className="list-group progress_bar_padding">
                    <li className="list-group-item"><b>First Name:</b> {firstname}</li>
                    <li className="list-group-item"><b>Last Name:</b> {lastname}</li>
                    <li className="list-group-item"><b>Email:</b> {email}</li>
                    <li className="list-group-item"><b>Phone Number:</b> {phone}</li>
                    <li className="list-group-item"><b>Street Number:</b> {streetnumber}</li>
                    <li className="list-group-item"><b>Street Name:</b> {streetname}</li>
                    <li className="list-group-item"><b>Street Type:</b> {streettype}</li>
                    <li className="list-group-item"><b>Suburb:</b> {suburb}</li>
                    <li className="list-group-item"><b>Postcode:</b> {postcode}</li>
                </ul>

                <br /><br />

                <div className="row">
                    <div className="col-sm-1">
                        <button className="btn btn-danger" data-testid='p3-back-btn' onClick={this.back}>Back</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Completion
