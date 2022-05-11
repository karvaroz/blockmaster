import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../Redux/actions/moviesActions";
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
      <h2 style={{   color: "white"}}>Todas las peliculas</h2>

      <StyledGridMovies>
        {movies ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <h1>Loading...</h1>
        )}
      </StyledGridMovies>
    </Wrapper>
  );
};

export default MoviesBox;
