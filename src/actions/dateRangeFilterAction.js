import {
  SET_DATE_RANGE_SUCCESS,
  //   SET_DATE_RANGE_REQUEST,
  //   SET_DATE_RANGE_FAIL,
} from "../constants/dateRangeFilterConstants";

export const dateRangeFilterAction = (dateObj) => {
  return (dispatch) => {
    // dispatch({ type: SET_DATE_RANGE_REQUEST });

    dispatch({ type: SET_DATE_RANGE_SUCCESS, payload: dateObj });
  };
};
