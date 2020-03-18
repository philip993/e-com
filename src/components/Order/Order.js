import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Modal, Button } from "react-bootstrap";
import { getOrders, toggleShowFalse, toggleShowTrue } from "./OrderActions";

const Order = props => {
  const orders = useSelector(state => state.OrderReducer);
  const dispatch = useDispatch();

  const [orderArr, setOrderArr] = useState([]);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const getOrderDetail = e => {
    let orderDetails = orders.order.find(
      (cart, index) => cart.cart[e] === cart.cart[index]
    );
    setOrderArr(orderDetails);
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
        </Modal.Header>
        <Modal.Body>
          <div>
            {!orderArr.cart
              ? "Order not selected!"
              : orderArr.cart.map(({ title, price }) => (
                  <div>
                    <h1>{title}</h1>
                    <h1>{price}</h1>
                  </div>
                ))}
          </div>
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
