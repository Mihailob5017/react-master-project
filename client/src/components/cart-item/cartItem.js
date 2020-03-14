import React from 'react';
import { CartItemContainer, CartDetailsContainer } from './cartItem.styles';
const cartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt="item" />
      <CartDetailsContainer>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </CartDetailsContainer>
    </CartItemContainer>
  );
};

export default cartItem;
