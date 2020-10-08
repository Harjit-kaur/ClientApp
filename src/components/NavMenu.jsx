import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
// import {  Container, Divider, Dropdown, Grid, Header, Image, List,Menu,Segment,} from 'semantic-ui-react';

// export default class Customer extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return(
//       <div>
//     <Menu fixed='top' inverted>
//       <Container>
//         <Menu.Item as='a' header>
          
//           Onboarding Task
//         </Menu.Item>
//         <Menu.Item as='a'>Customer</Menu.Item>
//         <Menu.Item as='a'>Store</Menu.Item>
//         <Menu.Item as='a'>Product</Menu.Item>
//         <Menu.Item as='a'>Sale</Menu.Item>


        
//       </Container>
//     </Menu>

    
//   </div>

//     )
//   }
  
// }
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
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">Onboarding_Task</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={Link} className="text-dark" to="/customer">Customer</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={Link} className="text-dark" to="/store">Store</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={Link} className="text-dark" to="/product">Product</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={Link} className="text-dark" to="/sale">Sale</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
