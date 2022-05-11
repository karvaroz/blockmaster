import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import SignUp from '../Components/SignUp/SignUp';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter