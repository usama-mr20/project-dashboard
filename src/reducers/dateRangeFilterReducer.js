import {
  SET_DATE_RANGE_SUCCESS,
  SET_DATE_RANGE_REQUEST,
  SET_DATE_RANGE_FAIL,
} from "../constants/dateRangeFilterConstants";

export const dateRangeFilterReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_DATE_RANGE_REQUEST:
      return { loading: true, dates: {} };
    case SET_DATE_RANGE_SUCCESS:
      return { loading: false, dates: action.payload };
    case SET_DATE_RANGE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
