import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import axios from "axios";
import AllProducts from "./AllProducts";
import ShowProduct from './ShowProduct';
import Customer from './Customer';
import CustomerForm from './CustomerForm';



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
                  path="/customers/new"
                  render={(props) => <CustomerForm 
                    {...props}
                    setCustomer={this.props.setCustomer}             
                  />}
                />
                <Route 
                    exact
                    path="/customers/:id/edit"
                    render={(props) => <CustomerForm 
                        {...props}
                        setCustomer={this.props.setCustomer}             
                        currentCustomer={this.props.currentCustomer}
                        isUpdateForm={true}
                    />}
                />
                <Route exact path="/customers/:id" />
              </Switch>
            </div>
          </Router>
        )   
    }
}

export default Main