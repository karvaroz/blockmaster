import React from "react";
// import { useDispatch } from 'react-redux';
import { Poster, StyledCard, VoteAverage } from "./MovieCardStyle";

const MovieCard = ({ movie }) => {
  // const dispatch = useDispatch();

  const { poster_path, vote_average, original_title } = movie;

  const handlerCLickCard = () => {
    // dispatch(showModal(movie));
    console.log("click modal");
  };

  const getAverage = (avarage) => avarage < 7;

  return (
    <StyledCard onClick={() => handlerCLickCard()}>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
        title={original_title}
        loading="lazy"
      />
      <VoteAverage average={getAverage(vote_average)}>
        {vote_average}
      </VoteAverage>
    </StyledCard>
  );
};

export default MovieCard;