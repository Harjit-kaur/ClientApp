import React, { Component } from "react";
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import { Table, Dropdown, Pagination } from 'semantic-ui-react'
import 'moment-timezone';
import moment from 'moment/moment.js';
import DeleteSales from "./DeleteSales";
import EditSales from "./EditSales";
import CreateSales from "./CreateSales";
import './test.css';
export default class Sales extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      totalItems: 10,
      currentPage: 1,
      id: 0,
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

  getData = () => {
    axios.get('Sales/GetSales')
      .then((result) => {
        this.setState({
          data: result.data,
        });
      })
      .catch((error) => {
      });
  }

  options = [
    { key: 1, text: "5", value: 5 },
    { key: 2, text: "10", value: 10 },
    { key: 3, text: "20", value: 20 },
    { key: 4, text: "30", value: 30 },
  ];

  onDropdownChangeEvent = (event, { value }) => {
    this.setState({ totalItems: value, currentPage: 1 });
  };

  onPageChange = (event, data) => {
    this.setState({
      currentPage: data.activePage,
    });
  };

  onSort = (column) => (e) => {
    const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
    const sortedData = this.state.data.sort((a, b) => {
      const nameA = a.customer.name.toUpperCase();
      const nameB = b.customer.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
      return a.product.name - b.product.name;
      return a.store.name - b.store.name;
      return a.dateSold - b.dateSold;
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

    this.totalpages = parseInt(items.length / entries);
    if (items.length % entries !== 0) {
      this.totalpages++;
    }

    let skip = 0;
    skip = entries * (this.state.currentPage - 1);
    let start = skip + 1;
    let end = skip + entries;
    if (end > items.length) {
      end = items.length;
    }

    items = items.slice(start - 1, end);
    return (
      <div id='container'>
        <CreateSales
          getDataCreate={this.getData} />
        <Table id='table' celled className='ui table sortable striped' aria-labelledby="tabelLabel">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell onClick={this.onSort('customer.name')}>
                Customer
              <span className={this.setArrow('customer.name')}></span>
              </Table.HeaderCell>
              <Table.HeaderCell onClick={this.onSort('product.name')}>
                Product
              <span className={this.setArrow('product.name')}></span>
              </Table.HeaderCell>
              <Table.HeaderCell onClick={this.onSort('store.name')}>
                Store
              <span className={this.setArrow('store.name')}></span>
              </Table.HeaderCell>
              <Table.HeaderCell onClick={this.onSort('dateSold')}>
                Date Sold
              <span className={this.setArrow('dateSold')}></span>
              </Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map((item) => {
              return (
                <Table.Row>
                  <Table.Cell>{item.customer.name}</Table.Cell>
                  <Table.Cell>{item.product.name}</Table.Cell>
                  <Table.Cell>{item.store.name}</Table.Cell>
                  <Table.Cell>{moment(item.dateSold, "YYYY-MM-DD").format("DD/MM/YYYY")}</Table.Cell>
                  <Table.Cell>
                    <EditSales
                      getDataEdit={this.getData}
                      editData={item} />
                  </Table.Cell>
                  <Table.Cell>
                    <DeleteSales
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