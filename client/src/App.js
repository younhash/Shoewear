import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import AllProducts from "./components/AllProducts";
import ShowProduct from "./components/ShowProduct";
import Main from "./components/Main";


import "./App.css";

class App extends Component {
  constructor(props){
    super()
    this.state = {
      products: [],
      currentProduct: {},
      productsLoaded: false
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

  render() {
    return (
      <div className="App">
        {/* <Link exact="true" to="/">
                home
              </Link> */}
        <Main 
          getAllProducts={this.getAllProducts}
          products={this.state.products}
          productsLoaded={this.state.productsLoaded}
          setProduct={this.setProduct}

          currentProduct={this.state.currentProduct}
          setProduct={this.setProduct}
          handleDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;