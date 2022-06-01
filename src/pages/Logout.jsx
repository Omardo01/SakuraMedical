import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/login.css'


const Logout = () => {

  const navigate = useNavigate();

  setTimeout(() => {
    localStorage.removeItem('user')
    navigate('/')
  }, 3000);

  return (
    <div className='logout'>
      <div>
      <img width={"100px"} src='https://cdn-icons-png.flaticon.com/512/1053/1053210.png' />
      <h1>Cerrando sesion... </h1>
      <h2>Redireccionando a la pagina principal</h2>
      <h2>Hasta pronto!</h2>
      </div>
    </div>

  )
}

export default Logout