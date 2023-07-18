import axios from "axios"



class API{
    getTodoApi(){
        return axios.get("http://localhost:8080/todo");
    }
    postTodoApi(todoinfo){
        return axios.post("http://localhost:8080/todo",todoinfo);
    }
    deleteTodoApi(id){
        return axios.delete(`http://localhost:8080/todo/delete/${id}`);
    }
    updateTodoApi(todoinfo,id){
        return axios.put(`http://localhost:8080/todo/delete/${id}`,todoinfo);
    }
}
export default new API();