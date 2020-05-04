import { SET_OPEN_DRAWER, SET_CLOSE_DRAWER } from "./SideMenuActionTypes";

const initalState = {
  isOpen: false,
};

export const SideMenuReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_OPEN_DRAWER:
      return {
        ...state,
        isOpen: true,
      };
    case SET_CLOSE_DRAWER:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
