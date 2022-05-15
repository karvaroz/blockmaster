import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMovie } from "../../Redux/actions/moviesActions";
import { Poster, StyledCard, VoteAverage } from "./MovieCardStyle";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { poster_path, vote_average, original_title, id } = movie;

  const handlerCLickCard = () => {
    dispatch(getMovie(id));
    navigate(`/detail/${id}`);


  };

  const getAverage = (avarage) => avarage < 7;

  return (
    <StyledCard>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
        title={original_title}
        loading="lazy"
        onClick={handlerCLickCard}
      />
      <VoteAverage average={getAverage(vote_average)}>
        {vote_average}
      </VoteAverage>
    </StyledCard>
  );
};

export default MovieCard;
