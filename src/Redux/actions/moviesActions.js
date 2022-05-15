import {
  collection,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
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


/* GET DETAIL */

export const getMovie = (id) => {
  return async (dispatch) => {
    const moviesCollection = collection(db, "movies");
    const q = query(moviesCollection, where("id", "==", id));
    const datosQ = await getDocs(q);
    let idMovie;

    datosQ.forEach(async (docu) => {
      idMovie = docu.id;
    });
    console.log(idMovie);

    const docRef = doc(db, "movies", idMovie);

    console.log(docRef);

    dispatch(getMovieSync(docRef));
  };
};

export const getMovieSync = (movie) => {
  return {
    type: types.detail,
    payload: movie,
  };
};


