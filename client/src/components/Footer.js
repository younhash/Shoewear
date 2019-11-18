import React, { Component } from "react";

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
          <div class="card text-center" style={{width: '100%'}}>
     
          <div class="card-body">
            <p class="card-text">Images from pixabay</p>
            <a href="#" class="btn btn-">github/younhash</a>
          </div>
          <div class="card-header">
            Created by Mohammad @ GA 2009
          </div>

        </div>
        )
    }
}
export default Header;