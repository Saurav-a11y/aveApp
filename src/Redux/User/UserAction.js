export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

export const userSignOut = () => ({
  type: "USER_SIGN_OUT",
});
