import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WishlistView from "./WishlistView";
import {
  getAllWishlistItems,
  deleteWishlist,
  deleteItemFromWishlist
} from "./WishlistActions";
import { Button, Table } from "react-bootstrap";

const Wishlist = item => {
  const wish = useSelector(state => state.WishlistReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllWishlistItems());
  }, []);

  const handleClearWihslist = () => {
    dispatch(deleteWishlist());
  };

  const handleRemoveOne = item => {
    dispatch(deleteItemFromWishlist());
    console.log(item);
  };

  return (
    <div>
      <Table>
        <tr>
          <h1>Wishlist Items</h1>
        </tr>
        <thead>
          <tr>
            <th>Book</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
          <tbody>
            {wish.wishItems.map(({ wishlistItemId }, index) => (
              <tr>
                <th>{wishlistItemId.title}</th>
                <th>{wishlistItemId.price}</th>
                <th>
                  <Button onClick={handleRemoveOne.bind(this, index)}>X</Button>
                </th>
              </tr>
            ))}
          </tbody>
        </thead>
      </Table>
      <Button onClick={handleClearWihslist}>Clear Wishlist</Button>
    </div>
  );
};

export default Wishlist;
