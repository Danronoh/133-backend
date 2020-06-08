import React, {Component} from 'react';
import Form from "../component/common/Form";
import _ from "lodash";

// service
const formSubmissions = require('../../services/formSubmissions')

class LoginForm extends Form {

    state = {
        data: { username: '', password: '' },
        loginRes: {}
    }


    doSubmit = () => {
        const { data } = this.state

        // call server
        const response = formSubmissions.loginService(data)
        //console.log(response)
        this.setState({
            data: { username: '', password: '' },
            loginRes: response
        })
    }

    renderResults = () => {
        const { loginRes } = this.state

        if (!_.isEmpty(loginRes)) {
            //console.log(newItem)
            return (
                <div className="info">
                    <p className="message"> { loginRes.message } </p>
                    <h1> { loginRes.username } </h1>
                </div>
            )
        } return null

    }

    render() {
        const { username, password } = this.state.data

        //console.log(username)
        //console.log(password)
        return (
            <div>
                { this.renderResults() }
                <h1> Login below</h1>

                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username', 'text')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderSubmit('Login')}
                </form>
            </div>
        );
    }
}

export default LoginForm;
