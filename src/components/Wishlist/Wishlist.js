import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getAllWishlistItems,
  deleteWishlist,
  deleteItemFromWishlist
} from "./WishlistActions";
import { Button, Table } from "react-bootstrap";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Wishlist = item => {
  const wish = useSelector(state => state.WishlistReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllWishlistItems());
  }, []);

  const handleClearWihslist = () => {
    dispatch(deleteWishlist());
  };

  const handleRemoveOne = e => {
    dispatch(
      deleteItemFromWishlist({
        index: e
      })
    );
  };

  return (
    <div>
      <h1>Wishlist</h1>
      <PrivateRoute>
        <Table
          striped
          bordered
          hover
          size='sm'
          style={{ width: "50%", margin: "auto" }}
        >
          <thead>
            <tr>
              <th>No.</th>
              <th>Book</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {wish.wishItems.map(({ wishlistItemId }, index) => (
              <tr>
                <td>{index}.</td>
                <td>{wishlistItemId.title}</td>
                <td>{wishlistItemId.price}</td>
                <td>
                  <Button
                    variant='outline-danger'
                    onClick={handleRemoveOne.bind(this, index)}
                  >
                    X
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>
                <Button onClick={handleClearWihslist} variant='outline-danger'>
                  Clear Wishlist
                </Button>
              </td>
            </tr>
          </tfoot>
        </Table>
      </PrivateRoute>
    </div>
  );
};

export default Wishlist;
