// import React, { Component } from 'react'
// import { Button, Form, Modal, Placeholder, Input } from 'semantic-ui-react'
// import CustomerButton from "./CustomerButton";
import React, { Component } from 'react'
import { Button, Form, Modal, Icon } from 'semantic-ui-react'
import axios from "axios";  
export default class CustomerEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            address: this.props.address,
            id: this.props.id,
            editModal: false, //editmodal
        };
    }
    //Update button handler
    handleButtonClickUpdate = (id) => {
        axios.put(`Customers/PutCustomer/${id}`, {
            name: this.state.name,
            address: this.state.address
        })
        .then((result) => { console.log(result); })
        .catch((error) => { console.log(error); });
    }
    //Handle change
    handleChange =(e, {name, value}) => {
        e.preventDefault();
        this.setState({[name]:e.target.value})
    }
render(){
    //destructuring
    const{id, name, address, editModal} = this.state;
    return (
        <Modal
            open={editModal} onClose={editModal}
            className='Semantic-Modal'         
            size='tiny'
            trigger={<Button color="blue" onClick={() => this.setState({ editModal: true})}><Icon className='edit' /> EDIT</Button>}   
        >
            <Modal.Header>Edit Customer</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Input name='name' label='Name' value={name} onChange={this.handleChange()}/>
                    <Form.Input name='address' label='Address' value={address} onChange={this.handleChange()} />
                </Form>
            </Modal.Content>
            <Modal.Action>
                <Button  color ='black' onClick={this.props.toggleModalUpdate}>Cancel</Button>
                <Button color ='green' onClick={this.handleButtonClickUpdate(id)}>Edit</Button>
            </Modal.Action>
        </Modal>
      );
    }
}// import axios from "axios";  

// export default class CustomerEdit extends Component {
    
//     constructor(props) {
//         super(props);
//         this.setState = {
//           open:this.props.open,
//             name:this.props.name,
//             address:this.props.address,
//             id:this.props.id
//         };
//     }
        


// // 
// // updateInputValue(e) {
// //   const { target: {value} } = e;
// //   this.setState({ Name: "name",
// //                   Address: "address" });
// // }


// handleButtonClickUpdate = (e, {id}) => {
//     console.log(id);
//     axios.put(`Customers/PutCustomer/${id}`,{
//       // id: editid,
//       name: "name",
//       address: "address"
//     })
//   .then((result) => {
//     console.log(result);
//     this.props.getData();
//     this.props.toggleModalUpdate();
//   })
//     .catch((error) => {
//       console.log(error);
//     });
//   }
//   // renderTextField = (label, placeholder) => {
//   //     return (
//   //         <Form.Field>
//   //             <label>{label}</label>
//   //             <input placeholder={placeholder} onChange={(e) => this.setState({[label]: e.target.value})}/>
//   //         </Form.Field>
//   //     )
//   // }

//   handleChange =(e, {name, value}) => {
//     e.preventDefault();
//     this.setState({
//         [name]:e.target.value
//     })
// }

  

// render()
// {
//     return (
//         <Modal
//               open={this.props.open}
//         className='Semantic-Modal'         

//           size='tiny'
//         >
//           <Modal.Header>Edit Customer</Modal.Header>
//           <Modal.Content>
//             <Form>
//             <Form.Input
//                             name='name'
//                             label='Name'
//                             value={this.state.name }
//                             onChange={this.handleChange()}

//                         />
//                         <Form.Input
//                             name='address'
//                             label='Address'
//                             value={this.state.address }
//                             onChange={this.handleChange()}
//                         />
//                     {/* {this.renderTextField("Name", "name")}
//                     {this.renderTextField("Address", "address")} */}
                
//             </Form>
//             <div align="right">
//          <CustomerButton buttontext="Cancel"
//          handleButtonClick={() => this.props.toggleModalUpdate()}
//          />
//          <CustomerButton buttontext="Edit"
//          color="green"
//          handleButtonClick={this.handleButtonClickUpdate(this.state.id)}
//          />
         
//          </div>

//          </Modal.Content>
         
        
//         </Modal>
//       );
//     }
    

// }