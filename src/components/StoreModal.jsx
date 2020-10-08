import React, { Component } from 'react'
import { Button, Form, Modal, ModalActions } from 'semantic-ui-react'
import StoreButton from "./StoreButton";
import axios from "axios";

export default class CustomerModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: ""
        };
    }
    handleButtonClickCreate = () => {

        axios.post('Stores/PostStore', {
            name: this.state.name,
            address: this.state.address
        })
            .then((result) => {
                console.log(result);
                this.props.getData();
                this.props.toggleModal();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    renderTextField = (label, placeholder) => {
        return (
            <Form.Field>
                <label>{label}</label>
                <input placeholder={placeholder} onChange={(e) => this.setState({ [label]: e.target.value })} />
            </Form.Field>
        )
    }

    // componentDidUpdate() {
    //     console.log(this.state.name);
    // }

    render() {
        return (
            <Modal
                open={this.props.open}
                className='Semantic-Modal'
                //   trigger={<Button color="blue">New Customer</Button>}
                size='tiny'
            >
                <Modal.Header>Create Customer</Modal.Header>
                <Modal.Content>
                    <Form>
                        {this.renderTextField("Name", "Please enter name")}
                        {this.renderTextField("Address", "Please enter address")}
                    </Form>
                    <ModalActions>
                    <StoreButton buttontext="Cancel"
                    color='black'
                     handleButtonClick={() => this.props.toggleModal()}/>
                    <StoreButton buttontext="Create"
                    color="green"
                    handleButtonClick={this.handleButtonClickCreate}/>                  

                    </ModalActions>                   

                </Modal.Content>
            </Modal>
        );
    }


}

