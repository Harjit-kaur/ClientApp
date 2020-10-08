import React, { Component} from 'react';
import axios from "axios";
import {Table} from 'semantic-ui-react';
import CustomerModal from "./CustomerModal";
import CustomerDelete from "./CustomerDelete";
import CustomerEdit from "./CustomerEdit";
export default class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: 0,
      name: '',
      address: '',
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axios.get('Customers/GetCustomer')
      .then((result) => {
        console.log(result.data);
        this.setState({
          data: result.data,
        });
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
    //Update/display the table after modification
    componentDidUpdate = () => {
        this.getData();
    }
  render() {
    let items = this.state.data;
    return (
      <div>
        <CustomerModal />  {/* Modal to create new customer*/} 
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
                  <Table.Cell><CustomerEdit id={item.id} name={item.name} address={item.address} /> </Table.Cell>
                  <Table.Cell><CustomerDelete id={item.id} /> </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}// import React, { Component, Fragment } from 'react';
// import axios from "axios";
// import CustomerButton from "./CustomerButton";
// import { Table, Modal, Button } from 'semantic-ui-react';
// import CustomerModal from "./CustomerModal";
// import CustomerDelete from "./CustomerDelete";
// import CustomerEdit from "./CustomerEdit";

// export default class Customer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       buttontext: "New Customer",
//       id: 0,
//       open: false,
//       openDelete: false,
//       openUpdate: false

      
//     };

//   }

//   componentDidMount() {
//     this.getData();

//   }
//   getData = () => {
//     axios.get('Customers/GetCustomer')
//       .then((result) => {
//         console.log(result.data);
//         this.setState({
//           data: result.data,
//         });
//         console.log(this.state.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });


//   }

//   handleButtonClick = () => {
//     axios.post('Customers/PostCustomer', {

//       name: "Clovis",
//       Address: "Brisbane"
//     })
//       .then((result) => {
//         console.log(result);
//         this.getData();
//       })
//       .catch((error) => {
//         console.log(error);
//       });


//   }

//   handleButtonClickDelete = (id) => {
//     const {data} = this.setState;
//     axios
//       .delete(`Customers/DeleteCustomer/${id}`)
//       .then((result) => {
//         console.log(result);
//         this.getData();
//         this.props.toggleModalDelete();
//       })
//       .catch((error) => {
//         console.log(error);
//       });


//   };


//   handleButtonClickUpdate = (editid) => {
//     console.log(editid);
//     axios.put(`Customers/PutCustomer/${editid}`, {
//       id: editid,
//       name: 'Clovis',
//       address: 'Brisbane',
//     })
//       .then((result) => {
//         console.log(result);
//         this.getData();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   toggleModal = () => {
//     this.setState({
//       open: !this.state.open
//     })
//   }


//   toggleModalDelete = () => {
//     this.setState({
//       open: !this.state.open
//     })
//   }
//   // toggleModalUpdate = () => {
//   //   this.setState({
//   //     open: !this.state.open
//   //   })
//   // }
  



//   render() {
//     let items = this.state.data;
//     return (
//       <div>
//         <CustomerModal
//           open={this.state.open}
//           toggleModal={this.toggleModal}
//           getData={this.getData}
//         />        
//        <CustomerButton buttontext={this.state.buttontext}
//         color='blue'
//           handleButtonClick={this.toggleModal}
//         />

// <CustomerDelete 
//         open={this.state.openDelete}
//         toggleModalDelete={this.toggleModalDelete}
//         />
//         {/* <CustomerEdit
//         name={this.state.name}
//         address={this.state.address}
//         id={this.state.id}
//         open={this.state.openUpdate}
//         toggleModalUpdate={this.toggleModalUpdate}
//         /> */}

//         <Table celled>
//           <Table.Header>
//             <Table.Row>
//               <Table.HeaderCell>Name</Table.HeaderCell>
//               <Table.HeaderCell>Address</Table.HeaderCell>
//               <Table.HeaderCell>Actions</Table.HeaderCell>
//               <Table.HeaderCell>Actions</Table.HeaderCell>
//             </Table.Row>
//           </Table.Header>

//           <Table.Body>
//             {items.map((item) => {

//               return (
//                 <Table.Row>
//                   <Table.Cell>{item.name}</Table.Cell>
//                   <Table.Cell>{item.address}</Table.Cell>
//                   <Table.Cell>
//                     {/* <CustomerButton buttontext="Edit" color='blue'
//                       handleButtonClick={() => this.toggleModalUpdate(item.id, item.name, item.address)} /> */}
//                       <CustomerEdit id={item.id} name={item.name} address={item.address} open={this.state.openUpdate}
//         toggleModalUpdate={this.toggleModalUpdate}
//         />
//                   </Table.Cell>
//                   <Table.Cell>
//                     <CustomerButton buttontext="Delete" color='red'
//                       handleButtonClick={() => this.handleButtonClickDelete(item.id)} />
//                   </Table.Cell>
//                 </Table.Row>
//               );
//             })}
//           </Table.Body>
//         </Table>
//       </div>


//     );
//   }
// }

