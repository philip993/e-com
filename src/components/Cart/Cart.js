import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// React Router Dom
import { useHistory } from "react-router-dom";
// Styles
import Styles from "../Styles/Styles";
// Redux Actions
import {
  getItemsFromCart,
  clearCartAfterOrder,
  removeOneCartItem,
  clearCart,
} from "./CartActions";
import { createOrder } from "../Order/OrderActions";
// React Components
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// Material Ui Components
import {
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
// Material Ui Icons
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Cart = () => {
  const cart = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = Styles();

  useEffect(() => {
    dispatch(getItemsFromCart());
  }, []);

  const handleCreateOrder = () => {
    dispatch(createOrder());
    history.push("/checkout");
    dispatch(clearCartAfterOrder());
  };

  const handleRemoveItemFromCart = (e) => {
    dispatch(removeOneCartItem(e));
    dispatch(getItemsFromCart());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className={classes.contentContainer}>
      <PrivateRoute>
        <Typography variant='h4'>Cart</Typography>
        {cart.itemNumber === 0 ? (
          <Typography variant='h6'>You shopping cart is empty.</Typography>
        ) : (
          <TableContainer className={classes.tableContainer}>
            <Table>
              <TableHead>
                <TableRow className={classes.tableHeader}>
                  <TableCell>No.</TableCell>
                  <TableCell>Book</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Sum</TableCell>
                  <TableCell>Remove Item</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.items.map((cartItems, index) => (
                  <TableRow>
                    <TableCell>{index}.</TableCell>
                    <TableCell>{cartItems.bookTitle}</TableCell>
                    <TableCell>{cartItems.bookPrice.toFixed(2)}$</TableCell>
                    <TableCell>{cartItems.bookQuantity} pcs</TableCell>
                    <TableCell>{cartItems.total.toFixed(2)}$</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={handleRemoveItemFromCart.bind(this, index)}
                      >
                        <HighlightOffIcon fontSize='medium' />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={4}>Total Sum</TableCell>
                  <TableCell colSpan={2}>
                    {cart.items
                      .reduce((total, current) => total + current.total, 0)
                      .toFixed(2)}{" "}
                    $
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button
              onClick={handleCreateOrder}
              className={classes.checkoutButton}
            >
              Proceed To Checkout
            </Button>
            <Button
              className={classes.clearCartButton}
              onClick={handleClearCart}
            >
              Clear Cart
            </Button>
          </TableContainer>
        )}
      </PrivateRoute>
    </div>
  );
};

export default Cart;
