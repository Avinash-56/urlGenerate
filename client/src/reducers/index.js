import { combineReducers } from "redux";
import note from "./note";
import alert from "./alert";

export default combineReducers({
  note,
  alert,
});
