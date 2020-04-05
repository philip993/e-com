import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Modal, Button } from "react-bootstrap";
import {
  getOrders,
  toggleShowFalse,
  toggleShowTrue,
  getOneOrder,
} from "./OrderActions";
import { useHistory } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Order = (props) => {
  const orders = useSelector((state) => state.OrderReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const getOrderDetail = (e) => {
    let orderDetails = orders.order.find(
      (cart, index) => cart._id[e] === cart._id[index]
    );
    localStorage.setItem("selectedOrder", orderDetails._id);
    localStorage.setItem("stripeOrderId", orderDetails.stripeOrderId);
    dispatch(getOneOrder(orderDetails));
    dispatch(toggleShowTrue());
  };

  const handlePayOrder = () => {
    history.push("/checkout");
  };

  return (
    <div>
      <PrivateRoute>
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
                  <td>{orders.singleOrder.status}</td>
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
                  ? "Order is loading..."
                  : orders.singleOrder.cart.map(({ title, price }) => (
                      <tr>
                        <td>{title}</td>
                        <td>{price.toFixed(2)}$</td>
                      </tr>
                    ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total:</td>
                  <td>
                    {!orders.singleOrder.cart
                      ? "Calculating sum..."
                      : orders.singleOrder.cart
                          .reduce((total, current) => total + current.price, 0)
                          .toFixed(2)}
                    $
                  </td>
                </tr>
              </tfoot>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handlePayOrder} variant='success'>
              Pay Order
            </Button>
            <Button
              onClick={() => dispatch(toggleShowFalse())}
              variant='secondary'
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </PrivateRoute>
    </div>
  );
};

export default Order;
