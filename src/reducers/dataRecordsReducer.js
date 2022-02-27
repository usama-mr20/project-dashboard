import {
  SET_DATA_SUCCESS,
  SET_DATA_REQUEST,
  SET_DATA_FAIL,
  SET_FILTERED_DATA_SUCCESS,
} from "../constants/dataRecordsConstants";

export const dataRecordsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_DATA_REQUEST:
      return { loading: true, data: {} };
    case SET_DATA_SUCCESS:
      return { data: action.payload };
    case SET_FILTERED_DATA_SUCCESS:
      return { ...state, loading: true, filteredData: action.payload };
    case SET_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
