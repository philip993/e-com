import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WishlistView from "./WishlistView";
import { getAllWishlistItems } from "./WishlistActions";

const Wishlist = () => {
  const wish = useSelector(state => state.WishlistReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllWishlistItems());
  }, []);

  return (
    <div>
      <h1>Wishlist</h1>
      {wish.wishItems.map(({ ...rest }) => (
        <WishlistView {...rest} />
      ))}
    </div>
  );
};

export default Wishlist;
