import React from "react";
import stripeImage from "../../../../../assets/images/1.jpg";
type StripeProps = {
  className?: string;
};

function Stripe(props: StripeProps) {
  const dummyArrayForStripe = [1, 2, 3, 4, 5, 6];
  return (
    <div className={`img-stripe ${props.className}`}>
      {dummyArrayForStripe.map((i) => (
        <div className="stripe-single-image">
          <img src={stripeImage} alt="" className="img-fluid" />
        </div>
      ))}
    </div>
  );
}

export default Stripe;
