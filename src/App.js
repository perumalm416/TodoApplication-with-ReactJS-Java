import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { Login } from "./Components/Login";
import { TodoForm } from "./Components/TodoForm";
import { TodoList } from "./Components/TodoList";
function App() {
  return  <Fragment>
  <Login />
  <TodoForm/>
  <TodoList/>
</Fragment>
}

export default App;
