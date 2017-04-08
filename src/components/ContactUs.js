import React, { Component } from 'react';
import { Glyphicon , Form , FormControl , Button , FormGroup} from 'react-bootstrap';
import '../css/ContactUs.css';

class ContactUs extends Component {
	render (){
		return (
			<div style={{textAlign: "center"}} className="contactus-container">
				<h2>We'd <Glyphicon glyph="heart" /> to help!</h2>
				<hr style={{borderBottom: "1px solid #ddd", width:"60%"}}/>
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-5">
						<Form>
							<FormGroup>
								<FormControl type="text" placeholder="Name" />
							</FormGroup>
							<FormGroup>
								<FormControl type="email" placeholder="Email" />
							</FormGroup>
							<FormGroup>
								<FormControl componentClass="textarea" placeholder="Message" />
							</FormGroup>
							<FormGroup>
								<Button type="submit">Send</Button>
							</FormGroup>
						</Form>
					</div>	
					<div className="col-md-1"></div>
					<div className="col-md-4 contact-info">
						<div className="row">
							<div className="col-xs-3">
								<Glyphicon glyph="earphone" /> 
							</div>
							<div className="col-xs-9" style={{fontSize: "18px"}}>
								(626) 500-9999
							</div>
						</div>
						<br/>
						<div className="row">
							<div className="col-xs-3">
								<Glyphicon glyph="envelope" />
							</div>
							<div className="col-xs-9" style={{fontSize: "18px"}}>
								kimgon@gmail.com
							</div>
						</div>
					</div>
					<div className="col-md-1"></div>
				</div>
			</div>
		)
	}
}

export default ContactUs