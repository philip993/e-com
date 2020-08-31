import React from "react";

// Styles
import Styles from "../Styles/Styles";
// Material Ui Components
import {
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Avatar,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

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
  postalCode,
}) => {
  const classes = Styles();

  return (
    <div>
      <Card className={classes.profileCard}>
        <CardContent className={classes.profileHeader}>
          <Avatar className={classes.profileAvatar}>
            {firstName.charAt(0)}
            {lastName.charAt(0)}
          </Avatar>
          <Typography variant='h4'>
            {firstName} {lastName}
          </Typography>
        </CardContent>
        <CardContent>
          <Table>
            <TableHead>
              <Typography variant='h6'>Basic Information</Typography>
            </TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>{username}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Age</TableCell>
              <TableCell>{age}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Gender</TableCell>
              <TableCell>{gender}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Phone</TableCell>
              <TableCell>{phone}</TableCell>
            </TableRow>
            <TableHead>
              <Typography variant='h6'>Shipping Information</Typography>
            </TableHead>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>
                {address}, {city}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell>
                {country}, {postalCode}
              </TableCell>
            </TableRow>
          </Table>
        </CardContent>
      </Card>
      {/* <Accordion
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
      </Accordion> */}
    </div>
  );
};

export default ProfileView;
