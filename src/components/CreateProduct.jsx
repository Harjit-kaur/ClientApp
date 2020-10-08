import React, { Component } from 'react';
import { Button, Form, Icon, Modal, ModalActions } from 'semantic-ui-react';
import axios from 'axios';
import './test.css';
export default class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            name: "",
            price: "",
        };
    };
    //Setting the popup function for opening the form
    showPopup = () => {
        this.setState({ open: !this.state.open });
    }
    //post new data using Axios
    handleCreate = () => {
        axios.post('Products/PostProduct', {
            name: this.state.name,
            price: this.state.price
        })
            .then((result) => {
                this.showPopup();
                this.props.getDataCreate();
            })
            .catch((error) => {
            });
    }
    render() {
        return (
            <div>
                {/* on clicking the new product the modal will open up */}
                <Button primary onClick={this.showPopup}>New Product</Button>
                <Modal id='popup'
                    open={this.state.open}
                    size='tiny'>
                    <Modal.Header>Create Product</Modal.Header>
                    <Modal.Content>
                        <Form id='Form'>
                            <Form.Input
                                name='name'
                                label='NAME'
                                placeholder="Enter Name"
                                //on changing the value
                                onChange={(e) => { this.setState({ name: e.target.value }) }} />
                            <Form.Input
                                name='price'
                                label='PRICE'
                                placeholder="Enter Price"
                                //on changing the value
                                onChange={(e) => { this.setState({ price: e.target.value }) }} />
                        </Form>
                        <ModalActions>
                            <Button color='black' onClick={this.showPopup}>cancel</Button>
                            {/* Create new data by clicking the button */}
                            <Button color='green' icon labelPosition="right" onClick={this.handleCreate}>create
                            <  Icon name='checkmark' /></Button>
                        </ModalActions>
                    </Modal.Content>
                </Modal>
            </div>);
    };
}


