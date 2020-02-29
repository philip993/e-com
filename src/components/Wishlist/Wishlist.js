import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WishlistView from "./WishlistView";
import { getAllWishlistItems, deleteWishlist } from "./WishlistActions";
import { Button } from "react-bootstrap";

const Wishlist = () => {
  const wish = useSelector(state => state.WishlistReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllWishlistItems());
  }, []);

  const handleClearWihslist = () => {
    dispatch(deleteWishlist());
    console.log("clicked");
  };

  return (
    <div>
      <h1>Wishlist</h1>
      {wish.wishItems.map(({ ...rest }) => (
        <WishlistView {...rest} />
      ))}
      <Button onClick={handleClearWihslist}>Clear Wishlist</Button>
    </div>
  );
};

export default Wishlist;
