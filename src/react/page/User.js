import React, {Component} from 'react';
import LoginForm from "../AppForms/LoginForm";
import RegisterForm from "../AppForms/RegisterForm";

class User extends Component {
    state = {
        loginForm: true // render login form true
    }

    componentDidMount() {
    }

    handleClick = (e) => {

        const show = e.currentTarget.id

        if (show === 'Login') {
            this.setState({ loginForm: true })
        } else {

            this.setState({ loginForm: false })
        }
    }

    renderBtn = (name) => {

        return (<button id={name} onClick={this.handleClick}> {name} </button>)
    }

    renderForm = () => {
        const { loginForm } = this.state

        if ( loginForm ) return ( <LoginForm />)

        return <RegisterForm/>
    }


    render() {

        return (
            <div id="content" className="content">
                <div className="user">
                    <div>
                        {this.renderBtn('Login')}
                        {this.renderBtn('Register')}
                        <hr/>
                    </div>
                    <h1> USER PAGE. </h1>
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}

export default User;
