import React, { Component } from 'react'
import { Form, FormGroup, Label, Button, Input } from 'reactstrap';
// import { FacebookLoginButton } from 'react-social-login-buttons';

class Login extends Component {
    render() {
        return (
            <Form className="login-page">
                <h1>
                    <span className="font-weight-bold">Login Kick Users</span>
                </h1>
            </Form>
        )
    }
}

export default Login;
