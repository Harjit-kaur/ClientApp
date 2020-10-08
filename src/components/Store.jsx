import React, { Component } from 'react';
import axios from "axios";
import StoreButton from "./StoreButton";
import { Table, Modal, Button } from 'semantic-ui-react';
import StoreModal from "./StoreModal";
export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      buttontext: "New Store",
      id:0,
      open: false
     };
    
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get('Stores/GetStore')
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
    axios.post('Stores/Poststore', {
      
      name: 'HP',
      address: 'India'
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
    .delete(`Stores/DeleteStore/${id}`)
  .then((result) => {
    console.log(result);
    this.getData();
    this.props.toggleModalDelete()
  })
    .catch((error) => {
      console.log(error);
    });
  
  
  };

  handleButtonClickUpdate = (editid) => {
    console.log(editid);
    axios.put(`Stores/PutStore/${editid}`,{
      id: editid,
      name: 'Optus',
      address: 'Dandenong',
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
        <StoreModal
          open={this.state.open}
          toggleModal={this.toggleModal}
          getData={this.getData}
        />
        
        <StoreButton buttontext ={this.state.buttontext}
        handleButtonClick={this.toggleModal}
        />
         <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {items.map((item) => {
          
          return (
      <Table.Row>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.address}</Table.Cell>
        <Table.Cell>
        <StoreButton buttontext="Edit"
        handleButtonClick={() => this.handleButtonClickUpdate(item.id)} />
      
          </Table.Cell>
          <Table.Cell>
          <StoreButton buttontext="Delete" color='red'
        handleButtonClick={() => this.handleButtonClickDelete(item.id)} />
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
      //           Location
      //         </th>
      //         </tr>
      //     </thead>
      //     <tbody>         
        
      //   {items.map((item) => {
          
      //     return (
      //       <tr>
      //           <td>{item.name}</td>
      //         <td>{item.address}</td>
      //       </tr>
            
      //   );

      //   })}
      //   </tbody>
      //   </table>
      // </div>
    );
  }
}

