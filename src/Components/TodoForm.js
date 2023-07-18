import { useState } from "react";
import { Fragment } from "react";
import "./TodoForm.css";
import APIs from "./Server/APIs";

export const TodoForm = () => {
  const [todoInput, setTodoInput] = useState({
    title: "",
    description: "",
    date:"",
  });

  function todoInputHandler(e) {
    setTodoInput(function (prevState) {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  const onTodoSubmit = (event) => {
    event.preventDefault();
    APIs.postTodoApi(todoInput).then(res=>{
      console.log(res);
      if(res.status==200){
        APIs.getTodoApi().then(res=>console.log(res.data));
      }
    });

  };

  return (
    <Fragment>
      <h2>Todo Form</h2>
      <form onSubmit={onTodoSubmit} className="todo-form">
        <label id="lable-title" htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={todoInput.title}
          placeholder="Enter the title"
          onChange={todoInputHandler}
        />
        <label id="lable-description" htmlFor="description">Description</label>
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
