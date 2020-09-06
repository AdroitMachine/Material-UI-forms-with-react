import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';



export class Sucess extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS FORM//
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Sucess" />
                    <h1>Thank you, form submitted</h1>
                    <p>You'll get an email with further instructions.</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default Sucess
