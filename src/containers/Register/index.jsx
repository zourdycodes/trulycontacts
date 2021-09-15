import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../helpers/useForm";

import { RegisterLayout } from "../../layout";

export const RegisterContainer = () => {
  return <RegisterLayout useForm={useForm} />;
};
