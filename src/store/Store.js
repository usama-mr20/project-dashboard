import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { dataRecordsReducer } from "../reducers/dataRecordsReducer";
import { data } from "../data/data";
import { dateRangeFilterReducer } from "../reducers/dateRangeFilterReducer";

const reducer = combineReducers({
  data: dataRecordsReducer,
  dateRange: dateRangeFilterReducer,
});

const initialState = {
  data: {
    data,
    filteredData: data,
  },
};

const middleware = [thunk];

const Store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
