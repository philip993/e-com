import React from "react";
import Books from "../../components/Books/All-Books/AllBooks";

import { Jumbotron, Container } from "react-bootstrap";

const Shop = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Shop</h1>
          <h4>Get yourself a Book from our Collection.</h4>
        </Container>
      </Jumbotron>
      <Books />
    </div>
  );
};

export default Shop;
