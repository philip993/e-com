import React from "react";
import { Accordion, Card, ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ProfileView = ({
  firstName,
  lastName,
  username,
  age,
  gender,
  phone,
  address,
  city,
  country,
  postalCode
}) => {
  return (
    <div>
      <Accordion
        defaultActiveKey='0'
        style={{ width: "720px", margin: "auto", padding: "auto" }}
      >
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='0'>
              Personal Information
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>{firstName}</ListGroup.Item>
                <ListGroup.Item>{lastName}</ListGroup.Item>
                <ListGroup.Item>{age} years old.</ListGroup.Item>
                <ListGroup.Item>Gender: {gender}</ListGroup.Item>
                <ListGroup.Item>Username: {username}.</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='1'>
              Additional Information
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='1'>
            <Card.Body>
              <ListGroup.Item>Phone: {phone}</ListGroup.Item>
              <ListGroup.Item>Address: {address}</ListGroup.Item>
              <ListGroup.Item>City of{city}</ListGroup.Item>
              <ListGroup.Item>{country}</ListGroup.Item>
              <ListGroup.Item>Post Code is {postalCode}</ListGroup.Item>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default ProfileView;
