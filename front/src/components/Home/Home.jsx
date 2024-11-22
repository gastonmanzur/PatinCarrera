import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../api/AuthContext';
import Login from '../api/Login';
import Register from '../api/Register';

const Home = () => {

  return (
    <div>
    <Routes>
      <Route Component={Login}/>
      <Route Component={Register}/>
      </Routes>  <Login />
      <Register />
    </div>
  );
};

export default Home;