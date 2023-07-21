const initialState = {authStatus:false};
export const AuthenticationRouter = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_LOGIN":
      console.log(action.payload);
      sessionStorage.setItem("AuthUserName", action.payload.username);
      return {authStatus:true};
    case "AUTH_LOGOUT":
      sessionStorage.removeItem("AuthUserName");
      return  {authStatus:false};
    default:
      return state;
  }
};
