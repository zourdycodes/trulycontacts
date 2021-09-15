export const contacts = (state, action) => {
  switch (action.type) {
    case "case":
      return console.log("contacts");

    default:
      return {
        ...state,
      };
  }
};
