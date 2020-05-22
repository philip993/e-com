import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Styles
import Styles from "../Styles/Styles";
// Redux Actions
import {
  newWishlistItem,
  getAllWishlistItems,
} from "../Wishlist/WishlistActions";
import { getItemsFromCart } from "../Cart/CartActions";
import { addIndex, addBookToCart, updateQuantity } from "./BookActions";
// Material Ui Components
import {
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  Divider,
  Button,
  Box,
  IconButton,
} from "@material-ui/core";
// Material Ui Icons
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Book = ({ _id, title, price, skuId, writter, genre, year, quantity }) => {
  const book = useSelector((state) => state.BookReducer);
  const dispatch = useDispatch();
  const classes = Styles();

  const [isLoaded, setIsLoaded] = useState(false);
  const [piece, setPieces] = useState(1);
  const [clicked, setClicked] = useState(false);
  const [wished, setWished] = useState(false);

  const handleSelectBook = () => {
    dispatch(addIndex(book.index));
    setPieces(piece + 1);
    dispatch(
      addBookToCart({
        _id: _id,
        title: title,
        price: price,
        skuId: skuId,
        quantity: piece,
      })
    );
    dispatch(getItemsFromCart());
    handleToggleToTrue();
    setClicked(true);
    handleToggleToFalse();
  };

  const handleUpdateQuantity = (item) => {
    setPieces(piece + 1);
    console.log(item);
    dispatch(
      updateQuantity({
        _id: _id,
        title: title,
        price: price,
        skuId: skuId,
        quantity: piece,
      })
    );
    dispatch(getItemsFromCart());
  };

  const handleWishitemSelect = (e) => {
    dispatch(newWishlistItem({ _id }));
    setWished(true);
    dispatch(getAllWishlistItems());
  };

  const handleToggleToTrue = () => {
    setTimeout(() => setIsLoaded(true), 100);
  };

  const handleToggleToFalse = () => {
    setTimeout(() => setIsLoaded(false), 1000);
  };

  return (
    <div>
      <Grid item>
        <Card className={classes.bookCard}>
          <CardMedia image='#' title='book cover' />
          <CardContent>
            <Typography variant='h5'>{title}</Typography>

            <Typography variant='h5'>{price.toFixed(2)}$</Typography>
            <Typography component='p'>
              This Book is written by {writter}. Genre of Book is {genre} and
              it's published on {year}.
            </Typography>
          </CardContent>

          <CardActions>
            {!clicked ? (
              <Button
                className={classes.addToCartButton}
                disabled={clicked}
                hidden={clicked}
                onClick={handleSelectBook.bind(this, _id)}
              >
                Add to Cart
              </Button>
            ) : (
              <Button
                color='secondary'
                onClick={handleUpdateQuantity.bind(this, title)}
              >
                Increase Quantity
              </Button>
            )}
            {!wished ? (
              <IconButton onClick={handleWishitemSelect.bind(this, _id)}>
                <FavoriteBorderOutlinedIcon className={classes.wishButton} />
              </IconButton>
            ) : (
              <IconButton>
                <FavoriteIcon className={classes.wishSelectedButton} />
              </IconButton>
            )}
          </CardActions>
        </Card>
        <Divider />
      </Grid>
    </div>
  );
};

export default Book;
