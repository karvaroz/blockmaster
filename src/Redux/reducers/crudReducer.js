import { types } from "../types/types";

const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getUsers:
      return {
        users: [...action.payload],
      };

    case types.addUser:
      return {
        users: [action.payload],
      };

    default:
      return state;
  }
};
