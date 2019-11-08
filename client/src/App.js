import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import AllProducts from "./components/AllProducts";
import "./App.css";

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


  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/">Shoewear</Link>
          <Switch>
            <Route exact path="/"
              render={() => (
                <AllProducts
                  getAllProducts={this.getAllProducts}
                  products={this.state.products}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;