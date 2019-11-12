import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AllProducts extends Component {

componentDidMount() {
  if(!this.props.productsLoaded) {
      this.props.getAllProducts()
  }
}

render() {
  return this.props.products.map(product => (
      <div key={product.id}>
        <Link to={`/products/${product.id}`} > Show product </Link>
        <img alt={product.name} src={product.image} />
        <p>{product.name}</p>
        <hr />
      </div>
    ))
  }
}

export default AllProducts