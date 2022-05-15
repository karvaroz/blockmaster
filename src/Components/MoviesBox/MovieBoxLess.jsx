import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../Redux/actions/moviesActions";
import Loader from "../Loader/Loader";
import MovieCard from "../MovieCard/MovieCard";
import { StyledGridMovies } from "../MovieCard/MovieCardStyle";
import { Wrapper } from "../Navbar/NavbarStyle";

const MoviesBoxLess = () => {
  const dispatch = useDispatch();

  const { movies } = useSelector((store) => store.movies);

  const filteredMovies = movies.filter((movie) => movie.vote_average < 7);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <Wrapper>
      <h2 style={{ color: "white" }}>Peliculas menos valoradas</h2>

      <StyledGridMovies>
        {movies == null ? (
          <Loader />
        ) : (
          filteredMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        )}
      </StyledGridMovies>
    </Wrapper>
  );
};

export default MoviesBoxLess;
