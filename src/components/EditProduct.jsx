import React, { Component } from 'react';
import { Button, Form, Icon, Modal, ModalActions } from 'semantic-ui-react';
import axios from 'axios';
import './test.css';
export default class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      //old data
      name: this.props.editData.name,
      price: this.props.editData.price
    };
  };
  //Setting the popup function for opening the form
  showPopup = () => {
    this.setState({ open: !this.state.open });
  }
  //create edit function
  handleEdit = () => {
    axios.put(`Products/PutProduct/${this.props.editData.id}`, {
      id: this.props.editData.id,
      //new data
      name: this.state.name,
      price: this.state.price,
    })
      .then((result) => {
        this.showPopup();
        this.props.getDataEdit();
      })
      .catch((error) => {
      });
  }
  render() {
    return (
      <div>
        {/* on clicking the edit button, the modal will open up */}
        <Button color='yellow' onClick={this.showPopup}>
          <Icon name='edit' />Edit</Button>
        <Modal id='popup'
          open={this.state.open}
          size='tiny'>
          <Modal.Header>Edit Product</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Input
                name='name'
                label='NAME'
                //old values
                defaultValue={this.props.editData.name}
                //on chnaging the old values
                onChange={(e) => { this.setState({ name: e.target.value }) }} />
              <Form.Input
                name='price'
                label='PRICE'
                //old values
                defaultValue={this.props.editData.price}
                //on changing the old values
                onChange={(e) => { this.setState({ price: e.target.value }) }} />
            </Form>
            <ModalActions>
              <Button color='black' onClick={this.showPopup}>cancel</Button>
              {/*editing the values by clicking the edit button in the modal*/}
              <Button color='green' icon labelPosition="right" onClick={this.handleEdit}>edit <Icon name='checkmark' /></Button>
            </ModalActions>
          </Modal.Content>
        </Modal>
      </div>);
  };
}


