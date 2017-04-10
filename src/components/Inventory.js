import React, { Component } from 'react';
import { Row, Grid, Col, Button , ButtonToolbar ,Glyphicon } from 'react-bootstrap';
import '../css/Inventory.css';

class Inventory extends Component {
	render (){
		return (
			<div>
                <Grid>
                    <Row>
                        <Col xs={12}  md={8} ><h2 className="custom-title">Inventory</h2></Col>
                        <Col xs={12}  md={4} style={{textAlign:"right"}}>
                            <ButtonToolbar>
                                <Button bsStyle="link" className="float-right"><Glyphicon glyph="plus" /> New Item</Button>
                                <Button bsStyle="link" className="float-right"><Glyphicon glyph="plus" /> New category</Button>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                </Grid>
			</div>
		)
	}
}

export default Inventory