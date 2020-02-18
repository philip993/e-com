import React from "react";
import { Table } from "react-bootstrap";

const ProfileView = ({ firstName, lastName, username, age, city, country }) => {
  return (
    <div>
      <Table>
        <tr>
          <th>First Name: {firstName}</th>
        </tr>
        <tr>
          <th>Last Name: {lastName}</th>
        </tr>
        <tr>
          <th>Username: {username}</th>
        </tr>
        <tr>
          <th>Age: {age}</th>
        </tr>
        <tr>
          <th>City: {city}</th>
        </tr>
        <tr>
          <th>Country: {country}</th>
        </tr>
      </Table>
    </div>
  );
};

export default ProfileView;
