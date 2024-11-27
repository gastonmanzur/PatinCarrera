import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../api/AuthContext';
import Login from '../api/Login';
import Register from '../api/Register';


const Home = () => {

  const { logout, login, isAuthenticated } = useAuth();

  return (
    <div>

{!isAuthenticated ? (
  <>
  
       <Login />
      <Register />
     
  </>
) : (

  <h1>Novedades</h1>

)}

   
    </div>
  );
};

export default Home;