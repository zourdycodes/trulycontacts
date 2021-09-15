import { axiosInstance } from "../../helpers/axios";

export const register =
  ({ email, username, password, firstName: first_name, lastName: last_name }) =>
  (dispatch) => {
    axiosInstance
      .post("/auth/register", {
        email,
        username,
        password,
        first_name,
        last_name,
      })
      .then((result) => {
        console.log("result =", result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
