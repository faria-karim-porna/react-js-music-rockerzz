import React from "react";
import Stripe from "./Stripes/Stripe";

function HeaderSection() {
  return (
    <div className="w-100 d-flex">
      <div className="w-50">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div>
            <i className="fas fa-guitar-electric"></i>
            <div className="title text-center">RockerZZ</div>
            <div className="sub-title text-center">
              Life is one grand sweet song, so start the music
            </div>
          </div>
        </div>
      </div>
      <div className="img w-25 d-flex">
        <Stripe className="stripe1" />
        <Stripe className="stripe2" />
      </div>
    </div>
  );
}

export default HeaderSection;
