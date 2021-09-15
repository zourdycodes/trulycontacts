import { useState } from "react";

export const useForm = () => {
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

  return { form, onChange, registerValidator };
};
