import React from 'react';
import {
  EmptySpan,
  CartDropdown,
  CartItems,
  ClickButton
} from './cartDropdown.styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { createStructuredSelector } from 'reselect';
import { toggleCart } from '../../redux/cart/cartActions';
import './cartDropdown.scss';
import CartItem from '../cart-item/cartItem';
const cartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdown>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptySpan>Your cart is empty</EmptySpan>
        )}
      </CartItems>
      <ClickButton
        onClick={() => {
          dispatch(toggleCart());
          history.push('/checkout');
        }}
      >
        CHECKOUT
      </ClickButton>
    </CartDropdown>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

//  It goes from the inside out,we are getting the connected component first
export default withRouter(connect(mapStateToProps)(cartDropdown));
