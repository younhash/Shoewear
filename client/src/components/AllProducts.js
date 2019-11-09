import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AllProducts extends Component {

componentDidMount() {
    this.props.getAllProducts()
}

render() {
  return this.props.products.map(product => (
      <div key={product.id}>
        <img src={product.image} width="200" alt={product.name} /> <br/>
        {product.name} <br/>
        {product.color} <br/>
        {product.size} <br/>
        <hr />
      </div>
    ))
  }
}

export default AllProducts