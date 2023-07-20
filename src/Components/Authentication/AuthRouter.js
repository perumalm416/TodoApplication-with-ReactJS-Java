const initialState = {authStatus:false};
export const AuthenticationRouter = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_LOGIN":
      console.log(action.payload);
      localStorage.setItem("AuthUserName", action.payload.username);
      return state
    case "AUTH_LOGOUT":
      localStorage.removeItem("AuthUserName");
      return state;
    default:
      return state;
  }
};
