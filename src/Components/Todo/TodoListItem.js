import { Fragment } from "react";
import "./TodoList.css";
import { todoUpdateStartAction } from "./TodoActionType";
import { useDispatch } from "react-redux";
import { deleteTodoApi } from "../Server/APIs";
import { useNavigate } from "react-router";

export const TodoListItem = (props) => {
  const { info } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onUpdateTodo = (info) => {
    console.log("update :" + info.id);
    todoUpdateStartAction(dispatch, info);
    navigate("/todoform");
  };
  const onDeleteTodo = () => {
    console.log("Delete " + info.id);

    deleteTodoApi(info.id)
      .then((res) => console.log(res))
      .catch((e) => console.log(e.message));
  };

  return (
    <Fragment>
      <tr key={info.id}>
        <td>{info.id}</td>
        <td>{info.title}</td>
        <td>{info.description}</td>
        <td>{info.date}</td>
        <td>
          <button onClick={() => onUpdateTodo(info)}>Update</button>
        </td>
        <td>
          <button onClick={onDeleteTodo}>Delete</button>
        </td>
      </tr>
    </Fragment>
  );
};
