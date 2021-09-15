import { useState } from "react";

import { useGlobalContext } from "./useGlobalContext";
import { register } from "../contexts/actions/register";

export const useForm = () => {
  const { authDispatch } = useGlobalContext();

  const [form, setForm] = useState({});

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const registerValidator =
    !form.username?.length ||
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.email?.length ||
    !form.password?.length;

  const onSubmit = () => {
    register(form)(authDispatch);
  };

  return { form, onChange, registerValidator, onSubmit };
};
