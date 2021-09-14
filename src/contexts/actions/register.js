import { axiosInstance } from "../../helpers/axios";

export const register = () => {
  axiosInstance
    .post("/auth/register")
    .then((result) => {
      console.log("result =", result);
    })
    .catch((error) => {
      throw new Error(error);
    });
};
