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
      <div  key={product.id} className="card-group">
        {/* <Link to={`/products/${product.id}`} > Show product </Link>
        <img alt={product.name} src={product.image} />
        <p>{product.name}</p> */}
      
      {/* <div className="card-group"> */}
      <div className="card" style={{width: '18rem'}}>

      <img className="card-img-top" src={product.image} alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
          <p className="card-text"></p>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">Color: {product.color}</li>
        <li className="list-group-item">Size: {product.size}</li>
        <li className="list-group-item">Price: ${product.price}</li>
      </ul>

        <div className="card-body">
            <Link to={`/products/${product.id}`} className="card-link"> Show product </Link>
        </div>
      </div>

        <hr />
      </div>
      /* </div> */
    ))
  }
}



export default AllProducts