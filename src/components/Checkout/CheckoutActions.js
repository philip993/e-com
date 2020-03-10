import { GET_ITEMS_TO_CHECKOUT } from "./CheckoutActionTypes";

export const getItemsToCheckout = () => {
  return (dispatch, getState) => {
    let booksToCheckout = getState().ShoppingCartReducer.copyOfBooksInCart;

    dispatch({
      type: GET_ITEMS_TO_CHECKOUT,
      payload: booksToCheckout
    });
  };
};
