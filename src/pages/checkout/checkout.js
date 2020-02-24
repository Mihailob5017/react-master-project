import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartItemsPrice
} from '../../redux/cart/cartSelector';
import './checkout.scss';
import CheckoutItem from '../../components/checkout-item/checkoutItem';
import StripeButton from '../../components/stripe-button/stripeButton';
//  Components

const checkout = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Desription</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL:${totalPrice}</span>
      </div>
      {cartItems.length > 0 && (
        <>
          <div className="test-warning">
            *Please use the following test credit card for payments *
            <br />
            4242 4242 4242 4242 -EXp: 01/20 - CVV: 123
          </div>
          <StripeButton price={totalPrice} />
        </>
      )}
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsPrice
});

export default connect(mapStatetoProps)(checkout);
