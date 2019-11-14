import React, { Component } from 'react';
import axios from "axios";
import CustomerForm from './CustomerForm';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'


class ShowProduct extends Component {
    constructor(props) {
        super(props);
    }   

  async componentDidMount(){
    const id = this.props.match.params.id
    if (this.props.currentProduct.id !== id){
      const productData = await axios.get("http://localhost:3000/products/" + id)
      this.props.setProduct(productData.data)
    } 
  }

  goForm = (props) => {
    this.props.history.push(`/customers/new`)
  }

   handleTransaction = async () =>{ 
    // console.log(this.props.currentCustomer);
    
    // await axios.post('http://localhost:3000/orders/' + )
    // await axios.delete('http://localhost:3000/products/' +  this.props.currentProduct.id)
    // this.props.handleDeleteProduct(this.props.currentProduct)
    this.props.history.push('/customers/new')
  }

  render() {
    const product = this.props.currentProduct
    console.log(product);
    
    return (
      <div>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <button onClick={this.handleTransaction}><h2>Buy</h2></button>
        {/* {!this.props.currentCustomer.hasOwnProperty('id') ? (
            <button onClick={this.goForm}> Sign up to proceed</button>
        ) : (
            <button onClick={this.handleTransaction}>Buy</button>
        ) */}
      </div>
    )
    }
}

export default ShowProduct;