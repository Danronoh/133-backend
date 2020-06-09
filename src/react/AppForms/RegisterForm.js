import React, {Component} from 'react';
import Form from "../component/common/Form";
import _ from "lodash";

// service
const formSubmissions = require('../../services/formSubmissions')

class RegisterForm extends Form {

    state = {
        data: { username: '', password: '', passwordtwo:'', name: ''},
        registerRes: {}
    }

    doSubmit = () => {
        const { data } = this.state

        // call server
        const response = formSubmissions.registerService(data)

        this.setState({
            data: { username: '', password: '', passwordtwo:'', name: ''},
            registerRes: response
        })
    }

    renderResults = () => {
        const { registerRes } = this.state

        if (!_.isEmpty(registerRes)) {
            //console.log(newItem)
            return (
                <div className="info">
                    <p className="message"> { registerRes.message } </p>
                    <h1> { registerRes.username } </h1>
                    <h1> { registerRes.name } </h1>
                </div>
            )
        } return null

    }

    render() {
        return (
            <div>
                { this.renderResults() }
                <h1> Register below.</h1>

                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username', 'text')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderInput('passwordtwo', 'PasswordTwo', 'password')}
                    {this.renderInput('name', 'Name', 'text')}
                    {this.renderSubmit('Register')}
                </form>
            </div>
        );
    }
}

export default RegisterForm;
