import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import axios from "axios";

class App extends Component {

  constructor(props){
    super()
    this.state = {
      products: []
    };
  }
  
  // getAllProducts = () => {
  //   axios.get("http://localhost:3000/products").then(json => {
  //     this.setState({
  //       products: json.data       
  //     });
  //     console.log(this.state.products);
  //   });
  // };

  async componentDidMount() {
    await axios.get("http://localhost:3000/products").then(json => {
      this.setState({
        products: json.data       
      });
      console.log(this.state.products);
    });
  }

  render() {
    
    console.log(this.state.products);
    return (
      <div className="App">
         {/* getAllProducts={this.state.getAllProducts} */}
         <Main products={this.state.products} />
      </div>
    );
  }
}

export default App;