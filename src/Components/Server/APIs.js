import axios from "axios";

export const getTodoApi = () => {
  return axios.get("http://localhost:8080/todo");
};
export const postTodoApi = (todoinfo) => {
  return axios.post("http://localhost:8080/todo", todoinfo);
};
export const deleteTodoApi = (id) => {
  return axios.delete(`http://localhost:8080/todo/delete/${id}`);
};
export const updateTodoApi = (updatedTodo) => {
  return axios.put(
    `http://localhost:8080/todo/update/${updatedTodo.id}`,
    updatedTodo
  );
};
