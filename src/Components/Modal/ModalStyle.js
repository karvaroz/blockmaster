import styled from "styled-components";

export const Tag = styled.span`
  border: 1px solid #a7a9be;
  border-radius: 5px;
  padding: 3px;
`;

export const StyledWrapper = styled.div`
  background: hsl(246, 24%, 7%, 0.92);
  position: fixed;
  z-index: 2;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dialog = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  padding: 0 1rem;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 50%;
  }
`;

export const ThumbnailWrapper = styled.div`
  text-align: center;
  flex-shrink: 0;
`;

export const Thumbnail = styled.img`
  border-radius: 4px;
  max-width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 1.6rem;
`;

export const Overview = styled.p`
  color: #fff;
  line-height: 1.5rem;
  font-size: 1rem;
  //cutting paragraph ...
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export const Details = styled.ul`
  list-style: none;
  color: #a7a9be;
  display: flex;
  gap: 2rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  .tags {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }
`;

export const ButtonActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.625rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: ${({ isPrimary }) => (isPrimary ? "#FED941" : "transparent")};
  border: 1px solid #fed941;
  color: ${({ isPrimary }) => isPrimary || "#FED941"};
  &:active {
    transform: scale(0.96);
  }
`;

export const ButtonClose = styled.button`
  cursor: pointer;
  position: absolute;
  right: 32px;
  top: -24px;
  font-size: 2rem;
  background: none;
  border: none;
  color: #fff;
  &:active {
    transform: scale(0.96);
  }
`;
