import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import AllProducts from "./components/AllProducts";
import "./App.css";
import ShowProduct from "./components/ShowProduct";

class App extends Component {
  
  constructor(props){
    super()
    this.state = {
      products: []
    };
  }
 
  getAllProducts = () => {
    axios.get("http://localhost:3000/products").then(json => {
      this.setState({
        products: json.data       
      });
      console.log(this.state.products);
    });
  };

  viewProduct = () => {
    const id = this.props.match.params.id
      axios.get("http://localhost:3000/teachers/" + id)
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Link to="/">Shoewear</Link>
          <Switch>
            {/* All product route */}
            <Route exact path="/"
              render={() => (
                <AllProducts
                  getAllProducts={this.getAllProducts}
                  products={this.state.products}
                />
              )}
            />
            {/* show */}
            <Route exact
              path="/products/:id"
              render={(props) => <ShowProduct 
              products={this.state.products}
              />}
            />
            <link></link>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;