import React, { Component } from 'react'
import { Button, Form, Modal, Placeholder } from 'semantic-ui-react'
import ProductButton from "./ProductButton";
import axios from "axios";  

export default class CustomerEdit extends Component {
    
    constructor(props) {
        super(props);
        this.setState = {
            name:"name",
            address:"address"
        };
    }
        




handleButtonClickUpdate = (editid) => {
    console.log(editid);
    axios.put(`Products/PutProduct/${editid}`,{
      id: editid,
      name: "name",
      address: "address"
    })
  .then((result) => {
    console.log(result);
    this.props.getData();
    this.props.toggleModalUpdate();
  })
    .catch((error) => {
      console.log(error);
    });
  }
  renderTextField = (label, placeholder) => {
      return (
          <Form.Field>
              <label>{label}</label>
              <input placeholder={placeholder} onChange={(e) => this.setState({[label]: e.target.value})}/>
          </Form.Field>
      )
  }
  

render()
{
    return (
        <Modal
              open={this.props.open}
        className='Semantic-Modal'         

          size='tiny'
        >
          <Modal.Header>Edit Customer</Modal.Header>
          <Modal.Content>
            <Form>
                
                    {this.renderTextField("Name", "name")}
                    {this.renderTextField("Address", "address")}
                
            </Form>
            <div align="right">
         <ProductButton buttontext="Cancel"
         handleButtonClick={() => this.props.toggleModalUpdate()}
         />
         <ProductButton buttontext="Edit"
         color="green"
         handleButtonClick={this.handleButtonClickUpdate}
         />
         
         </div>

         </Modal.Content>
         
        
        </Modal>
      );
    }
    

}