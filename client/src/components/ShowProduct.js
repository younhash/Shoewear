import React, { Component } from 'react';
import axios from "axios";


class ShowProduct extends Component {

  constructor(props){
    super(props)
    this.state = {
        viewShoe: []
    }
  }
  
  async componentDidMount(){
    // const id = this.props.match.params.id
    // console.log(id);
    const view = await axios.get("http://localhost:3000/products/" + 1)
    console.log(view);
    this.setState = ({
        viewShoe: JSON.data
    })  
  }

   handleDelete = async ()=>{
    await axios.delete('http://localhost:3000/products/' +  this.props.product.id)
  }

  render() {
    const viewShoe = this.state.viewShoe
    return (
      <div>
        {/* <img src={product.image} width="300" alt={product.name} /> */}
        <h1>{viewShoe.name}</h1>
        <button onClick={this.handleDelete}> delete</button>
      </div>
    )
    }
}

export default ShowProduct;