import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartItemsPrice
} from '../../redux/cart/cartSelector';
import {
  CheckoutHeader,
  CheckoutPageContainer,
  TestWarning,
  HeaderBlock
} from './checkout.styles';
import CheckoutItem from '../../components/checkout-item/checkoutItem';
import StripeButton from '../../components/stripe-button/stripeButton';
//  Components

const checkout = ({ cartItems, totalPrice }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Desription</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL:${totalPrice}</span>
      </div>
      {cartItems.length > 0 && (
        <>
          <TestWarning>
            *Please use the following test credit card for payments *
            <br />
            4242 4242 4242 4242 -EXp: 01/20 - CVV: 123
          </TestWarning>
          <StripeButton price={totalPrice} />
        </>
      )}
    </CheckoutPageContainer>
  );
};

const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsPrice
});

export default connect(mapStatetoProps)(checkout);
