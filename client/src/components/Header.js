import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Header extends Component {
    constructor(props){
        super()
        this.state = {

        };
    }

    render() {
        // const product = this.props.currentProduct
        // console.log(product);
        
        return (
            
          <div>
            <Router>
                <Link exact="true" to="/">
                    <h1>Shoewear</h1>
                </Link>
                <h3>Header</h3>

         
            <Link exact="true" to="/customers/new/" > Sign in </Link>
            </Router>
          </div>
        )
    }
}
export default Header;