import React from 'react';
import { useStateValue } from '../store/StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">
            Your shopping basket
          </h2>

          {basket.map((item, idx) => (
            <CheckoutProduct
              key={`${item.id}-${idx}`}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <h2>The subtotal will go here</h2>
        <Subtotal />
      </div>
    
    </div>
  );
}

export default Checkout; 