import rootSlice from "./rootSlice";
import { configureStore} from "@reduxjs/toolkit";
import { combineReducers } from "redux"; // Correct spelling

const reducer = combineReducers({
  root: rootSlice,
});
const store = configureStore({
    reducer,
});
export default store;


