import React, { Component } from 'react';
import axios from "axios";
import { Table } from 'semantic-ui-react';
export default class Sale extends Component {


  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      buttontext: "New Sale",
      id:0
     };
    
  }

  componentDidMount() {
    this.getData();
    
  }

  getData = () => {

    axios.get('Sales/GetSales')
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
    axios.post('Sales/PostSales', {
      
      id: 28,
       dateSold: Date
    })
  .then((result) => {
    console.log(result);
    this.getData();
  })
    .catch((error) => {
      console.log(error);
    });
  
  
  }

  handleButtonClickDelete = () => {
    axios
    .delete("Sales/DeleteSales/28")
  .then((result) => {
    console.log(result);
    this.getData();
  })
    .catch((error) => {
      console.log(error);
    });
  
  
  };
  

  render() {
    let items = this.state.data;
    return (
      <div>
              <table className="table">
          <thead>
            <tr>
                         
  
              <th>
                ID
              </th>
              <th>
                DateSold
              </th>
              </tr>
          </thead>
          <tbody>         
        
        {items.map((item) => {
          
          return (
            <tr>
                <td>{item.id}</td>
              <td>{item.dateSold}</td>
            </tr>
            
        );

        })}
        </tbody>
        </table>
      </div>
    );
  }
}

