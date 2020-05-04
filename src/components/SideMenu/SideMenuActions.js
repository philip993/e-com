import { SET_OPEN_DRAWER, SET_CLOSE_DRAWER } from "./SideMenuActionTypes";

export const setDrawerToOpen = () => {
  return {
    type: SET_OPEN_DRAWER,
  };
};

export const setDrawerToClose = () => {
  return {
    type: SET_CLOSE_DRAWER,
  };
};
