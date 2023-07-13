import { Fragment } from "react";
import "./TodoList.css"
import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  const todoinfo = [
    {
      title: "to learn Java",
      description: "Java is backend language",
      date: new Date(),
    },
    {
      title: "to learn Oracle",
      description: "Oracle is database ",
      date: new Date(),
    },
    {
      title: "to learn ReactJS",
      description: "ReactJS is Frondend",
      date: new Date(),
    },
  ];
  return (
    <Fragment>
      <h2>Todo Application Schedule</h2>
      <table >
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todoinfo.map((item, index) =><TodoListItem key={index} info={item}/>)}
        </tbody>
      </table>
    </Fragment>
  );
};
