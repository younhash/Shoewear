import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'
import CustomerReceipt from './CustomerReceipt'


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
        // const params = this.props.match && this.props.match.params;
        // if (params) {
        const res = await axios.post(`http://localhost:3000/customers/`, this.state)

        const customer = res.data
        this.props.setCustomer(customer)
        // }
        // const id = this.props.match.params.id
        // const res = this.props.isUpDateForm ?
        // await axios.put(`http://localhost:3000/customers/${id}`, this.state) :
        // this.props.history.push(`/products/`)
    }
 

    render() {
        if (this.props.currentCustomer && this.props.currentCustomer.email) {
            return <CustomerReceipt currentCustomer={this.props.currentCustomer}/>
        }
        return (
            <div class="form-group">
                <h2>{this.props.isUpDateForm ? "Update Customer" : "Create a Customer"}</h2>
                <form onSubmit={this.onSubmit} >
                <label>First name:</label>
                <input 
                    type="text"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.handleFormChange}
                    class="form-control"
                />
                <br/>
                <label>Last name:</label>
                <input 
                    type='text'
                    name='last_name'
                    value={this.state.last_name}
                    onChange={this.handleFormChange}
                    class="form-control form-control-sm" 
                />
                <br/>
                <label>Email:</label>
                <input 
                    type='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleFormChange}
                    class="form-control form-control-sm" 
                />
                <br/>
                <label>Address:</label>
                <input 
                    type='text'
                    name='address'
                    value={this.state.address}
                    onChange={this.handleFormChange}
                    class="form-control form-control-sm" 
                />
                <br/>
                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default CustomerForm