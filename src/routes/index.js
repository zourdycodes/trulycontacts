import {
  RegisterContainer,
  LoginContainer,
  ContactsContainer,
  CreateContactContainer,
} from "../containers";

export const routes = [
  {
    path: "/auth/register",
    Component: RegisterContainer,
    title: "Register",
  },
  {
    path: "/auth/login",
    Component: LoginContainer,
    title: "Login",
  },
  {
    path: "/",
    Component: ContactsContainer,
    title: "Contacts",
  },
  {
    path: "/contacts/create",
    Component: CreateContactContainer,
    title: "Create Contact",
  },
];
