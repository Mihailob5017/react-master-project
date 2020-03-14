import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const stripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisherKey = 'pk_test_GAxMvOOUijRiVr54YStpKILC00xqXhxiWS';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="ECommerc"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`$${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publisherKey}
    />
  );
};

export default stripeButton;
