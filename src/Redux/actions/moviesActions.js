import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";
import { types } from "../types/types";
import Swal from "sweetalert2";

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

export const addMovie = (movie) => {
  return (dispatch) => {
    addDoc(collection(db, "movies"), movie)
      .then((resp) => {
        dispatch(addMovieSync(movie));
        Swal.fire("Bien Hecho!", "Creado correctamente!", "success");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
      });
  };
};

export const addMovieSync = (movie) => {
  return {
    type: types.add,
    payload: movie,
  };
};
