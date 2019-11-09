import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from './Main';
import ShowProduct from './ShowProduct';

class AllProducts extends Component {

    constructor(props){
        super(props)
        this.state = {
            // products: []
        };
    }

// componentDidMount() {
//     this.props.getAllProducts
// }

render() {
  return this.props.products.map(product => (
      <div key={product.id}>
        <img src={product.image} width="200" alt={product.name} /> <br/>
        {product.name} <br/>
        {product.color} <br/>
        {product.size} <br/>
        <Link to={`/products/${product.id}`} > View </Link>
        <hr />
      </div>
    ))
  }
}

export default AllProducts