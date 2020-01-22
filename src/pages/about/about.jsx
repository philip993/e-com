import React from "react";

import { Jumbotron, Container } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>About Book Shop</h1>
          <p>Book Shop TM is on-line shop for Books.</p>
          <p>Version: 1.0.0</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default About;
