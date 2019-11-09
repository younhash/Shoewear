import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import ShowProduct from "./ShowProduct";
import AllProducts from "./AllProducts";


class Main extends Component {
    constructor(props){
        super()
        this.state = {
        //   products: []
        };
      }
    // componentDidMount() {
    //     // this.props.getAllProducts
    //     this.setState=({

    //     })
    // }



  // viewProduct = () => {
  //   // const id = this.props.match.params.id
  //     axios.get("http://localhost:3000/teachers/" + 1)
  // }

    render() {
        console.log(this.props.products);
        return (
            <Router>
            <div className="">
              <Link to="/products">products </Link>
              <Link to="/products/:id">linkmain</Link>

              <Switch>
                {/* All product route */}
                <Route exact path="/products"
                  render={() => (
                    <AllProducts
                    // getAllProducts={this.getAllProducts}
                      products={this.props.products}
                    />
                  )}
                />
                {/* show */}
                <Route exact
                  path="/products/:id"
                  render={(props) => (
                  <ShowProduct
                    products={this.state.products}
                    // viewProduct={this.viewProduct}
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