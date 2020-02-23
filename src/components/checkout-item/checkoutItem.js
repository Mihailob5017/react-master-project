import React from 'react';
import { connect } from 'react-redux';
import { removeItem, addItem } from '../../redux/cart/cartActions';
import './checkoutItem.scss';
const checkoutItem = ({ item, removeItem, addItem }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispathtoProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispathtoProps)(checkoutItem);
