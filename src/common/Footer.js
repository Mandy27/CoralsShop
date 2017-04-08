import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
    	<div className="footer-container">
	        <Well className="footer-content">
	        </Well>
	        <div className="copyright-container">Copyright &copy; 2017 KimGon. All rights reserved.</div>
	    </div>
    );
  }
}

export default Footer;