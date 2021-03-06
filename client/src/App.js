import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import AllProducts from "./components/AllProducts";
import ShowProduct from "./components/ShowProduct";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import customer from "./components/Customer";
import CustomerForm from "./components/CustomerForm";
// import 'bootstrap';
// import "custom";
// import "~bootstrap/scss/bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

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
      customersLoaded: false,
      date: ''
    }
  }

  componentDidMount() {
    const date = new Date().getDate()
    const month = new Date().getMonth() + 1
    const year = new Date().getFullYear()
    const hours = new Date().getHours()
    const min = new Date().getMinutes()
    const sec = new Date().getSeconds()
    
    this.setState({
      date:
        date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    })
  }
 

  getAllProducts = () => {
    axios.get("/products").then(jsonRes => {
      this.setState({
        products: jsonRes.data,
        productsLoaded: true
      });
    });
  };

  getAllCustomers = () => {
    axios.get("/customers").then(jsonRes => {
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
    console.log(customer);
  };

  // handleTransaction = async () =>{ 
  //   // console.log(this.props.currentCustomer);
    
  //     return (
  //       <div>
  //         <CustomerForm 
  //           currentProduct={this.state.currentProduct}  
  //         />
  //       </div>
  //     )
  // }

  render() {
    return (
      <div className="container">
        <Header />
        <Main
          date={this.state.date}

          getAllProducts={this.getAllProducts}
          products={this.state.products}
          productsLoaded={this.state.productsLoaded}
          setProduct={this.setProduct}

          currentProduct={this.state.currentProduct}
          setProduct={this.setProduct}
          handleDeleteProduct={this.handleDeleteProduct}
          // handleTransaction={this.handleTransaction}

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