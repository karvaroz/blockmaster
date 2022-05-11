import styled from "styled-components";

export const StyledSlider = styled.section`
  .imageSlide {
    width: 100%;
    object-fit: cover;
    object-position: top;
    max-height: 300px;
  }
  .ImageWrapper {
    position: relative;
  }
  .ImageWrapper::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(
      to bottom,
      hsl(246, 24%, 7%, 0) 60%,
      hsl(246, 24%, 7%) 100%
    );
  }
  .ImageWrapper::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(
      to top,
      hsl(246, 24%, 7%, 0) 90%,
      hsl(246, 24%, 7%) 100%
    );
  }
`;
