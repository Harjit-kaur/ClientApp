import React,{ Component} from "react";
import { Button, Icon, Form, Modal, ModalActions  } from 'semantic-ui-react';
import moment from 'moment/moment.js';
export class editSales extends Component{   
    constructor(props){
        super(props);
        this.state = {  
            open: false,
            customerId: this.props.editData.customerId,
            productId: this.props.editData.productId,
            storeId: this.props.editData.storeId,
            dateSold: this.props.editData.dateSold,
            customerOptions:[],
            productOptions:[],
            storeOptions:[]        }
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    showPopup = () => {
        this.setState({ open: !this.state.open });
    }
    componentDidMount() {
        this.getData();
    }   
    getData = () => {
        fetch('api/Sales/Index')
        .then(res=>res.json())
        .catch(error=>console.error('Error:',error))
        .then(result=>{
            this.setState({
                customerOptions: result.customers.map((name, id)=>({
                    key: result.customers[id].id,
                    text: result.customers[id].name,
                    value: result.customers[id].id,
                })
            )});
            this.setState({
                productOptions: result.products.map((name, id)=>({
                    key: result.products[id].id,
                    text: result.products[id].name,
                    value: result.products[id].id,
                })
            )});
            this.setState({
                storeOptions: result.stores.map((name, id)=>({
                    key: result.stores[id].id,
                    text: result.stores[id].name,
                    value: result.stores[id].id,
                })
            )});            
        });
    } 
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});       
    }
    handleChange = (e, result) => {
        const { name, value } = result;
        this.setState({
           [name]: value
        });
     };
    handleUpdate(event) {         
        event.preventDefault();     
        
        console.log(data)
        fetch(`api/Sales/Update`,{
            method: 'POST',
            body: JSON.stringify({
              id: this.props.editData.id,
              customerId: this.state.customerId,
              productId: this.state.productId,
              storeId: this.state.storeId,
              dateSold: this.state.dateSold,}),
            headers:{'Content-Type':'application/json'}
        })
        .then((res) =>{
            res.json(); 
            this.props.getDataEdit();            
        })        
        .catch(error => console.error('Error:', error))        
        .then(response=> {
            console.log(response);
           // window.location.reload();
        });
    }   
    render(){      
        return(
            <div className="contact"> 
                <Button color='yellow' onClick={this.showPopup}>
                <Icon name='edit'/>Edit </Button>
                <Modal
                open={this.state.open}
                size='tiny'>
                <Modal.Header>Edit Sales</Modal.Header>
                <Modal.Content>
                    <Form>
                    <Form.Input
                        type="text"                       
                        label='Date Sold'
                        defaultValue={moment(this.props.editData.dateSold).format('DD/MM/YYYY')}                        
                        onChange={this.onChange} name="dateSold"/>
                    <Form.Dropdown                       
                        label='Customers'      
                        placeholder='Customers'
                        fluid
                        search
                        selection
                        options={this.state.customerOptions} 
                        defaultValue={this.props.editData.customerId}
                        onChange={this.handleChange} name="customerId" />
                    <Form.Dropdown                       
                        label='Products'      
                        placeholder='Products'
                        fluid
                        search
                        selection
                        options={this.state.productOptions} 
                        defaultValue={this.props.editData.productId}
                        onChange={this.handleChange} name="productId" />
                    <Form.Dropdown                        
                        label='Stores'      
                        placeholder='Stores'
                        fluid
                        search
                        selection
                        options={this.state.storeOptions} 
                        defaultValue={this.props.editData.storeId}
                        onChange={this.handleChange} name="storeId" />
                    </Form>
                    <ModalActions>
                    <Button color='black' onClick={this.showPopup}>Cancel</Button>
                    <Button color='green' onClick={this.handleUpdate}>Edit
                    <Icon name='checkmark' /> </Button>
                    </ModalActions>
                </Modal.Content>
                </Modal>
            </div>            
        )
    }
}
export default editSales
