import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Login Form</h2>
      <form>
        <input type="text" placeholder="e-mail" />
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
