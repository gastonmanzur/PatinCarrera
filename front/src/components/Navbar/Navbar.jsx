import React from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../api/AuthContext';




const Navbar = () => {

  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); 
    alert('Sesión cerrada'); 
  
  };

  return (



    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/img/logo_patin_carrera.png" // Ruta de la imagen del logo
            alt="Logo de la escuela"
            style={{ width: '22vh', height: '18vh' }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
           
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/protegida">Alumnos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/titulos">Títulos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/historia">Historia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login"  >Iniciar sesion</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Registro</Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link" onClick={handleLogout}>Cerrar Sesion</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
