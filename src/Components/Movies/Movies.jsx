import React from 'react'
import MoviesBox from '../MoviesBox/MoviesBox';
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'

const Movies = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <MoviesBox />
    </>
  );
}

export default Movies