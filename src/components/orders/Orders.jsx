import {Link} from 'react-router-dom'
import React from 'react'
import './Orders.css'

function Orders() {
  return (
    <div className="orders">
      <div className="orders__container">
        <h1>You Can't Have Orders or Returns On This FAKE AMAZON CLONE</h1>
      </div>
      <Link to="/">
        <button className="orders__button">Go Back</button>
      </Link>
    </div>

  )
}

export default Orders
