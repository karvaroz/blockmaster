import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../Redux/actions/moviesActions";
import Loader from "../Loader/Loader";
import MovieCard from "../MovieCard/MovieCard";
import { StyledGridMovies } from "../MovieCard/MovieCardStyle";
import { Wrapper } from "../Navbar/NavbarStyle";

const MoviesBox = () => {
  const dispatch = useDispatch();

  const { movies } = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <Wrapper>
      <h2 style={{ color: "white" }}>Todas las peliculas</h2>

      <StyledGridMovies>
        {!movies ? (
          <Loader />
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </StyledGridMovies>
    </Wrapper>
  );
};

export default MoviesBox;
