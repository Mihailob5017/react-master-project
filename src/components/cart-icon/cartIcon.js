import React from 'react';
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cartActions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cartIcon.scss';
const cartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> {itemCount}</span>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});
const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
