import React, { Component } from 'react';
import { Button, Icon, Modal, ModalActions } from 'semantic-ui-react';
import axios from 'axios';
export default class DeleteProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    };
    //Setting the popup function for opening the form
    showPopup = () => {
        this.setState({ open: !this.state.open });
    }
    //create delete function
    handleDelete = () => {
        axios
            .delete(`Products/DeleteProduct/${this.props.deleteId}`)
            .then((result) => {
                this.props.getDataDelete();
                this.showPopup();
            })
            .catch((error) => {
            });
    }
    render() {
        return (
            <div>
                 {/* on clicking the Delete button, the modal will open up */}
                <Button color='red' onClick={this.showPopup}><Icon name='trash alternate outline' />Delete</Button>
                <Modal id='popup'
                    open={this.state.open}
                    size='tiny'>
                    <Modal.Header>Delete Product</Modal.Header>
                    <Modal.Content><h4 class='delete'> Are you sure?</h4>
                        <ModalActions>
                            <Button color='black' onClick={this.showPopup}>cancel</Button>
                            {/*deleting the record on clicking*/}
                            <Button color='red' icon labelPosition="right" onClick={this.handleDelete}>delete <Icon name='remove' /> </Button>
                        </ModalActions>
                    </Modal.Content>
                </Modal>
            </div>);
    };
}

