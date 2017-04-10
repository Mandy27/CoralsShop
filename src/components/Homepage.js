import React, { Component } from 'react';
import { Grid, Row , Col , Well , FormControl , InputGroup , Glyphicon , FormGroup} from 'react-bootstrap';
import Carousel from '../common/Carousel';
import Dropdown from '../common/Dropdown';
import '../css/Homepage.css';

class Homepage extends Component {
	render (){
		return (
			<div>
				<Grid fluid className="carousel-container">
					<Row>
						<Col xs={12}>
							<Carousel />
						</Col>
					</Row>
				</Grid>
				<Well>
					<div className="row">
						<div className="col-sm-4"></div>
						<div className="col-sm-1"></div>
						<div className="col-sm-3" style={{textAlign: "right"}}>
							<label className="custom-label">Sort by:</label>
							<Dropdown title={"Price low-high"} data={["Price high-low", "Price low-high"]} id={"sortBy"}/>
						</div>
						<div className="col-sm-4">
							<FormGroup className="search-bar">
								<InputGroup>
									<FormControl bsSize="small" type="text" placeholder="Search" />
									<InputGroup.Addon>
							          	<Glyphicon glyph="search" />
							        </InputGroup.Addon>
						        </InputGroup>
					        </FormGroup>
						</div>
					</div>
				</Well>
				<h2 className="custom-title">New Products</h2>
			</div>
		)
	}
}

export default Homepage