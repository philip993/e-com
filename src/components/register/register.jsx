import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserEmail = e => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handleUserPasswrod = e => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleUserInput = () => {
    console.log("Email:" + email);
    console.log("Password" + password);
  };

  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={handleUserInput}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={handleUserEmail}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handleUserPasswrod}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
