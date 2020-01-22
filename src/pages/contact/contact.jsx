import React from "react";

import { Jumbotron, Container } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Contact Us</h1>
          <p>E-mail: info@info.com</p>
          <p>Telephone: +123 123 123 123</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Contact;
