import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Styles
import Styles from "../Styles/Styles";
// Redux Actions
import {
  getAllWishlistItems,
  deleteWishlist,
  deleteItemFromWishlist,
} from "./WishlistActions";
// React Components
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// Material Ui Components
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableFooter,
  Typography,
  Button,
  IconButton,
  Container,
} from "@material-ui/core";
// Material Ui Icons
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Wishlist = (item) => {
  const wish = useSelector((state) => state.WishlistReducer);
  const dispatch = useDispatch();
  const classes = Styles();

  useEffect(() => {
    dispatch(getAllWishlistItems());
  }, []);

  const handleClearWihslist = () => {
    dispatch(deleteWishlist());
  };

  const handleRemoveOne = (e) => {
    dispatch(
      deleteItemFromWishlist({
        index: e,
      })
    );
  };

  return (
    <div className={classes.contentContainer}>
      <PrivateRoute>
        <Typography variant='h4'>Wishlist</Typography>
        {wish.wishNumber === 0 ? (
          <Typography variant='h6'>Wishlist is empty.</Typography>
        ) : (
          <TableContainer className={classes.tableContainer}>
            <Table>
              <TableHead>
                <TableRow className={classes.tableHeader}>
                  <TableCell>No.</TableCell>
                  <TableCell>Book</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {wish.wishItems.map(({ wishlistItemId }, index) => (
                  <TableRow>
                    <TableCell>{index}.</TableCell>
                    <TableCell>{wishlistItemId.title}</TableCell>
                    <TableCell>{wishlistItemId.price}</TableCell>
                    <TableCell>
                      <IconButton
                        variant='outline-danger'
                        onClick={handleRemoveOne.bind(this, index)}
                      >
                        <HighlightOffIcon fontSize='medium' />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4}>
                    <Button
                      onClick={handleClearWihslist}
                      className={classes.clearWishlistButton}
                    >
                      Clear Wishlist
                    </Button>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        )}
      </PrivateRoute>
    </div>
  );
};

export default Wishlist;
