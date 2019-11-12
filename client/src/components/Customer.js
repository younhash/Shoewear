import React, { Component } from 'react';
import axios from "axios";

class Customer extends Component {

    componentDidMount() {
        if(!this.props.customersLoaded) {
            this.props.getAllCustomers()
        }
    }

    render() {
        return this.props.customers.map(customer => (
            <div key={customer.id}>
              <p>{customer.email}</p>
              <hr />
            </div>
          ))
        }
}
export default Customer;