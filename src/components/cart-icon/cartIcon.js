import React from 'react';
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cartActions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cartSelector';
import { createStructuredSelector } from 'reselect';
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
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
