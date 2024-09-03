import { configureStore, combineReducers } from "@reduxjs/toolkit";
import resultsReducer from "../reducers/result";
import { getResultsAction } from "../antions";

const allReducer = combineReducers({
  list: getResultsAction,
  result: resultsReducer,
});

const store = configureStore({
  reducer: allReducer,
});
export default store;
