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
      const productData = await axios.get("/products/" + id)
      this.props.setProduct(productData.data)
    } 
  }

  handleTransaction = async (props) =>{ 

    // No delete for now
    // await axios.post('http://localhost:3000/orders/' + )
    // await axios.delete('http://localhost:3000/products/' +  this.props.currentProduct.id)
    // this.props.handleDeleteProduct(this.props.currentProduct)
    this.props.history.push('/customers/new')

    // Experiment and same one in App.js
    // if (this.props.currentProduct && this.props.currentProduct.name) {
    //   return <CustomerForm 
    //       currentProduct={this.props.currentProduct}  
    //   />
    // }
  }

  render() {    
    return (
    
      <div class="media" style={{backgroundColor: 'black', color: 'white'}}>
        <img src={this.props.currentProduct.image} style={{width: '18rem'}} alt={this.props.currentProduct.name} class="mr-3" />
        <div class="media-body">
          <h5 class="mt-0">{this.props.currentProduct.name}</h5>
          <p>Color: {this.props.currentProduct.color}</p>
          <p>Size: {this.props.currentProduct.size}</p>
          <p>Price: ${this.props.currentProduct.price}</p>
          <p>{this.props.currentProduct.name} is the best in town !</p>
          <br /> <br />
        <button onClick={this.handleTransaction}><h1>Buy</h1></button>
      </div>
    </div>
    )
    }
}

export default ShowProduct;