import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
const stripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisherKey = 'pk_test_GAxMvOOUijRiVr54YStpKILC00xqXhxiWS';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => {
        alert('Payment Successful');
      })
      .catch(err => {
        console.log(JSON.parse(err));
        alert(
          'There was an issuse with your payment.Please make sure you provided the given credit card'
        );
      });
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
