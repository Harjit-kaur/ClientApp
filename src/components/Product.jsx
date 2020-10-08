import React, { Component } from 'react';
import axios from "axios";
import { Table, Modal, Button } from 'semantic-ui-react';
import ProductButton from "./ProductButton";
import ProductModal from "./ProductModal";
import ProductEdit from "./ProductEdit";
import ProductDelete from "./ProductDelete";
export default class Product extends Component {


  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      buttontext: "NewProduct",
      id: 0,
      open: false,
      openDelete: false,
      openUpdate: false
     };
    
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
  axios.get('Products/GetProduct')
  .then((result) => {
    console.log(result.data);
    this.setState({
      data: result.data,
    });
  })
  .catch((error) => {
    console.log(error);
  });
}

handleButtonClick = () => {
  axios.post('Products/PostProduct', {
    
    name: 'HP',
    price: 600
  })
.then((result) => {
  console.log(result);
  this.getData();
})
  .catch((error) => {
    console.log(error);
  });


}

handleButtonClickDelete = (id) => {
  axios
  .delete(`Products/DeleteProducts/${id}`)
.then((result) => {
  console.log(result);
  this.getData();
  this.props.toggleModalDelete();
})
  .catch((error) => {
    console.log(error);
  });


};

handleButtonClickUpdate = (editid) => {
  console.log(editid);
  axios.put(`Products/PutProduct/${editid}`,{
    id: editid,
    name: 'Nike',
    price: 200,
  })
.then((result) => {
  console.log(result);
  this.getData();
})
  .catch((error) => {
    console.log(error);
  });
}
toggleModal = () => {
  this.setState({
    open: !this.state.open
  })
}
toggleModalDelete = () => {
  this.setState({
    open: !this.state.open
  })
}
toggleModalUpdate = () => {
  this.setState({
    open: !this.state.open
  })
}


  render() {
    let items = this.state.data;
    return (
      <div>
        <ProductModal
          open={this.state.open}
          toggleModal={this.toggleModal}
          getData={this.getData}
        />
        <ProductDelete 
        open={this.state.openDelete}
        toggleModalDelete={this.toggleModalDelete}
        />
        <ProductEdit
        open={this.state.openUpdate}
        toggleModalUpdate={this.toggleModalUpdate}
        />
        <ProductButton buttontext ={this.state.buttontext}
        handleButtonClick={this.toggleModal}
        />
         <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {items.map((item) => {
          
          return (
      <Table.Row>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.price}</Table.Cell>
        <Table.Cell>
        <ProductButton buttontext="Edit"
        handleButtonClick={() => this.toggleButtonUpdate(item.id)} />
      
          </Table.Cell>
          <Table.Cell>
          <ProductButton color='blue' buttontext="Delete"
        handleButtonClick={() => this.toggleButtonDelete(item.id)} />
  </Table.Cell>
          </Table.Row>
          );
    })}
    </Table.Body>
    </Table>
    </div>
      // <div>
      //         <table className="table">
      //     <thead>
      //       <tr>
                         
  
      //         <th>
      //           Name
      //         </th>
      //         <th>
      //           Price
      //         </th>
      //         </tr>
      //     </thead>
      //     <tbody>         
        
      //   {items.map((item) => {
          
      //     return (
      //       <tr>
      //           <td>{item.name}</td>
      //         <td>{item.price}</td>
      //       </tr>
            
      //   );

      //   })}
      //   </tbody>
      //   </table>
      // </div>
    );
  }
}

