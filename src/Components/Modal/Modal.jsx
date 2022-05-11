import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  ButtonActions,
  ButtonClose,
  Content,
  Details,
  Dialog,
  Overview,
  StyledWrapper,
  Tag,
  Thumbnail,
  ThumbnailWrapper,
  Title,
} from "./ModalStyle";

const Modal = () => {
//   const dispatch = useDispatch();
  const { movie, genders } = useSelector((state) => state);
  const handlerCloseModal = () => {
    // dispatch(closeModal());
  };

  const { title, poster_path, overview, genre_ids } = movie;

  //filtering an array of objects genders based on array of genders ids
  const listGenders = genders.filter((gender) => genre_ids.includes(gender.id));

  return (
    <StyledWrapper>
      <Dialog>
        <ThumbnailWrapper>
          <Thumbnail
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            title={title}
            width="220"
            height="330"
            loading="lazy"
          />
        </ThumbnailWrapper>
        <Content>
          <Title>{title}</Title>
          <Overview>{overview}</Overview>
          <Details>
            <li>2021</li>

            <li className="tags">
              {listGenders.map((gender) => (
                <Tag key={gender.id}>{gender.name}</Tag>
              ))}
            </li>
          </Details>
          <ButtonActions>
            <Button isPrimary>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.3333 16L10.6667 25.3334V6.66669L25.3333 16Z"
                  fill="#FFFFFE"
                />
              </svg>
              VER AHORA
            </Button>
            <Button>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.6667 14.6667V4H17.3333V14.6667H28V17.3333H17.3333V28H14.6667V17.3333H4V14.6667H14.6667Z"
                  fill="#FFFFFE"
                />
              </svg>
              VER DESPUÉS
            </Button>
          </ButtonActions>
        </Content>
        <ButtonClose onClick={handlerCloseModal}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7071 6.70711C16.0976 6.31658 16.0976 5.68342 15.7071 5.29289C15.3166 4.90237 14.6834 4.90237 14.2929 5.29289L8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L14.2929 18.7071C14.6834 19.0976 15.3166 19.0976 15.7071 18.7071C16.0976 18.3166 16.0976 17.6834 15.7071 17.2929L10.4142 12L15.7071 6.70711Z"
              fill="#FFFFFE"
            />
          </svg>
        </ButtonClose>
      </Dialog>
    </StyledWrapper>
  );
};

export default Modal;
