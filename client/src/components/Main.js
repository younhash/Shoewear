import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import axios from "axios";
import AllProducts from "./AllProducts";
import ShowProduct from './ShowProduct';
import Customer from './Customer';


class Main extends Component {
    constructor(props){
        super()
      }
    // componentDidMount() {
        // this.props.getAllProducts
        // this.setState=({

        // })
    // }

    render() {
        console.log(this.props.products);
        console.log(this.props.customers);
        return (
            <Router>
            <div className="">           
              <Switch>       
                <Route
                  exact
                  path="/products/:id"
                  render={(props) => <ShowProduct 
                    currentProduct={this.props.currentProduct}
                    setProduct={this.props.setProduct}
                    handleDeleteProduct={this.props.handleDeleteProduct}
                    {...props}
                    />}
                />
                <Route
                  exact
                  path="/products"
                  render={() => (
                    <AllProducts
                      getAllProducts={this.props.getAllProducts}
                      products={this.props.products}
                      productsLoaded={this.props.productsLoaded}
                      setProduct={this.setProduct}
                    />
                  )}
                />
                <Route
                  exact
                  path="/customers"
                  render={() => (
                    <Customer
                        getAllCustomers={this.props.getAllCustomers}
                        customers={this.props.customers}
                        currentCustomer={this.props.currentCustomer}
                        setCustomer={this.props.setCustomer}
                    />
                  )}
                />
              </Switch>
            </div>
          </Router>
        )   
    }
}

export default Main