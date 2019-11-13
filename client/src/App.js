import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import AllProducts from "./components/AllProducts";
import ShowProduct from "./components/ShowProduct";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import customer from "./components/Customer";

import "./App.css";

class App extends Component {
  constructor(props){
    super()
    this.state = {
      products: [],
      currentProduct: {},
      productsLoaded: false,
      customers: [],
      currentCustomer: {},
      customersLoaded: false
    };
  }
 

  getAllProducts = () => {
    axios.get("http://localhost:3000/products").then(jsonRes => {
      this.setState({
        products: jsonRes.data,
        productsLoaded: true
      });
    });
  };

  getAllCustomers = () => {
    axios.get("http://localhost:3000/customers").then(jsonRes => {
      this.setState({
        customers: jsonRes.data,
        customersLoaded: true
      });
    });
  };

  handleDeleteProduct = (removedProduct)=> {
    this.setState({
      products: this.state.products.filter(product => product.id !== removedProduct.id)
    })
  }

  setProduct = (product) => {
    this.setState({
      currentProduct: product
    });
    console.log(this.state.currentProduct);
  };

  setCustomer = (customer) => {
    this.setState({
      currentCustomer: customer
    });
    console.log(this.state.currentCustomer);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main 
          getAllProducts={this.getAllProducts}
          products={this.state.products}
          productsLoaded={this.state.productsLoaded}
          setProduct={this.setProduct}

          currentProduct={this.state.currentProduct}
          setProduct={this.setProduct}
          handleDeleteProduct={this.handleDeleteProduct}

          getAllCustomers={this.getAllCustomers}
          customers={this.state.customers}
          customersLoaded={this.state.customersLoaded}
          currentCustomer={this.state.currentCustomer}
          setCustomer={this.setCustomer}
        />
        <Footer />
      </div>
    );
  }
}

export default App;