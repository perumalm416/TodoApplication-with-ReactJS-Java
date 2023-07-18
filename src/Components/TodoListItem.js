import { Fragment } from "react";
import "./TodoList.css";
import APIs from "./Server/APIs";
import { formUpdateStatusAction } from "./Store/TodoActionType";
import { useDispatch } from "react-redux";

export const TodoListItem = (props) => {
  const { info } = props;
  const dispatch=useDispatch();

  const onUpdateTodo = (id) => {
    console.log("update :" + info.id);
    formUpdateStatusAction(dispatch)
    // APIs.updateTodoApi().then(res=>console.log(res.data)).catch(e=>console.log(e.message));
  };
  const onDeleteTodo = () => {
    console.log("Delete " + info.id);
    APIs.deleteTodoApi(info.id).then((res) => console.log(res)).catch((e)=>console.log(e.message))
  };

  return (
    <Fragment>
      <tr key={info.id}>
        <td>{info.id}</td>
        <td>{info.title}</td>
        <td>{info.description}</td>
        <td>{info.date}</td>
        <td>
          <button onClick={() => onUpdateTodo(info.id)}>Update</button>
        </td>
        <td>
          <button onClick={onDeleteTodo}>Delete</button>
        </td>
      </tr>
    </Fragment>
  );
};
