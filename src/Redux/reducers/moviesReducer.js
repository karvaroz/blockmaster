import { types } from "../types/types";

const initialState = {
  movies: [],
  // movie: {},
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.get:
      return {
        movies: [...action.payload],
      };

    case types.detail:
      return {
        ...action.payload.data(),
      };

    case types.search:
      return {
        movies: [action.payload],
      };

    default:
      return state;
  }
};
