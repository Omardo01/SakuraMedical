
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './css/blog.css'
import './css/principal.css'
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FormLogin from './pages/FormLogin';
import Login from './pages/Login';

const App = () => {
  
  const user = localStorage.getItem('user');

  return (
    <>
      <header>
        <div className="header-content">
          <div className="logo">
            <h1>Sakura<b>Medical</b></h1>
            { user === null ? <p className='bienvenida'>Inicia sesion para ver el contenido</p> : <p className='bienvenida'>Bienvenido {user}</p> }
          </div>
          <div className="menu" id="show-menu">
            <nav>
              <ul>
                <li><a href="/"> <i className="fas fa-home"></i> Inicio</a></li>
                <li><a href="about"> <i className="fa-thin fa-question"> </i>¿Quienes Somos?</a></li>
                <li><a href="contact"> <i className="fas fa-headset"></i>Contacto</a></li>
                { user === null ? 
                  <li><a href="login"> <i className="fas fa-headset"></i>Iniciar Sesion</a></li> :
                  <li><a href="logout"> <i className="fas fa-headset"></i>Cerrar Sesion</a></li>}
              </ul>
            </nav>
          </div>
          <div id="ctn-icon-search">
            <i class="fas fa-search" id="icon-search"></i>
          </div>
          <div id="icon-menu">
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </header>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Routes>
    </>
  )
}

export default App