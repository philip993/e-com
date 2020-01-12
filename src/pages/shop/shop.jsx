import React from "react";
import Books from "../../components/books/books";
import ShoppingCart from "../../components/shopping-cart/shoppingCart";

const Shop = () => {
  return (
    <div>
      <h1>Shop Page</h1>
      <Books />
      <ShoppingCart />
    </div>
  );
};

export default Shop;
