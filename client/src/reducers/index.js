import { combineReducers } from "redux";
import currentUserReducer from "./currentUser";
import authReducer from "./auth";
import questionsReducer from "./questions";
// import questionReducer from './questionReducere'

export default combineReducers({
  authReducer,
  currentUserReducer,questionsReducer
});
