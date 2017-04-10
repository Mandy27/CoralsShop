import React, { Component } from 'react';
import { Link } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Image, Glyphicon, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Logo from '../images/Logo5.png'
import '../css/Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <a href="/"><Image src={Logo} alt="KIMGON" className="logo" /></a>
                <div className="custom-navbar-top">
                    <Link to="/login" className="login-btn"><Glyphicon glyph="log-in" />&nbsp; Admin Login</Link>
                </div>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav style={{ marginLeft: "300px" }}>
                            <IndexLinkContainer to="/"><NavItem eventKey={1} >Home</NavItem></IndexLinkContainer>
                            <NavDropdown eventKey={2} title="Categories" id="categoriesNavDropdown">
                                <MenuItem eventKey={2.1}>SPS Frags</MenuItem>
                                <MenuItem eventKey={2.2}>LPS Frags</MenuItem>
                                <MenuItem eventKey={2.3}>Zoas</MenuItem>
                            </NavDropdown>
                            <LinkContainer to="/wysiwyg"><NavItem eventKey={3} >WYSIWYG</NavItem></LinkContainer>
                            <NavDropdown eventKey={4} title="Promotions" id="promotionsNavDropdown">
                                <MenuItem eventKey={4.1}>Buy > $399, Get free shipping</MenuItem>
                                <MenuItem eventKey={4.2}>Package Deals</MenuItem>
                            </NavDropdown>
                            <LinkContainer to="/contactus"><NavItem eventKey={5} >Contact Us</NavItem></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;