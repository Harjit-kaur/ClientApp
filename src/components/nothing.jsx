import React from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';

export default class CustomerModel extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        showCreateForm: false,
        id: '',
        name: '',
        address: '',
        getData: {}
    }
    if (props.customer) {
        console.log("Add customer constructor")
        this.setState({showCreateForm:true})
        this.state.getData = props.customer;
    }else{
        this.setState({showCreateForm:false})
    }
}

handleChangeName = event => {
    const value = event.target.value;

    console.log(value);

    this.setState({ getData: { name: value, address: this.state.getData.address } });

    //name: ""
    //address: ""
    console.log(this.state.getData);
}

handleChangeAddress = event => {
    const value = event.target.value;
    console.log(value);
    this.setState({ getData: { name: this.state.getData.name, address: value } });

    //name: "ram" but now there is no address in formData
    console.log(this.state.formData);
}

handleSubmit = event => {
    event.preventDefault();

    this.setState({
        getData: {
            name: this.state.name, address: this.state.address
        }
    });
    this.props.onAddFormSubmit(this.state.getData);
}

//On cancel button click close Create user form
closeCreateForm = () => {
    this.setState({ showCreateForm: false })
}

//Open Create new Customer form
handleButtonClick = () => {
    this.setState({ showCreateForm: true })
}

render() {

    let formTitle;
    if (this.state.id) {
        formTitle = "Edit Customer";
    } else {
        formTitle = "Create Customer";
    }

    return (
        <div>
            <Modal closeOnTriggerMouseLeave={false} trigger={
                <Button color='blue' onClick={this.handleButtonClick}>
                    {formTitle}
        </Button>
            } open={this.state.showCreateForm}>
                <Modal.Header>
                    Create customer
    </Modal.Header>
                <Modal.Content>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Field>
                            <label>Name</label>
                            <input type="text" placeholder='Name' name="name"
                                value={this.state.name}
                                onChange={this.handleChangeName} />
                        </Form.Field>

                        <Form.Field>
                            <label>Address</label>
                            <input type="text" placeholder='Address' name="address"
                                value={this.state.address}
                                onChange={this.handleChangeAddress} />
                        </Form.Field>

                        <br />
                        <Button type='submit' floated='right' color='green'>Create</Button>
                        <Button floated='right' onClick={this.closeCreateForm} 
       color='black'>Cancel</Button>
                        <br />
                    </Form>

                </Modal.Content>
            </Modal>

        </div>
    )
}

}