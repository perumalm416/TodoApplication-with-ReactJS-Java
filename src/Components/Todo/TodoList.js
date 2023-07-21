import { Fragment, useEffect, useState } from "react";
import "./TodoList.css";
import { TodoListItem } from "./TodoListItem";
import { getTodoApi } from "../Server/APIs";


export const TodoList = () => {
  const [todoinfo, setTodoInfo] = useState([]);

  useEffect(() => {
    getTodoApi().then((res) => {
      // sort the response data
      res.data.sort((a, b) => {
        return a.id - b.id;
      });
      setTodoInfo(res.data);
    }).catch(e=>{
      if(e.message){
        console.log(e.message);
      }
    })
  }, []);

  return (
    <Fragment>
      <h2>Todo Application Schedule</h2>
      <table>
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
          {todoinfo &&
            todoinfo.map((item, index) => (
              <TodoListItem key={index} info={item} />
            ))}
        </tbody>
      </table>
    
    </Fragment>
  );
};
