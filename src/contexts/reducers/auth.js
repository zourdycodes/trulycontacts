export const auth = (state, action) => {
  switch (action.type) {
    case "case":
      return console.log("auth");

    default:
      return { ...state };
  }
};
