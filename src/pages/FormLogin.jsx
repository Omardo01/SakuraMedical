import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function FormLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Nombre, setNombre] = useState('');
  const [Apellido, setApellido] = useState('');

  const handleSubmit = (e) => {
    // Mandar registro a la base de datos
    e.preventDefault();
    alert(`Email: ${email} Password: ${password} Nombre: ${Nombre} Apellido: ${Apellido}`);
    navigate('/login', { replace: true });
  }

  return (
    <>
      <header>
        <div className="header-content">
          <div className="logo">
            <h1>Sakura<b>Medical</b></h1>
            <h2 className='admin'>Registro</h2>
          </div>
          <div className="menu" id="show-menu">
            <nav>
              <ul>
                <li><a href="/login"> <i className="fas fa-home"></i> Volver</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className='register'>
        <div className='register-container'>
          <div className='register-letras'>
            <h3> Bienvenido a Sakura Medical</h3>
            <h3> Registrate con tus datos:</h3>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Ingresa tu email" />
              <Form.Text className="text-muted">
                Debe ser un email valido y que no haya sido usado
              </Form.Text>
              <Form.Label>Nombre</Form.Label>
              <Form.Control onChange={(e) => setNombre(e.target.value)} type="text" placeholder="Ingresa tu nombre" />
              <Form.Label>Apellido</Form.Label>
              <Form.Control onChange={(e) => setApellido(e.target.value)} type="text" placeholder="Ingresa tu apellido" />
              <Form.Label>Contraseña</Form.Label>
              <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Ingresa tu contraseña" />
              <Form.Text className="text-muted">
                Debe tener al menos 8 caracteres
              </Form.Text>
            </Form.Group>
            <br />
            <Button type="submit">Registrarme</Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default FormLogin