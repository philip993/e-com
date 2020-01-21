import { GET_TOTAL_SUM } from "../constants/constants";

export const getTotalSum = item => {
  return dispatch => {
    dispatch({
      type: GET_TOTAL_SUM,
      payload: item
    });
  };
};
