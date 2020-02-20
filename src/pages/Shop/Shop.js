import React from "react";
import Books from "../../components/Books/Books";

import { Jumbotron, Container } from "react-bootstrap";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import Pagination from "../../components/Pagination/Pagination";

const Shop = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Shop</h1>
          <h4>Get yourself a Book from our Collection.</h4>
        </Container>
      </Jumbotron>
      <PrivateRoute>
        <Books />
      </PrivateRoute>
      <Pagination />
    </div>
  );
};

export default Shop;
