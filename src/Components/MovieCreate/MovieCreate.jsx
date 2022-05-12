import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { fileUpload } from "../../helpers/fileUpload";
import { useForm } from "../../Hooks/useForm";
import { addMovie } from "../../Redux/actions/moviesActions";

const MovieCreate = () => {
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    original_title: "",
    release_date: "",
    genre_ids: "",
    overview: "",
    poster_path: "",
    vote_average: "",
  });

  const {
    original_title,
    release_date,
    genre_ids,
    overview,
    poster_path,
    vote_average,
  } = values;

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        values.poster_path = response;
        Swal.fire({
          title: "Subiendo Archivo",
          text: "Espere ...",
          allowOutsideClick: false,
          timer: 5000,
          showConfirmButton: false
        });
        ;
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
      });
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(addMovie(values));
    reset();
  };

  return (
    <div>
      <form className="login_form" onSubmit={handleCreateSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          name="original_title"
          value={original_title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Año: 2021-08-11"
          name="release_date"
          value={release_date}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Genero: 12"
          name="genre_ids"
          value={genre_ids}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Sinopsis"
          name="overview"
          value={overview}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Valoracion"
          name="vote_average"
          value={vote_average}
          onChange={handleInputChange}
        />
        <input
          id="file"
          type="file"
          name="poster_path"
          accept=".jpg, .jpeg, .png"
          onChange={handleUploadFile}
        />
        <button type="submit" className="login_btn login">Crear</button>
        <Link to="/movies" className="link">
          Volver
        </Link>
      </form>
    </div>
  );
};

export default MovieCreate;
