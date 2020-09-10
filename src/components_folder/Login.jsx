import React, { Component } from 'react'
import { Form, FormGroup, Label, Button, Input } from 'reactstrap';
import { FacebookLoginButton } from "react-social-login-buttons";
import { TwitterLoginButton } from "react-social-login-buttons";
import './Login.css';

class Login extends Component {
    render() {
        return (
        <header className="form">
            <Form className="login-page">
                <h1>
                    <span className="font-weight-bold">Login/Register</span>
                </h1>
                <h2 className="text-center">Welcome</h2>
                <FormGroup className="form-input">
                    <Label className="form-label">Username</Label>
                    <Input
                    type="username" placeholder="Username"/>
                </FormGroup>
                <FormGroup className="form-input">
                    <Label className="form-label">Password</Label>
                    <Input
                    type="password" placeholder="Password"/>
                </FormGroup>
                <Button className="btn-lg btn-info btn-block">
                    SK Login
                    </Button>
                <div className="text-center pt1">
                    Or not a SK memeber  <a href ="https://nationalactionnetwork.net/">REGISTER NOW!</a>
                </div><br></br>
                <FacebookLoginButton 
                onClick={() => alert("Say Her Name!!")} />
                <TwitterLoginButton 
                onClick={() => alert("Breonna Taylor!!")} />
                
            
            </Form>
            </header>
        )
    }
}

export default Login;
