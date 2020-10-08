
import React, {Component} from 'react';
import axios from 'axios';
import { Modal, Button, Header, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
export default class CustomerDelete extends Component
{
    constructor(props){
        super(props);        
        this.state = {
            id:this.props.id,
            deleteModal: false,  
        }   
    }
    //Delete handler
    handleButtonClickDelete = (id) => {
        axios
          .delete(`Customers/DeleteCustomer/${id}`)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
          this.setState({deleteModal:false})
      };
    render(){
        const { deleteModal, id } = this.state;
          return (
             <div>
                <Modal size="tiny"
                    onClose={this.deleteModal} open={deleteModal}
                    trigger={<Button color="red" onClick={() => this.setState({ deleteModal: true})}><Icon className='trash alternate' /> DELETE</Button>}   >
                    <Header content="Delete customer" />
                    <Modal.Content><h4> Are you sure?</h4></Modal.Content>
                    <Modal.Actions>
                        <Button color="black" onClick={() => this.setState({deleteModal:false})}>Cancel</Button>
                        <Button color="red" onClick={ this.handleButtonClickDelete(id)}> <i className="icon delete" />Delete</Button>
                        {/* <Button color="red" onClick={() => handleButtonClickDelete(id)}> <i className="icon delete" />Delete</Button> */}
                    </Modal.Actions>
                </Modal>      
            </div>
        );
    }
}// import React, { Component } from 'react'
// import { Button, Form, Modal } from 'semantic-ui-react'
// import CustomerButton from "./CustomerButton";
// import axios from "axios";  

// export default class CustomerModal extends Component {
    
//     constructor(props) {
//         super(props); 
//         this.state = {
//           id:0
//         }
        
// }
  

// render()
// {
//     return (
//         <Modal
//               open={this.props.open}
//         className='Semantic-Modal'  
//           size='mini'
//         >
//           <Modal.Header>Delete Customer</Modal.Header>
//           <Modal.Content>
//             <h3>
//                 Are you Sure?
//             </h3>
//             <div align="right">
//          <CustomerButton buttontext ="Cancel"
//          color='black'
//          handleButtonClick={() => this.props.toggleModalDelete()}
//          />
//          <CustomerButton buttontext ="Delete"
//          color="red"
//          handleButtonClick={this.handleButtonClickDelete}
//          />
         
//          </div>
//          </Modal.Content>
         
        
//         </Modal>
//       );
//     }
    

// }