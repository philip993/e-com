import React, { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { getItemsToCheckout } from "./CheckoutActions";
import { clearCartAfterPayment } from "../ShoppingCart/ShoppingCartActions";
import { clearBooks } from "../Book/BookActions";

toast.configure();

const stripePublishableKey = process.env.STRIPE_PUBLIC_KEY;

const Checkout = () => {
  const check = useSelector((state) => state.CheckoutReducer);
  const dispatch = useDispatch();

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
    console.log(stripeOrderId);
    const { status } = response.data;

    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  };
  return (
    <div>
      <h1>Confirm Your Payment</h1>

      <StripeCheckout
        stripeKey={stripePublishableKey}
        token={handleToken}
        billingAddress
        shippingAddress
        amount={totalSumFromCart * 100}
      />
    </div>
  );
};

export default Checkout;
