import React, { Component } from 'react';
import { Row, Grid, Col, Button , ButtonToolbar ,Glyphicon , Modal} from 'react-bootstrap';
import '../css/Inventory.css';

class Inventory extends Component {
    constructor(props){
        super(props);
        this.state={
            AddCategoryModalShow: false
        }
    }
	render (){
        let AddCategoryModalClose = () => this.setState({ AddCategoryModalShow: false });
		return (
			<div>
                <Grid>
                    <Row>
                        <Col xs={12}  md={8} ><h2 className="custom-title">Inventory</h2></Col>
                        <Col xs={12}  md={4} style={{textAlign:"right"}}>
                            <ButtonToolbar>
                                <Button bsStyle="link" className="float-right"><Glyphicon glyph="plus" /> New Item</Button>
                                <Button bsStyle="link" className="float-right" onClick={()=>this.setState({ AddCategoryModalShow: true })}><Glyphicon glyph="plus" /> New category</Button>
                                <AddCategoryModal show={this.state.AddCategoryModalShow} onHide={AddCategoryModalClose} />
                            </ButtonToolbar>
                        </Col>
                    </Row>
                </Grid>
			</div>
		)
	}
}

const AddCategoryModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="add-category-modal">
        <Modal.Header closeButton>
          <Modal.Title id="add-category-modal">Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

export default Inventory