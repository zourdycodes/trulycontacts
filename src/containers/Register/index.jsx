import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { register } from "../../contexts/actions/register";

export const RegisterContainer = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link to="/auth/login">login</Link>
    </div>
  );
};
