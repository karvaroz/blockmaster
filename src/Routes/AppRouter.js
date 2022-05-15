import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Components/Login/Login";
import Movies from "../Components/Movies/Movies";
import MoviesLess from "../Components/Movies/MoviesLess";
import MoviesMore from "../Components/Movies/MoviesMore";
import Searching from "../Components/Search/Search";
import SignUp from "../Components/SignUp/SignUp";
import Users from "../Components/Users/Users";

const AppRouter = () => {

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        console.log("User is logged in");
        setIsLoggedIn(true);
        isLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [setIsLoggedIn, setChecking, isLoggedIn]);

  if (checking) {
    return <h1>Espere....</h1>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/movies" element={<Movies />} />
        <Route path="/moviesLessRated" element={<MoviesLess />} />
        <Route path="/moviesMoreRated" element={<MoviesMore />} />
        <Route path="/search" element={<Searching />} />
        <Route path="/crud" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
