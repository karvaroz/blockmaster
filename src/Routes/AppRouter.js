import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Components/Login/Login";
import MovieDetail from "../Components/MovieDetail/MovieDetail";
import Movies from "../Components/Movies/Movies";
import MoviesLess from "../Components/Movies/MoviesLess";
import MoviesMore from "../Components/Movies/MoviesMore";
import SignUp from "../Components/SignUp/SignUp";
import Users from "../Components/Users/Users";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        console.log("User is logged in");
        setIsLoggedIn(true);
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
        <Route
          path="/"
          element={
            <PublicRoutes isAuth={isLoggedIn}>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoutes isAuth={isLoggedIn}>
              <SignUp />
            </PublicRoutes>
          }
        />
        <Route
          path="/movies"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <Movies />
            </PrivateRoutes>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <MovieDetail />
            </PrivateRoutes>
          }
        />
        <Route
          path="/moviesLessRated"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <MoviesLess />
            </PrivateRoutes>
          }
        />
        <Route
          path="/moviesMoreRated"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <MoviesMore />
            </PrivateRoutes>
          }
        />
        <Route
          path="/crud"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <Users />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
