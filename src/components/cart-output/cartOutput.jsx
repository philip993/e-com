import React from "react";

const CartOutput = ({ title, price, quantity }) => {
  let totalSum = price * quantity;
  return (
    <div>
      <span>
        <h4>Selected book: {title}.</h4>
        <h4>$ {price}</h4>
      </span>
    </div>
  );
};

export default CartOutput;
