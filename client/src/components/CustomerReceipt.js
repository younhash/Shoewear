import React from 'react'

const CustomerReceipt = (props) => {
  return (
    <div>

      {props.date}
      <dl class="row">
        <dt class="col-sm-3">Date</dt>
        <dd class="col-sm-9">{props.date}</dd>

        {/* This is tie to the experimental handleTransaction where I want pass in currentProd.. */}
        {/* <dt class="col-sm-3">Item info</dt>
        <dd class="col-sm-9">
          <p>{props.currentProduct.name}, {props.currentProduct.color}, {props.currentProduct.size}, {props.currentProduct.price}</p>
        </dd> */}

        <dt class="col-sm-3">ship to</dt>
        <dd class="col-sm-9">{props.currentCustomer.address}</dd>

        <dt class="col-sm-3 text-truncate">Customer</dt>
        <dd class="col-sm-9">{props.currentCustomer.first_name}, {props.currentCustomer.last_name},</dd>
      </dl> 

    </div>
  )
}

export default CustomerReceipt;