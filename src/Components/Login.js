import { useState, Fragment } from "react";
import "./Login.css";
import { authLoginConfig } from "./Authentication/AuthAction";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { AuthInterceptor } from "./Authentication/Interceptor";
import AuthenticationServices from "./Authentication/AuthenticationServices";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
  });
  const [isValidCredential,setIsValidCredential]=useState(true);

  const loginInputHandler = (event) => {
    setLoginInput((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (loginInput.username === "perumal" && loginInput.password === "perumal") {
      setIsValidCredential(true)
      authLoginConfig(dispatch, loginInput);
      AuthenticationServices.authLoginVerification()
        .then((res) => console.log(res))
        .catch((e) => console.log(e));

      navigate("/todolist");
    }
    else{
      setIsValidCredential(false)
    }
  };
  return (
    <Fragment>
      <div>
       
        <form onSubmit={onSubmitHandler} className="login-form">
       {!isValidCredential&& <h3 className="credential">Credential is not Valid ...</h3>}
          <label htmlFor="username">Username :</label>
          <input
            id="username"
            type="text"
            name="username"
            value={loginInput.username}
            placeholder="Enter the username"
            onChange={loginInputHandler}
          />

          <label htmlFor="pwd">Password :</label>
          <input
            id="pwd"
            type="password"
            name="password"
            value={loginInput.password}
            placeholder="Enter the correct password"
            onChange={loginInputHandler}
          />
          <div className="loginBta">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
