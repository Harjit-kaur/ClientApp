import React, { Component } from 'react'
import { Button, Form, Modal } from 'semantic-ui-react'
import axios from "axios";
export default class CustomerModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            createModal:false
        };
    }
    //Hnadle Create
    handleButtonClickCreate = () => {
        axios.post('Customers/PostCustomer', {
            name: this.state.name,
            address: this.state.address
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
        this.setState({ createModal:false, name:'', address:''}) //make name/address empty and close modal
    };
     //Handle change
     handleChange =(e, {name, value}) => {
        e.preventDefault();
        this.setState({[name]:e.target.value})
    }
    //Handle cancel create --make name/address empty and close modal
    onCancel = () =>{
        this.setState({createModal:false, name:'', address:''})
    }
    render() {
        //Destructuring
        const{name, address, createModal} = this.state;
        const{handleChange, onCancel, handleButtonClickCreate}= this;
        return (
            <Modal
                open={createModal}  onClose={createModal}
                className='Semantic-Modal'
                trigger={<Button color="blue" onClick={() => this.setState({createModal:true})}>New Customer</Button>}
                size='tiny'
            >
                <Modal.Header>Create Customer</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Input name='name' label='Name' value={name} onChange={handleChange()}/>
                        <Form.Input name='address' label='Address' value={address} onChange={handleChange()} />
                    </Form>
                </Modal.Content>    
                <Modal.Actions>
                    <Button  color ='black' onClick={onCancel()}>Cancel</Button>
                    <Button color ='green' onClick={handleButtonClickCreate()}>Create</Button>
                </Modal.Actions>                 
            </Modal>
        );
    }
}// import React, { Component } from 'react'
// import { Button, Form, Modal, ModalActions, Placeholder,Input } from 'semantic-ui-react'
// import CustomerButton from "./CustomerButton";
// import axios from "axios";


// export default class CustomerModal extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             address: ""
//         };
//     }
//     handleButtonClickCreate = () => {

//         const {name, address} = this.state;
//         console.log(name, address);

//         axios.post('Customers/PostCustomer', {
            
//             name: this.state.name,
//             address: this.state.address

//         })
//             .then((result) => {
//                 console.log(result);
//                 this.props.getData();
//                 this.props.toggleModal();
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
        
//         this.setState({
//             name:'',
//             address:''
//         })
//     }

//     // renderTextField = (label, placeholder) => {
//     //     return (
//     //         <Form.Field>
//     //             <label>{label}</label>
//     //             <input name={placeholder} value={} placeholder={placeholder} onChange={(e) => this.setState({ [label]: e.target.value })} />
//     //         </Form.Field>
//     //     )
//     // }

//     componentDidUpdate() {
//         console.log(this.state.name);
//     }

//     handleChange =(e, {name, value}) => {
//         e.preventDefault();
//         this.setState({
//             [name]:e.target.value
//         })
//     }


//     render() {
//         return (
//             <Modal
//                 open={this.props.open}
//                 className='Semantic-Modal'
//                 //   trigger={<Button color="blue">New Customer</Button>}
//                 size='tiny'
//             >
//                 <Modal.Header>Create Customer</Modal.Header>
//                 <Modal.Content>
//                     <Form>
                        
//                         {/* {this.renderTextField("Name", "name")}
//                         {this.renderTextField("Address", "address")} */}

//                         <Form.Input
//                             name='name'
//                             label='Name'
//                             value={this.state.name || ''}
//                             onChange={this.handleChange}

//                         />
//                         <Form.Input
//                             name='address'
//                             label='Address'
//                             value={this.state.address || ''}
//                             onChange={this.handleChange}
//                         />
//                     </Form>
//                     <ModalActions>
//                     <CustomerButton buttontext="Cancel"
//                     color='black'
//                      handleButtonClick={() => this.props.toggleModal()}/><br/>
//                     <CustomerButton buttontext="Create"
//                     color="green"
//                     handleButtonClick={() => this.handleButtonClickCreate()}/>                  

//                     </ModalActions>                   

//                 </Modal.Content>
//             </Modal>
//         );
//     }


// }


