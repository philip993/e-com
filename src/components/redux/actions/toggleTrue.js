import { TOGGLE_LOADER_TRUE } from "../constants/constants";

export const toggleLoaderToTrue = item => {
  return {
    type: TOGGLE_LOADER_TRUE,
    payload: item
  };
};
