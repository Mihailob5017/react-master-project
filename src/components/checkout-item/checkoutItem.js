import React from 'react';
import { connect } from 'react-redux';
import { removeItem, addItem } from '../../redux/cart/cartActions';
import {
  CheckoutItemContainer,
  ImageContainer,
  NameSpan,
  QuantitiySpan,
  PriceSpan,
  RemoveButton
} from './checkoutItem.styles';
const checkoutItem = ({ item, removeItem, addItem }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="Item" />
      </ImageContainer>
      <NameSpan>{name}</NameSpan>
      <QuantitiySpan>
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </QuantitiySpan>
      <PriceSpan>{price}$</PriceSpan>
      <RemoveButton onClick={() => removeItem(item)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispathtoProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispathtoProps)(checkoutItem);
