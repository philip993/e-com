import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { getOrders } from "./OrderActions";
import { ToastContainer, toast } from "react-toastify";

toast.configure();

const Order = props => {
  const orders = useSelector(state => state.OrderReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const notify = () => toast("NOTIFICATION");

  const getOrderDetail = e => {
    // let temp = orders.order;

    let tempCart = orders.order.map((itm, index) => itm.cart[e]);

    notify();
    console.log(tempCart);

    console.log(e);
  };

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
          {orders.order.map((itms, index) => (
            <tr>
              <td>{index}</td>

              <td>{[itms.cart._id]}</td>

              <td>
                <button onClick={getOrderDetail.bind(this, index)}>
                  Get details
                </button>
              </td>
              <td>{itms.userIds.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Order;
