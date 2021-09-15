import { SEARCH_CONTACTS } from "../../../constants/actionTypes";

const searchContacts = (searchText) => (dispatch) => {
  dispatch({
    type: SEARCH_CONTACTS,
    payload: searchText,
  });
};

export default searchContacts;
