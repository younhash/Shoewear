import React, { Component } from 'react';
import axios from "axios";


class ShowProduct extends Component {

  async componentDidMount(){
    const id = this.props.match.params.id
    if (this.props.currentProduct.id !== id){
      const productData = await axios.get("http://localhost:3000/products/" + id)
      this.props.setProduct(productData.data)
    } 
  }

   handleDelete = async ()=>{
    await axios.delete('http://localhost:3000/products/' +  this.props.currentProduct.id)
    this.props.handleDeleteProduct(this.props.currentProduct)
    this.props.history.push('/')
  }

  render() {
    const product = this.props.currentProduct
    console.log(product);
    
    return (
      <div>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <button onClick={this.handleDelete}> delete!!!</button>
      </div>
    )
    }
}

export default ShowProduct;