import React, { Component } from 'react';
import { Row, Grid, Col, Button , ButtonToolbar ,Glyphicon , Modal , Form, FormGroup , FormControl , ControlLabel , Checkbox} from 'react-bootstrap';
import ReactDOM from 'react-dom';
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
                                <AddItemModal show={this.state.AddItemModalShow} onHide={AddItemModalClose}/>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                </Grid>
			</div>
		)
	}
}

class AddItemModal extends Component{
    constructor(props){
        super(props);
    }
    onSubmit(){
        console.log("Here");
        var self = this;
        var itemName = ReactDOM.findDOMNode(self.refs.itemName).value;
        var file = ReactDOM.findDOMNode(self.refs.itemImage).files[0];
        var categories = [];
    }
    render() {
        return (
        <Modal {...this.props} bsSize="large" aria-labelledby="add-item-modal">
            <Modal.Header closeButton>
            <Modal.Title id="add-item-modal"><Glyphicon glyph="plus" /> New Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalItemName">
                        <Col componentClass={ControlLabel} sm={12} md={2}>Name</Col>
                        <Col sm={12} md={8}>
                            <FormControl type="text" placeholder="Item name" ref="itemName" required/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalItemImage">
                        <Col componentClass={ControlLabel} sm={12} md={2}>Image</Col>
                        <Col sm={12} md={8} style={{paddingTop:"10px"}}>
                            <FormControl type="file" placeholder="Item Image" ref="itemImage" required/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={12} md={2}>Category</Col>
                        <Col sm={12} md={8}>
                            <Checkbox ref="sps" inline>SPS Frags</Checkbox>
                            &nbsp; &nbsp;
                            <Checkbox ref="lps" inline>LPS Frags</Checkbox>
                            &nbsp; &nbsp;
                            <Checkbox ref="zoas" inline>Zoas</Checkbox>
                            &nbsp; &nbsp;
                            <Checkbox ref="wysiwyg" inline>WYSIWYG</Checkbox>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalItemQuantity">
                        <Col componentClass={ControlLabel} sm={12} md={2}>Quantity</Col>
                        <Col sm={12} md={1}>
                            <FormControl type="number" ref="itemQuantity"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalItemDescription">
                        <Col componentClass={ControlLabel} sm={12} md={2}>Description</Col>
                        <Col sm={12} md={8}>
                            <FormControl componentClass="textarea" placeholder="Enter text" rows={8} ref="itemDescription"/>
                        </Col>
                    </FormGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
                <Button bsStyle="success" onClick={this.onSubmit.bind(this)}>Submit</Button>
            </Modal.Footer>
        </Modal>
        );
    }
}

export default Inventory