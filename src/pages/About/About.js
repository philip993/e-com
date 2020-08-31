import React from "react";

// Styles
import Styles from "../../components/Styles/Styles";
import { Jumbotron, Container } from "react-bootstrap";

const About = () => {
  const classes = Styles();

  return (
    <div className={classes.contentContainer}>
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
