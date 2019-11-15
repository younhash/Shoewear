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
            
          <div className="carousel slide" data-ride="carousel">
            {/* <Router>
                <Link exact="true" to="/">
                    <h1>Shoewear</h1>
                </Link>
                <h3>Header</h3> */}
            {/* <Link exact="true" to="/customers/new" > Sign in </Link> */}
            {/* </Router> */}
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2017/02/12/16/46/shoes-2060519_960_720.jpg" alt="First slide" />
                    </div>

                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2017/02/12/16/46/shoes-2060519_960_720.jpg" alt="Second slide" />
                    </div>

                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2017/02/12/16/46/shoes-2060519_960_720.jpg" alt="Third slide" />
                    </div>

                </div>
            {/* <img src="https://cdn.pixabay.com/photo/2017/02/12/16/46/shoes-2060519_960_720.jpg" class="img-fluid" alt="Responsive image" /> */}
          </div>
        )
    }
}
export default Header;