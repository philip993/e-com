import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Modal, Button } from "react-bootstrap";
import {
  getOrders,
  toggleShowFalse,
  toggleShowTrue,
  getOneOrder
} from "./OrderActions";

const Order = props => {
  const orders = useSelector(state => state.OrderReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const getOrderDetail = e => {
    let orderDetails = orders.order.find(
      (cart, index) => cart.cart[e] === cart.cart[index]
    );
    localStorage.setItem("selectedOrder", orderDetails._id);
    dispatch(getOneOrder(orderDetails));
    dispatch(toggleShowTrue());
  };

  return (
    <div>
      <Table style={{ width: "1440px", margin: "auto" }}>
        <thead>
          <tr>
            <h1>Orders</h1>
          </tr>
          <th>No</th>
          <th>Order</th>
          <th>User</th>
        </thead>
        <tbody>
          {orders.order.map(({ userIds }, index) => (
            <tr>
              <td>{index}</td>
              <td>
                <Button
                  variant='secondary'
                  onClick={getOrderDetail.bind(this, index)}
                >
                  Get details
                </Button>
              </td>
              <td>{userIds.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={orders.visibility}>
        <Modal.Header>
          <Modal.Title>Order details</Modal.Title>
          <Table>
            <thead>
              <tr>
                <th>Order No.</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{orders.singleOrder.stripeOrderId}</td>
                <td>..</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {!orders.singleOrder.cart
                ? "Order not selected!"
                : orders.singleOrder.cart.map(({ title, price }) => (
                    <tr>
                      <td>{title}</td>
                      <td>{price.toFixed(2)}</td>
                    </tr>
                  ))}
            </tbody>
            <tfoot>Status</tfoot>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => dispatch(toggleShowFalse())}
            variant='secondary'
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Order;
