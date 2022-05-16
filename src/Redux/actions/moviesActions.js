import {
  collection,
  doc,
  getDoc,
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

    const myDocRef = doc(db, "movies", idMovie);
    const myDoc = await getDoc(myDocRef);
    if (myDoc.exists()) {
      console.log("Document data:", myDoc.data());
    }

    // dispatch(getMovieSync(myDoc));
  };
};

export const getMovieSync = (movie) => {
  return {
    type: types.detail,
    payload: movie,
  };
};

/* SEARCH */

export const searchMovie = (search) => {
  return async (dispatch) => {
    const moviesCollection = collection(db, "movies");
    const q = query(moviesCollection, where("original_title", "==", search));
    const datosQ = await getDocs(q);
    const movie = [];
    datosQ.forEach((docu) => {
      movie.push({
        ...docu.data(),
      });
    });
    console.log(movie);
    // dispatch(searchMovieSync(movie));
  };
};

export const searchMovieSync = (movie) => {
  return {
    type: types.search,
    payload: movie,
  };
};
