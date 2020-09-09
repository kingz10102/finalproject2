import React, { Component } from 'react'
import { Form, FormGroup, Label, Button, Input } from 'reactstrap';
// import { FacebookLoginButton } from 'react-social-login-buttons';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <Form className="login-page">
                <h1>
                    <span className="font-weight-bold">Login Kick Users</span>
                </h1>
                <h2>Welcome</h2>
                <FormGroup>
                    <Label>Username</Label>
                    <Input
                    type="username" placeholder="Username"/>
                </FormGroup>
            </Form>
        )
    }
}

export default Login;
