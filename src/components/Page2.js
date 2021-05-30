import React, { Component } from 'react'
import { ProgressBar, Button } from 'react-bootstrap';

export class Page2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    isInt(value) {
        return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
    }

    validatePage(e) {
        let errors = '';

        if (this.props.values.streetnumber.trim() == '') {
            errors = errors + 'Street Number is Empty\n';
        } else if (!this.isInt(this.props.values.streetnumber.trim())) {
            errors = errors + 'Street Number is Invalid\n';
        }
        if (this.props.values.streetname.trim() == '') {
            errors = errors + 'Street Name is Empty\n';
        } 
        if (this.props.values.streettype.trim() == '') {
            errors = errors + 'Street Type Empty\n';        
        }
        if (this.props.values.suburb.trim() == '') {
            errors = errors + 'Suburb is Empty\n';        
        }
        if (this.props.values.postcode.trim() == '') {
            errors = errors + 'Postcode is Empty\n';        
        } else {
            if (this.props.values.postcode.trim().length > 4) {
                errors = errors + 'Postcode is Invalid\n';
            } else {
                if (!this.isInt(this.props.values.postcode.trim())) {
                    errors = errors + 'Postcode is Invalid\n';
                } else {
                    if (parseInt(this.props.values.postcode.trim(), 10) < 800) {
                        errors = errors + 'Postcode is Invalid\n';
                    } else {
                        if (parseInt(this.props.values.postcode.trim(), 10) > 7999) {
                            errors = errors + 'Postcode is Invalid\n';
                        }         
                    }     
                } 
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
                <h2 className="mb-5">Home Address</h2>
                <ProgressBar now={50} label={`1/2 Steps Completed`} />
                <div className="form-group progress_bar_padding">
                    <label htmlFor="streetnumber">Street Number:</label>
                    <input type="text" className="form-control" name="streetnumber" data-testid='streetnumber-input' onChange={inputChange('streetnumber')} value={values.streetnumber} />
                </div>
                <div className="form-group">
                        <div className="form-group row">
                            <div className="form-inline col-lg-8">
                                <label htmlFor="streetname" className="col-lg-6 control-label">Street Name:</label>
                                <input type="text" className="form-control" name="streetname" data-testid='streetname-input' onChange={inputChange('streetname')} value={values.streetname} />
                            </div>
                            <div className="form-inline col-lg-4">
                                <label htmlFor="streettype" className="col-lg-6 control-label">Street Type:</label>
                                <select className="form-select" name="streettype" data-testid='streettype-input' onChange={inputChange('streettype')} value={values.streettype}>
                                    <option></option>
                                    <option value="Cl">Cl</option>
                                    <option value="Ct">Ct</option>
                                    <option value="St">St</option>
                                    <option value="Pl">Pl</option>
                                    <option value="Ave">Ave</option>
                                </select>
                            </div>
                        </div> 
                </div>
                <div className="form-group">
                    <label htmlFor="suburb">Suburb:</label>
                    <input type="text" className="form-control" data-testid='suburb-input' name="suburb" onChange={inputChange('suburb')} value={values.suburb} />
                </div>
                <div className="form-group">
                    <label htmlFor="postcode">Postcode:</label>
                    <input type="text" className="form-control" data-testid='postcode-input' name="postcode" onChange={inputChange('postcode')} value={values.postcode} />
                </div>                                

                <br />

                <div className="row">
                    <div className="col-sm-2">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-sm-10">
                        <button className="btn btn-primary" id="page_2_continue" data-testid="page-2-continue-btn" onClick={this.validatePage.bind(this)}>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page2
