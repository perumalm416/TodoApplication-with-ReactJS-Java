import { Fragment } from "react";

import { TodoForm } from "./Todo/TodoForm";
import { TodoList } from "./Todo/TodoList";
import { Route, Routes, Navigate } from "react-router-dom";
// import { Switch } from "react-router";
import { Login } from "./Login";
import { ErrorMessage } from "./ErrorMessage";
import { Logout } from "./Logout";
import Authentication  from "./Authentication/Authentication";

export const TodoRouter = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="todoform" />}></Route>
        <Route exact path="todoform" element={<TodoForm />} />
        <Route exact path="/todolist" element={<TodoList />} />
       <Route exact path="/login" element={<Login />}/>
        <Route exact path="/logout" element={false?<Logout />:<Navigate to="/login"/>}/>
        <Route path="*" element={<ErrorMessage />} />
      </Routes>
    </Fragment>
  );
};
