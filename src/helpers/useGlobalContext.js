import { useContext } from "react";
import { GlobalContext } from "../contexts/Provider";

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
