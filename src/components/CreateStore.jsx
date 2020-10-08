import React, { Component } from 'react';
import { Button, Icon, Modal, Form, ModalActions } from 'semantic-ui-react';
import axios from 'axios';
import './test.css';
export default class CreateStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            name: "",
            address: "",
        };
    };
    //function for oening the form
    showPopup = () => {
        this.setState({ open: !this.state.open });
    }
    //post new data using axios request
    handleCreate = () => {
        axios.post('Stores/PostStore', {
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
                {/* on clicking the new store the modal will open up */}
                <Button primary onClick={this.showPopup}>New Store</Button>
                <Modal id='popup'
                    open={this.state.open}
                    size='tiny'>
                    <Modal.Header>Create Store</Modal.Header>
                    <Modal.Content>
                        <Form>
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
                            <Button color='green' icon labelPosition="right" onClick={this.handleCreate}>create  <Icon name='checkmark' />
                            </Button>
                        </ModalActions>
                    </Modal.Content>
                </Modal>
            </div>);
    };
}

