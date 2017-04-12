import React, { Component } from 'react';
import { Row, Grid, Col, Button , ButtonToolbar ,Glyphicon , Modal , Form, FormGroup , FormControl , ControlLabel} from 'react-bootstrap';
import '../css/Inventory.css';

class Inventory extends Component {
    constructor(props){
        super(props);
        this.state={
            AddItemModalShow: false
        }
    }
	render (){
        let AddItemModalClose = () => this.setState({ AddItemModalShow: false });
		return (
			<div>
                <Grid>
                    <Row>
                        <Col xs={12}  md={8} ><h2 className="custom-title">Inventory</h2></Col>
                        <Col xs={12}  md={4} style={{textAlign:"right"}}>
                            <ButtonToolbar>
                                <Button bsStyle="link" className="float-right" onClick={()=>this.setState({ AddItemModalShow: true })}><Glyphicon glyph="plus" /> New Item</Button>
                                <AddItemModal show={this.state.AddItemModalShow} onHide={AddItemModalClose} />
                            </ButtonToolbar>
                        </Col>
                    </Row>
                </Grid>
			</div>
		)
	}
}

const AddItemModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="add-item-modal">
        <Modal.Header closeButton>
          <Modal.Title id="add-item-modal">New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form horizontal>
                <FormGroup controlId="formHorizontalItemName">
                    <Col componentClass={ControlLabel} sm={12} md={2}>Name</Col>
                    <Col sm={12} md={8}>
                        <FormControl type="text" placeholder="Item name" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalItemImage">
                    <Col componentClass={ControlLabel} sm={12} md={2}>Image</Col>
                    <Col sm={12} md={8} style={{paddingTop:"10px"}}>
                        <FormControl type="file" accept="image/*" />
                    </Col>
                </FormGroup>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

export default Inventory