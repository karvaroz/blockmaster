import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";

const MovieCreate = () => {
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

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    console.log(values);
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
          type="file"
          name="poster_path"
          value={poster_path}
          onChange={handleInputChange}
        />
        <button type="submit" className="login_btn login">
          Crear Pelicula
        </button>
        <Link to="/movies" className="link">
          Volver
        </Link>
      </form>
    </div>
  );
};

export default MovieCreate;
