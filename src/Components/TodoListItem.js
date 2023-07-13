import { Fragment } from "react";
import "./TodoList.css";

export const TodoListItem = (props) => {
  const { info, index } = props;

  const onUpdateTodo = (index) => {
    console.log("update :" + info.title);
  };
  const onDeleteTodo = () => {
    console.log("Delete" + index);
  };

  return (
    <Fragment>
      <tr key={index}>
        <td>{index}</td>
        <td>{info.title}</td>
        <td>{info.description}</td>
        <td>{info.date.toDateString()}</td>
        <td>
          <button onClick={() => onUpdateTodo(index)}>Update</button>
        </td>
        <td>
          <button onClick={() => onDeleteTodo()}>Delete</button>
        </td>
      </tr>
    </Fragment>
  );
};
