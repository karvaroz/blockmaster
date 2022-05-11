import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";
import { types } from "../types/types";

/* READ ALL DATA */

export const getMovies = () => {
  return async (dispatch) => {
    const moviesCollection = await getDocs(collection(db, "movies"));
    const movies = [];
    moviesCollection.forEach((movie) => {
      movies.push({
        ...movie.data(),
      });
    });
    dispatch(getMoviesSync(movies));
  };
};

export const getMoviesSync = (movies) => {
  return {
    type: types.get,
    payload: movies,
  };
};

/* CREATE DATA */