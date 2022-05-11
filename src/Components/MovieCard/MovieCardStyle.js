import styled from "styled-components";

export const StyledCard = styled.div.attrs({ tabIndex: 0 })`
  position: relative;
  cursor: pointer;
  &:focus-visible {
    border-radius: 0.5rem;
    outline: 4px solid #f1f506;
  }
`;

export const Poster = styled.img`
  display: block;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 30px -3px rgba(0, 0, 0, 0.507);
  width: 100%;
`;

export const VoteAverage = styled.p`
  height: 50px;
  width: 50px;
  background: #0f0e17c5;
  border-radius: 50%;
  border: 2px solid;
  border-color: ${({ average }) => (average ? "red" : "yellow")};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  color: #fff;
`;

export const StyledGridMovies = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  place-content: center;
  align-items: center;
  gap: 1rem;
`;
