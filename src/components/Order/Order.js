import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Order = () => {
  const orders = useSelector(state => state.OrderReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Orders</h1>
    </div>
  );
};

export default Order;
