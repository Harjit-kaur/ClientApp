import React, { Component } from 'react';
import { Button, Icon, Form, Modal, ModalActions } from 'semantic-ui-react';
import axios from 'axios';
import './test.css';
export default class CreateCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            name: "",
            address: "",
        };
    };
    //Setting the popup function for opening the form
    showPopup = () => {
        this.setState({ open: !this.state.open });
    }
    //post new data using Axios
    handleCreate = () => {
        axios.post('Customers/PostCustomer', {
            name: this.state.name,
            address: this.state.address
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
                {/* on clicking the new customer the modal will open up */}
                <Button primary onClick={this.showPopup}>New Customer</Button>
                <Modal id="popup"
                //open is true
                    open={this.state.open}
                    size='tiny'>
                    <Modal.Header>Create Customer</Modal.Header>
                    <Modal.Content>
                        <Form id="Form">
                            <Form.Input
                                name='name'
                                label='NAME'
                                placeholder="Enter Name"
                                //on changing the value 
                                onChange={(e) => { this.setState({ name: e.target.value }) }} />
                            <Form.Input
                                name='address'
                                label='ADDRESS'
                                placeholder="Enter Address"
                                //on changing the value
                                onChange={(e) => { this.setState({ address: e.target.value }) }} />
                        </Form>
                        <ModalActions>                            
                            <Button color='black' onClick={this.showPopup}>cancel</Button>
                            {/* Create new data by clicking the button */}
                            <Button color='green' icon labelPosition="right" onClick={this.handleCreate}>create
                            <Icon name='checkmark' /> </Button>
                        </ModalActions>
                    </Modal.Content>
                </Modal>
            </div>);
    };
}

