import { createStore } from "redux";
import { TodoReducer } from "./TodoReducer";

export const Store=createStore(TodoReducer);