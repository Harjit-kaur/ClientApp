
import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
      <Navbar className="navbar navbar-expand-sm bg-dark navbar-dark">       
          <ul className="navbar-nav">
              <NavItem className="nav-item active">
                <NavLink tag={Link} className="nav-link" to="/">React</NavLink>
              </NavItem>              
              <NavItem className="nav-item">
              <NavLink tag={Link} className="nav-link" to="/customer">Customers</NavLink>
              </NavItem>
              <NavItem>
              <NavLink tag={Link} className="nav-link" to="/product">Products</NavLink>
              </NavItem>
              <NavItem>
              <NavLink tag={Link} className="nav-link" to="/store">Stores</NavLink>
              </NavItem>              
              <NavItem>
              <NavLink tag={Link} className="nav-link" to="/sale">Sales</NavLink>
              </NavItem>
            </ul>        
      </Navbar>
      <br/>
      <br/>
      </header>
    );
  }
}

// class="navbar navbar-expand-sm bg-dark navbar-dark navbar"