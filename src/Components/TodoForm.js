import { useState } from "react";
import { Fragment } from "react";
import "./TodoForm.css";

export const TodoForm = () => {
  const [todoInput, setTodoInput] = useState({
    title: "",
    description: "",
    date: new Date(),
  });

  function todoInputHandler(e) {
    setTodoInput(function (prevState) {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  const onTodoSubmit = (event) => {
    event.preventDefault();
    console.log(todoInput);
  };

  return (
    <Fragment>
      <h2>Todo Form</h2>
      <form onSubmit={onTodoSubmit} className="todo-form">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={todoInput.title}
          placeholder="Enter the title"
          onChange={todoInputHandler}
        />
        <label htmlFor="description">Description</label>
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
        <button type="submit">Add Task</button>
      </form>
    </Fragment>
  );
};
