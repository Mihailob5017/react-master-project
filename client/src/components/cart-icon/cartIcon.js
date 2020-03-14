import React from 'react';
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelector';
import { createStructuredSelector } from 'reselect';
import {
  ShoppingIconContainer,
  ItemCount,
  CartIconContainer
} from './cartIcon.styles';
const cartIcon = ({ toggleCart, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIconContainer />
      <ItemCount> {itemCount}</ItemCount>
    </CartIconContainer>
  );
};
const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
