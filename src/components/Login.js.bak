import React, { Component } from 'react';
import { Row , Grid , Col , Form , FormGroup , FormControl , ControlLabel , Button , Checkbox} from 'react-bootstrap';
import '../css/Login.css';

class Login extends Component {
    handleRegister(){

    }
    render() {
        return (
            <div>
                <br/><br/><br/><br/>
                <Grid className="custom-body-container">
                    <Row>
                        <Col md={6} className="signin-container">
                            <h3 className="title">Sign In</h3>
                            <br/>
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
                                        <Button type="submit">Sign in</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md={6} className="create-new-container">
                            <h3 className="title">Create An Account</h3>
                            <br/>
                            <Form horizontal>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col componentClass={ControlLabel} sm={4}>Email:</Col>
                                    <Col sm={8}>
                                        <FormControl type="email" placeholder="Email" />
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalPassword">
                                    <Col componentClass={ControlLabel} sm={4}>Password:</Col>
                                    <Col sm={8}>
                                        <FormControl type="password" placeholder="Password" />
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalConfirmPassword">
                                    <Col componentClass={ControlLabel} sm={4}>Confirm Password:</Col>
                                    <Col sm={8}>
                                        <FormControl type="password" placeholder="Confirm Password" />
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col smOffset={4} sm={10}>
                                        <Button type="submit" onClick={this.handleRegister()}>Create</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
      }
}

export default Login;