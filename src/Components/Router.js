import { Fragment } from "react";
import { TodoForm } from "./Todo/TodoForm";
import { TodoList } from "./Todo/TodoList";
import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./Login";
import { ErrorMessage } from "./ErrorMessage";
import { useSelector } from "react-redux";


export const TodoRouter = () => {
  const authStore=useSelector(state=>state.auth)
  const redirectComponent=<Navigate to="/login"/>;

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="todoform" />}></Route>
        <Route exact path="todoform" element={authStore.authStatus?<TodoForm />:redirectComponent} />
        <Route exact path="/todolist" element={authStore.authStatus?<TodoList />:redirectComponent} />
       <Route exact path="/login" element={<Login />}/>
        <Route path="*" element={<ErrorMessage />} />
      </Routes>
    </Fragment>
  );
};
