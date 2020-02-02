import React from "react";

const CartOutput = ({ title, price, quantity }) => {
  return (
    <div>
      <span>
        <h4>Selected book: {title}.</h4>
        <h4>$ {price.toFixed(2)}</h4>
      </span>
    </div>
  );
};

export default CartOutput;
