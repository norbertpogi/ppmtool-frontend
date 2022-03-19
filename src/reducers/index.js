//this is the meeting place of all reducers
import { combineReducers } from "redux";
import errorReducer from "./errorReducer";

export default combineReducers({
    errors: errorReducer
});