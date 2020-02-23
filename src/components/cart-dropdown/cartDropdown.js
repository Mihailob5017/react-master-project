import React from 'react';
import CustomBtn from '../custom-button/customBtn';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { createStructuredSelector } from 'reselect';
import { toggleCart } from '../../redux/cart/cartActions';
import './cartDropdown.scss';
import CartItem from '../cart-item/cartItem';
const cartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomBtn
        onClick={() => {
          dispatch(toggleCart());
          history.push('/checkout');
        }}
      >
        CHECKOUT
      </CustomBtn>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

//  It goes from the inside out,we are getting the connected component first
export default withRouter(connect(mapStateToProps)(cartDropdown));
