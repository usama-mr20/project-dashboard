import {
  SET_DATA_SUCCESS,
  //   SET_DATE_RANGE_REQUEST,
  //   SET_DATE_RANGE_FAIL,
  SET_FILTERED_DATA_SUCCESS,
} from "../constants/dataRecordsConstants";

export const dataRecordsAction = (data) => {
  return (dispatch) => {
    // dispatch({ type: SET_DATE_RANGE_REQUEST });

    dispatch({ type: SET_DATA_SUCCESS, payload: data });
  };
};
export const dataRecordsFilteredAction = (data) => {
  return (dispatch) => {
    // dispatch({ type: SET_DATE_RANGE_REQUEST });

    dispatch({ type: SET_FILTERED_DATA_SUCCESS, payload: data });
  };
};
