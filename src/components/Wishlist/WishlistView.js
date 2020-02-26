import React from "react";

const WishlistView = wish => {
  return (
    <div>
      <h3>{wish.wishlistItemId.title}</h3>
      <h3>{wish.wishlistItemId.price}</h3>
    </div>
  );
};

export default WishlistView;
