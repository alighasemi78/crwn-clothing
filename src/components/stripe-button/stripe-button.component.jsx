import React from "react";
import StribeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStribe = price * 100;
  const publishableKey = "pk_test_YTD7KSwIOrpjSL1lc8UAkFc100o0DImAZd";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StribeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStribe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
