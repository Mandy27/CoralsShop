import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { Row, Grid, Col, Form, FormGroup, FormControl, ControlLabel, Button, Checkbox } from 'react-bootstrap';
import '../css/Login.css';

class Login extends Component {
    handleSubmit() {
        axios.post('/api/user', {email: 'minhton@gmail.com',password: 'minhtonpassword'
        }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
                console.log(error);
        });
        browserHistory.push('/inventory');
    }
    render() {
        return (
            <div>
                <br /><br />
                <h3 className="title">Sign In</h3>
                <p style={{"color":"#b8b8b8"}}>*This page is for admin use only.</p>
                <br />
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>Email:</Col>
                        <Col sm={8}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>Password:</Col>
                        <Col sm={8}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button onClick={this.handleSubmit}>Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Login;