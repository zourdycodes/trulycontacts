import React from "react";
import { Link } from "react-router-dom";

export const LoginContainer = () => {
  return (
    <div>
      <h1>Login Container</h1>
      <Link to="/auth/register">register</Link>
    </div>
  );
};
