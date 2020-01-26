import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import formStyles from './formUser.module.scss'
import Zipo from './zipo'
import Zipd from './zipd'

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };


    render() {
        const { values, handleChange } = this.props;
        return (

            
            <MuiThemeProvider>

                
            <div className={formStyles.topformimage}>
                <React.Fragment>
                <div className={formStyles.formText}>
            <h3><strong>Shipping Information</strong></h3>
            </div>
                <section className={formStyles.formBackground}>
                <div className={formStyles.fields}>
                <Zipo
                onChange={handleChange('zipo')}
                defaultValue={values.zipo}
                 />
                 <Zipd
                onChange={handleChange('zipd')}
                defaultValue={values.zipd}
                 />

                    
                    </div>
                  
                    <div className={formStyles.fields2}>
                    <TextField
                        hintStyle={{color:'white'}}
                        hintText="e.g. 2010"
                        floatingLabelText="Year"
                        onChange={handleChange('year')}
                        defaultValue={values.year}
                    />
                    
                    <TextField
                        hintStyle={{color:'white'}}
                        label="e.g. Nissan"
                        hintText="e.g. Nissan"
                        floatingLabelText="Make"
                        onChange={handleChange('make')}
                        defaultValue={values.make}
                    />
                   
                     <TextField
                        hintStyle={{color:'white'}}
                        label="e.g. Maxima"
                        hintText="e.g. Maxima"
                        floatingLabelText="Model"
                        onChange={handleChange('model')}
                        defaultValue={values.model}
                    />                 
                  
                    <TextField
                        hintStyle={{color:'white'}}
                        label="Pick Up Date"
                        variant="standard"
                        hintText="DD/MM/YYYY"
                        floatingLabelText="Pick Up Date"
                        onChange={handleChange('date')}
                        defaultValue={values.date}
                    />
                    </div>
                    <div className={formStyles.formButton}>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    </div>
                    </section>

 
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

export default FormUserDetails
