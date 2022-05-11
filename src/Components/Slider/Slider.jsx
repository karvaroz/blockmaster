import React from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Wrapper } from "../Navbar/NavbarStyle";
import { StyledSlider } from "./SliderStyle";

const Slider = () => {
  return (
    <StyledSlider>
      <Wrapper>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          className="mySwiper"
        >
          <SwiperSlide>
            <figure className="ImageWrapper">
              <img
                className="imageSlide"
                src="./images/mulan.jpg"
                alt="mulan"
                title="mulan"
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="ImageWrapper">
              <img
                className="imageSlide"
                src="./images/raya.jpg"
                alt="raya"
                title="raya"
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="ImageWrapper">
              <img
                className="imageSlide"
                src="./images/unidos.jpg"
                alt="unidos"
                title="unidos"
              />
            </figure>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </StyledSlider>
  );
};

export default Slider;
