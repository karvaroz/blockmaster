import React from "react";
import {useNavigate } from "react-router-dom";

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
    const navigate = useNavigate()
  return (
    <StyledWrapper>
      <Dialog>
        <ThumbnailWrapper>
          <Thumbnail
            // src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            src="./images/Ava.jpg"
            // alt={title}
            // title={title}
            width="220"
            height="330"
            loading="lazy"
            alt="poster"
          />
          <VoteAverage>
            <span>8.1</span>
          </VoteAverage>
        </ThumbnailWrapper>
        <Content>
          <Title>Unknown Origins</Title>
          <Overview>
            In Madrid, Spain, a mysterious serial killer ruthlessly murders his
            victims by recreating the first appearance of several comic book
            superheroes. Cosme, a veteran police inspector who is about to
            retire, works on the case along with the tormented inspector David
            Valentín and his own son Jorge Elías, a nerdy young man who owns a
            comic book store.
          </Overview>
          <Details>
            <li>2021</li>
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
