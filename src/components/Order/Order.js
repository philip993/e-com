import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Styles
import Styles from "../Styles/Styles";
// React Router Dom
import { useHistory } from "react-router-dom";
// Redux Actions
import {
  getOrders,
  toggleShowFalse,
  toggleShowTrue,
  getOneOrder,
} from "./OrderActions";
// React Components
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// Material Ui Components
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableFooter,
  Typography,
  Button,
  IconButton,
  Modal,
} from "@material-ui/core";

const Order = (props) => {
  const orders = useSelector((state) => state.OrderReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = Styles();

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
    <div className={classes.contentContainer}>
      <PrivateRoute>
        <Typography variant='h4'>Orders</Typography>
        <TableContainer className={classes.tableContainer}>
          <Table>
            <TableHead>
              <TableRow className={classes.tableHeader}>
                <TableCell>No.</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>User</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.order.map(({ userIds }, index) => (
                <TableRow>
                  <TableCell>{index}</TableCell>
                  <TableCell>
                    <Button onClick={getOrderDetail.bind(this, index)}>
                      Get details
                    </Button>
                  </TableCell>
                  <TableCell>{userIds.username}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Modal
          open={orders.visibility === true}
          className={classes.modalContainer}
        >
          <TableContainer className={classes.modalTableContainer}>
            <Table>
              <TableHead className={classes.modalTableHeader}>
                <TableRow>
                  <TableCell colSpan={2}>
                    Order No. {orders.singleOrder.stripeOrderId}
                  </TableCell>
                  <TableCell>Status {orders.singleOrder.status}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>Book Title</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
                {!orders.singleOrder.cart
                  ? "Order is loading..."
                  : orders.singleOrder.cart.map(({ title, price }, index) => (
                      <TableRow>
                        <TableCell>{index}.</TableCell>
                        <TableCell>{title}</TableCell>
                        <TableCell>{price.toFixed(2)}$</TableCell>
                      </TableRow>
                    ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={2}>Total:</TableCell>
                  <TableCell>
                    {!orders.singleOrder.cart
                      ? "Calculating sum..."
                      : orders.singleOrder.cart
                          .reduce((total, current) => total + current.price, 0)
                          .toFixed(2)}
                    $
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    {" "}
                    <Button
                      onClick={handlePayOrder}
                      className={classes.checkoutButton}
                    >
                      Pay Order
                    </Button>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Button
                      onClick={() => dispatch(toggleShowFalse())}
                      className={classes.clearCartButton}
                    >
                      Close
                    </Button>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Modal>
      </PrivateRoute>
    </div>
  );
};

export default Order;
