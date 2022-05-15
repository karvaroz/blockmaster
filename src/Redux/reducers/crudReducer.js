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

    case types.deleteUser:
      return {
        allUsers: state.users.filter((user) => user.name !== action.payload),
      };

    case types.updateUser:
      return {
        ...state
      };

    default:
      return state;
  }
};
