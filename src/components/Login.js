import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { Row, Grid, Col, Form, FormGroup, FormControl, ControlLabel, Button, Checkbox } from 'react-bootstrap';
import '../css/Login.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginErrorFlag: false
        }
    }
    handleSubmit() {
        var self = this;
        var email = ReactDOM.findDOMNode(self.refs.useremail).value;
        var pass = ReactDOM.findDOMNode(self.refs.userpassword).value;
        axios.post('/api/user', {email: email,password: pass
        }).then(function (response) {
            if(response.status === 200 && response.data === "SUCCESS"){
                browserHistory.push('/inventory');
            }else{
                self.setState({loginErrorFlag: true});
            }
        })
        .catch(function (error) {
                console.log(error);
        });
    }
    render() {
        return (
            <div>
                <br /><br />
                {this.state.loginErrorFlag && <div className="custom-notification-error">Invalid Email or Password!!!</div>}
                <div className="pageTitle-wrapper">
                    <h3>Sign In</h3>
                    <p style={{"color":"#b8b8b8"}}>*This page is for admin use only.</p>
                </div>
                <br />
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>Email:</Col>
                        <Col sm={8}>
                            <FormControl type="email" placeholder="Email" ref="useremail"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>Password:</Col>
                        <Col sm={8}>
                            <FormControl type="password" placeholder="Password" ref="userpassword"/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button onClick={this.handleSubmit.bind(this)}>Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Login;