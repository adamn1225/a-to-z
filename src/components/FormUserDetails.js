import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import formStyles from './formUser.module.scss'
import { white } from 'material-ui/styles/colors';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };


    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <div className={formStyles.formText}>
                <React.Fragment>
            <h3>Getting a Quote is Free & Easy</h3>
            <h4>We Care About Your Shipment</h4>
            <h5>- Door-to-Door Service</h5>
            <h5>- Bonded & Insured Carriers</h5>
            <h5>- Supreme Costumer Service</h5><br />
            <p><strong>Fill out the form below for a shipping quote</strong></p>
                <div className={formStyles.fields}>
                    
                    <TextField
                        hintStyle={{ color: 'white' }}
                        hintText="Enter Zip Code"
                        floatingLabelText="Where Are You Shipping From"
                        onChange={handleChange('zipo')}
                        defaultValue={values.zipo}
                    />
                    <br/>
                    <TextField
                        hintStyle={{ color: 'white' }}
                        hintText="Enter Zip Code"
                        floatingLabelText="Where Are You Shipping To"
                        onChange={handleChange('zipd')}
                        defaultValue={values.zipd}
                    />
                    <br/>
                     <TextField
                        hintStyle={{ color: 'white' }}
                        hintText="DD/MM/YYYY"
                        floatingLabelText="Pick Up Date"
                        onChange={handleChange('date')}
                        defaultValue={values.date}
                    />
                    </div>
                    <br />
                    <div className={formStyles.fields}>
                    <TextField
                        hintStyle={{ color: 'white' }}
                        hintText="e.g. 2010"
                        floatingLabelText="Year"
                        onChange={handleChange('year')}
                        defaultValue={values.year}
                    />
                    <br/>
                    <TextField
                        hintStyle={{ color: 'white' }}
                        hintText="e.g. Nissan"
                        floatingLabelText="Make"
                        onChange={handleChange('make')}
                        defaultValue={values.make}
                    />
                    <br/>
                     <TextField
                        hintStyle={{ color: 'white' }}
                        hintText="e.g. Maxima"
                        floatingLabelText="Model"
                        onChange={handleChange('model')}
                        defaultValue={values.model}
                    />
                    </div>
                    <br />
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
                </div>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    },
    font: {
        fontColor: "white"
    }
}

export default FormUserDetails
