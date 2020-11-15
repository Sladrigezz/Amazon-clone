import React from 'react'
import './Checkout.css'
import Subtotal from '../subtotal/Subtotal'
import {useStateValue} from '../../StateProvider'
import CheckoutProduct from '../checkoutProduct/CheckoutProduct'

function Checkout() {
  const [{basket}, dispatch] = useStateValue()

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
        <div>
          <h2 className="checkout__title">
            Your Shopping Basket
          </h2>

          {basket.map((item, index) => (
            <CheckoutProduct
              key={`${item.title}_${item.id}_${index}`}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            ></CheckoutProduct>
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal></Subtotal>
      </div>
    </div>
  )
}

export default Checkout
