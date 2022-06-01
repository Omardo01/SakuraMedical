import React from 'react'
import '../css/blog.css'

const Admin = () => {

  const admin = localStorage.getItem('user');

  return (
    <>
      <header>
        <div className="header-content">
          <div className="logo">
            <h1>Sakura<b>Medical</b></h1>
            <h2 className='admin'>Modo Administrador</h2>
            <p className='bienvenida'>Bienvenido {admin}</p>
          </div>
          <div className="menu" id="show-menu">
            <nav>
              <ul>
                <li><a href="/logout"> <i className="fas fa-home"></i>Cerrar Sesion</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className='admin-content'>
        Contenido de administrador: Usuarios, posts, etc.
      </div>

    </>
  )
}

export default Admin