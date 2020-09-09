import React, { Component } from 'react'
import { Form, FormGroup, Label, Button, Input } from 'reactstrap';
import { FacebookLoginButton } from "react-social-login-buttons";
import { TwitterLoginButton } from "react-social-login-buttons";
import './Login.css';

class Login extends Component {
    render() {
        return (
            <Form className="login-page">
                <h1>
                    <span className="font-weight-bold">Login/Register</span>
                </h1>
                <h2 className="text-center">Welcome</h2>
                <FormGroup>
                    <Label>Username</Label>
                    <Input
                    type="username" placeholder="Username"/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                    type="password" placeholder="Password"/>
                </FormGroup>
                <Button className="btn-lg btn-info btn-block">SK Login</Button>
                <FacebookLoginButton 
                onClick={() => alert("Say Her Name!!")} />
                <TwitterLoginButton 
                onClick={() => alert("Breonna Taylor!!")} />
                <div className="text-center pt5">
                    Or not a SK memeber  <a href ="">REGISTER NOW!</a>
                </div>

            </Form>
        )
    }
}

export default Login;
