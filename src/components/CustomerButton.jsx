import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export default class CustomerButton extends Component {


    constructor(props) {
      super(props);    
    };
    render() {
     return(
        <div>
       <Button color={this.props.color} onClick={this.props.handleButtonClick} >{this.props.buttontext}</Button>
       
     </div>)
   
     };     }

 