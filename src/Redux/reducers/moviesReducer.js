import { types } from "../types/types";

const initialState = {
    movies: [],
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.get:
            return {
                movies: [...action.payload],
            }
    
        default:
            return state;
    }
}