import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import axios from "axios";
import AllProducts from "./AllProducts";
import ShowProduct from './ShowProduct';


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
              </Switch>
            </div>
          </Router>
        )   
    }
}

export default Main