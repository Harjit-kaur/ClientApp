import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export default class ProductButton extends Component {


    constructor(props) {
      super(props);    
    };
    render() {
     return(
        <div>
       <Button color='blue' onClick={this.props.handleButtonClick} >{this.props.buttontext}</Button>
       
     </div>)
   
     };     }

 