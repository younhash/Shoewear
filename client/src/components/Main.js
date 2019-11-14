import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import axios from "axios";
import AllProducts from "./AllProducts";
import ShowProduct from './ShowProduct';
import Customer from './Customer';
import CustomerForm from './CustomerForm';
import CustomerReceipt from './CustomerReceipt';



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

                    getAllCustomers={this.props.getAllCustomers}
                    customers={this.props.customers}
                    customersLoaded={this.props.customersLoaded}
                    currentCustomer={this.props.currentCustomer}
                    setCustomer={this.props.setCustomer}
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
                    getAllCustomers={this.props.getAllCustomers}
                    customers={this.props.customers}
                    customersLoaded={this.props.customersLoaded}
                    currentCustomer={this.props.currentCustomer}
                    setCustomer={this.props.setCustomer}
                    isUpdateForm={false}          
                    {...props}
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
                <Route 
                    exact
                    path="/customers"
                    render={(props) => <Customer 
                      getAllCustomers={this.props.getAllCustomers}
                      customers={this.props.customers}
                      customersLoaded={this.props.customersLoaded}
                      currentCustomer={this.props.currentCustomer}
                      setCustomer={this.props.setCustomer}
                      isUpdateForm={true}          
                      {...props}
                    />}
                />
              </Switch>
            </div>
          </Router>
        )   
    }
}

export default Main