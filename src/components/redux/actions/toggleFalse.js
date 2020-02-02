import { TOGGLE_LOADER_FALSE } from "../constants/constants";

export const toggleLoaderToFalse = item => {
  return {
    type: TOGGLE_LOADER_FALSE,
    payload: item
  };
};
