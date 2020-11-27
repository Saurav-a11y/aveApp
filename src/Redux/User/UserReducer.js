const initialState = {
  currentUser: null,
  cart: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "USER_SIGN_OUT":
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};
export default userReducer;
