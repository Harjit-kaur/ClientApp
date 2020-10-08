import React, { Component } from 'react';
import axios from "axios";
import { Table, Dropdown, Pagination } from 'semantic-ui-react';
import CreateStore from "./CreateStore";
import EditStore from "./EditStore";
import DeleteStore from "./DeleteStore";
import './test.css';
export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //database data
      data: [],
      //No of total entries to show at a time
      totalItems: 10,
      currentPage: 1,
      sort: {
        column: null,
        direction: 'desc',
      },
    };
    this.onSort = this.onSort.bind(this)
  }
  componentDidMount() {
    this.getData();
  }
  //get data using Axios
  getData = () => {
    axios.get('Stores/GetStore')
      .then((result) => {
        this.setState({
          data: result.data,
        });
      })
      .catch((error) => {
      });
  }
  //number of entries dropdown options
  options = [
    { key: 1, text: "5", value: 5 },
    { key: 2, text: "10", value: 10 },
    { key: 3, text: "20", value: 20 },
    { key: 4, text: "30", value: 30 },
  ];
  //on changing of number of entries
  onDropdownChangeEvent = (event, { value }) => {
    this.setState({ totalItems: value, currentPage: 1 });
  };
  //on changing of page number
  onPageChange = (event, data) => {
    this.setState({
      currentPage: data.activePage,
    });
  };
  //Sorting the columns
  onSort = (column) => (e) => {
    const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
    const sortedData = this.state.data.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
      return a.price - b.price;
    });
    if (direction === 'desc') {
      sortedData.reverse();
    }
    this.setState({
      data: sortedData,
      sort: {
        column,
        direction,
      }
    });
  };
  //Setting the sorting arrow in descending and ascending direction
  setArrow = (column) => {
    let className = 'sort-direction';
    if (this.state.sort.column === column) {
      className += this.state.sort.direction === 'asc' ? ' asc' : ' desc';
    }
    return className;
  };
  render() {
    let items = this.state.data;
    let entries = this.state.totalItems;

    //Calculating total pages
    this.totalpages = parseInt(items.length / entries);
    if (items.length % entries !== 0) {
      this.totalpages++;
    }

    //Calculating number of entries to show
    let skip = 0;
    skip = entries * (this.state.currentPage - 1);
    let start = skip + 1;
    let end = skip + entries;
    if (end > items.length) {
      end = items.length;
    }
    //Truncate customer according to number of entries
    items = items.slice(start - 1, end);

    return (
      <div id='container'>
        <CreateStore
          getDataCreate={this.getData} />
        <Table id='table' celled className='ui table sortable striped' aria-labelledby="tabelLabel">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell onClick={this.onSort('name')}>
                Name
              <span className={this.setArrow('name')}></span>
              </Table.HeaderCell>
              <Table.HeaderCell onClick={this.onSort('address')}>
                Address
              <span className={this.setArrow('address')}></span>
              </Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {/* mapping the store data */}
            {items.map((item) => {
              return (
                <Table.Row>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.address}</Table.Cell>
                  <Table.Cell>
                    <EditStore
                      getDataEdit={this.getData}
                      editData={item} />
                  </Table.Cell>
                  <Table.Cell>
                    <DeleteStore
                      getDataDelete={this.getData}
                      deleteId={item.id} />
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <br />
        <span>
          <Dropdown
            id="footerdropdown"
            defaultValue={5}
            compact
            selection
            options={this.options}
            onChange={this.onDropdownChangeEvent}
          />
          <Pagination
            id="pagination"
            defaultActivePage={1}
            totalPages={this.totalpages}
            onPageChange={this.onPageChange}
          />
        </span>
      </div>
    );
  }
}

