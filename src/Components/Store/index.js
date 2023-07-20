import { combineReducers, createStore } from "redux";
import { TodoReducer } from "../Todo/TodoReducer";
import { AuthenticationRouter } from "../Authentication/AuthRouter";
const rootReducer=combineReducers({
    todo:TodoReducer,auth:AuthenticationRouter
})
export const Store=createStore(rootReducer);