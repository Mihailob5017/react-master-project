import React from 'react';
import CustomBtn from '../custom-button/customBtn';
import './cartDropdown.scss';
const cartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-itmes" />
      <CustomBtn>CHECKOUT</CustomBtn>
    </div>
  );
};

export default cartDropdown;
