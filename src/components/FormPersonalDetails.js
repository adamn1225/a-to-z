import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import formStyles from './form.module.scss'

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className={formStyles.formText}>
                    <h3>Getting a Quote is Free & Easy</h3>
                    <h4>We Care About Your Shipment</h4>
                    <h5>- Door-to-Door Service</h5>
                    <h5>- Bonded & Insured Carriers</h5>
                    <h5>- Supreme Costumer Service</h5>
                    <TextField
                        hintStyle={{ color: 'white' }}
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField 
                        hintStyle={{ color: 'white' }}
                        hintText="Enter Your Last Name"
                        color="white"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br/>
                     <TextField 
                        hintStyle={{ color: 'white' }}
                        hintText="Enter Your email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br />
                    <div className={formStyles.buttons}>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    </div>
                </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails
