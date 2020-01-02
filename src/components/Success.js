import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import formStyles from './success.module.scss'

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className={formStyles.success}>
                    <h1>Awesome! Your Quote Is On It's Way!</h1>
                    <p>Read a little bit about A to Z Logisitics while you wait for your quote!</p>
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success;
