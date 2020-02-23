import React from 'react';
import CustomBtn from '../custom-button/customBtn';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelector';
import './cartDropdown.scss';
import CartItem from '../cart-item/cartItem';
const cartDropdown = ({ cart: { cartItems } }) => {
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomBtn>CHECKOUT</CustomBtn>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: selectCartItems(state)
});

export default connect(mapStateToProps)(cartDropdown);
