import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'

class CustomerForm extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        address: ''
    }
    
    async componentDidMount() {
        if(!this.props.isUpdateForm) {
            return
        }
        const id = this.props.match.params.id
        if(this.props.currentCustomer.id !== id) {
            const res = await axios.get(`http//localhost:3000/customers/${id}`)
            const { first_name, last_name, email, address} = res.data.customer
            this.setState({
                first_name,
                last_name,
                email,
                address
            })
        } else {
            const {first_name,last_name,email,address} = this.props.currentCustomer
        }
    }

    handleFormChange = (e) => {
        const { name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault()
        const id = this.props.match.params.id
        const res = this.props.isUpDateForm ?
        await axios.put(`http://localhost:3000/customers/${id}`, this.state) :
        await axios.post(`http://localhost:3000/customers/`, this.state)

        const customer = res.data.customer
        this.props.setCustomer(customer)
        // <Redirect to="home" />
        this.props.history.push(`/products/`)
    }
 

    render() {
        console.log(this.props.customer)
        return (
            <div>
                <h2>{this.props.isUpDateForm ? "Update Customer" : "Create a Customer"}</h2>
                <form onSubmit={this.onSubmit}>
                <label>First name:</label>
                <input 
                    type="text"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.handleFormChange}
                />
                <br/>
                <label>Last name:</label>
                <input 
                    type='text'
                    name='last_name'
                    value={this.state.last_name}
                    onChange={this.handleFormChange}
                />
                <br/>
                <label>Email:</label>
                <input 
                    type='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleFormChange}
                />
                <br/>
                <label>Address:</label>
                <input 
                    type='text'
                    name='address'
                    value={this.state.address}
                    onChange={this.handleFormChange}
                />
                <br/>
                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default CustomerForm