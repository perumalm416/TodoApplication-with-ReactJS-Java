import { useState } from "react";
import { Fragment } from "react";
import "./TodoForm.css";
import { useDispatch, useSelector } from "react-redux";
import { postTodoApi, updateTodoApi } from "../Server/APIs";
import { useNavigate } from "react-router";
import { todoUpdateEndAction } from "./TodoActionType";

export const TodoForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState({
    title: "",
    description: "",
    date: "",
  });
  const todoStore = useSelector((state) => state.todo);

  function todoInputHandler(e) {
    setTodoInput(function (prevState) {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  const onTodoSubmit = (event) => {
    event.preventDefault();

    if (todoStore.updateTodoInfo) {
      const updatedTodo = {
        ...todoInput,
        id: todoStore.updateTodoInfo.id,
      };
      updateTodoApi(updatedTodo) // UPDATE METHOD
        .then((res) => {
          console.log(res.data);
        })
        .catch((e) => console.log(e.message));

      todoUpdateEndAction(dispatch);
      navigate("/todolist");
    } else {
      postTodoApi(todoInput) // POST METHOD
        .then((res) => console.log(res))
        .catch((e) => console.error(e.message));
    }
  };

  return (
    <Fragment>
      <h2>Todo Form</h2>
      <form onSubmit={onTodoSubmit} className="todo-form">
        <label id="lable-title" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          name="title"
          value={todoInput.title}
          placeholder="Enter the title"
          onChange={todoInputHandler}
        />
        <label id="lable-description" htmlFor="description">
          Description
        </label>
        <input
          id="description"
          type="text"
          name="description"
          value={todoInput.description}
          placeholder="Enter the description"
          onChange={todoInputHandler}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={todoInput.date}
          onChange={todoInputHandler}
        />
        <button type="submit">
          {todoStore.updateTodoInfo ? "Update Task" : "Add Task"}
        </button>
      </form>
    </Fragment>
  );
};
