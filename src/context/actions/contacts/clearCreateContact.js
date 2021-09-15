import { CLEAR_ADD_CONTACT } from "../../../constants/actionTypes";

const clearCreateContact = () => (dispatch) => {
  dispatch({
    type: CLEAR_ADD_CONTACT,
  });
};

export default clearCreateContact;
