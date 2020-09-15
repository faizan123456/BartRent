import { UserActionTypes } from "./user.types";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const discardCurrentUser = () => ({
  type: UserActionTypes.DISCARD_CURRENT_USER
});
