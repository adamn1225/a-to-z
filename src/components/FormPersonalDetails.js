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
                <div className={formStyles.topSec}>
                <React.Fragment>
                    <div className={formStyles.formText}>
                    <h3><strong>Contact Information</strong></h3>
                    <div className={formStyles.formBackground}>
                        <div className={formStyles.fields2}>
                    <TextField
                        hintStyle={{ color: 'white' }}
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <TextField 
                        hintStyle={{ color: 'white' }}
                        hintText="Enter Your Last Name"
                        color="white"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                     <TextField 
                        hintStyle={{ color: 'white' }}
                        hintText="Enter Your email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    </div>
                    
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
                </div>
                </React.Fragment>
                </div>
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
