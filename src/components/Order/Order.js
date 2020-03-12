import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { getOrders } from "./OrderActions";

const Order = () => {
  const orders = useSelector(state => state.OrderReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      <Table>
        <thead>
          <th>No</th>
          <th>Order</th>
          <th>User</th>
        </thead>
        <tbody>
          {orders.order.map(({ cart: [cartItems], userIds }, index) => (
            <tr>
              <td>{index}</td>

              <td>{cartItems.title}</td>
              <td>{userIds.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Order;
