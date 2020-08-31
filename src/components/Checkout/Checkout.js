import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Styles
import Styles from "../Styles/Styles";
// Stripe
import StripeCheckout from "react-stripe-checkout";
// Axios
import axios from "axios";
// React Tostify
import { toast } from "react-toastify";
// Redux Actions
import { getItemsToCheckout } from "./CheckoutActions";
import { clearCartAfterPayment } from "../ShoppingCart/ShoppingCartActions";
import { clearBooks } from "../Book/BookActions";
// React Router Dom
import { useHistory } from "react-router-dom";
// React Components
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// Material Ui Core
import { Typography } from "@material-ui/core";

toast.configure();

const stripePublishableKey = process.env.STRIPE_PUBLIC_KEY;

const Checkout = () => {
  const check = useSelector((state) => state.CheckoutReducer);
  const dispatch = useDispatch();
  const classes = Styles();
  const history = useHistory();

  useEffect(() => {
    dispatch(getItemsToCheckout());
  }, []);

  const totalSumFromCart = check.cartItems.reduce(
    (current, total) => current + total.price,
    0
  );

  const handleToken = async (token) => {
    dispatch(clearBooks());
    dispatch(clearCartAfterPayment());
    const stripeOrderId = localStorage.getItem("stripeOrderId");
    const customerId = localStorage.getItem("customerId");
    const response = await axios.post("http://localhost:5000/checkout", {
      token,
      stripeOrderId,
      totalSumFromCart,
      customerId,
    });

    localStorage.removeItem("stripeOrderId");
    const { status } = response.data;
    console.log(status);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
      setTimeout(() => {
        history.push("/checkoutsuccess");
      }, 1000);
    } else {
      toast("Something went wrong", { type: "error" });
      setTimeout(() => {
        history.push("/checkouterror");
      });
    }
  };
  return (
    <div className={classes.contentContainer}>
      <PrivateRoute>
        <Typography variant='h4'>Payment Confirmation</Typography>
        <Typography vairant='p'>
          Proceed with payment using the credit card method. Supported credit
          cards: MasterCard and Visa. After successfull payment your order will
          be completed.
        </Typography>
        <StripeCheckout
          stripeKey='pk_test_LcQRXx6BixddWnZ7fsX3OW0400cOfF74jx'
          token={handleToken}
          billingAddress
          shippingAddress
          amount={totalSumFromCart * 100}
        />
      </PrivateRoute>
    </div>
  );
};

export default Checkout;
