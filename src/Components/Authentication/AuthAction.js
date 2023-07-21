
import { AuthInterceptor } from "./Interceptor";

export const authLoginConfig= (dispatch,loginInput) => {
    AuthInterceptor(loginInput);  // interceptor initial call
    dispatch({type:"AUTH_LOGIN", payload:loginInput})
};
export const authLogoutConfig = (dispatch) => {
    dispatch({type:"AUTH_LOGOUT"})
};
