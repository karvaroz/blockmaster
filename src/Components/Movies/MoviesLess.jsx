import React from 'react'

import MoviesBoxLess from '../MoviesBox/MovieBoxLess';
import Navbar from '../Navbar/Navbar';

import Slider from '../Slider/Slider';

const MoviesLess = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <MoviesBoxLess />
    </>
  );
}

export default MoviesLess