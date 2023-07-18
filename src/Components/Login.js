import { useState } from "react";
import { Fragment } from "react";
import './Login.css';

export const Login = () => {
  const [loginInput, setLoginInput] = useState({ username: "us ", password: "ps " });
  const loginInputHandler = (event) => {
    setLoginInput((prevState) => {
     return {...prevState,[event.target.name]:event.target.value};
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(loginInput);
    setLoginInput({username:"",password:""})
  };
  return (
    <Fragment>
      <div>
        <form onSubmit={onSubmitHandler} className="login-form">
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
            onChange={loginInputHandler}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </Fragment>
  );
};
