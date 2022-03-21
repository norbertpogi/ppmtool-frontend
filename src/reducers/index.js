//this is the meeting place of all reducers
import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
    errors: errorReducer,
    project: projectReducer
});