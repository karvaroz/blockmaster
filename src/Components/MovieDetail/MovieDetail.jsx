import React from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { VoteAverage } from "../MovieCard/MovieCardStyle";
import {
  Button,
  ButtonActions,
  Content,
  Details,
  Dialog,
  Overview,
  StyledWrapper,
  Thumbnail,
  ThumbnailWrapper,
  Title,
} from "./MovieDetailStyle";


const MovieDetail = () => {
  const navigate = useNavigate();

  const { poster_path, original_title, vote_average, overview, release_date } =
    useSelector((store) => store.movies);
  
  return (
    <StyledWrapper>
      <Dialog>
        <ThumbnailWrapper>
          <Thumbnail
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
            title={original_title}
            width="220"
            height="330"
            loading="lazy"
          />
          <VoteAverage>
            <span>{vote_average}</span>
          </VoteAverage>
        </ThumbnailWrapper>
        <Content>
          <Title>{original_title}</Title>
          <Overview>{overview}</Overview>
          <Details>
            <li>{release_date} </li>
          </Details>
          <ButtonActions>
            <Button isPrimary>
              <img src="./icons/Property 1=play.svg" alt="" />
              VER AHORA
            </Button>
            <Button>
              <img src="./icons/Property 1=plus.svg" alt="" />
              VER DESPUÉS
            </Button>
            <Button onClick={() => navigate("/movies")}>Volver</Button>
          </ButtonActions>
        </Content>
      </Dialog>
    </StyledWrapper>
  );
};

export default MovieDetail;
