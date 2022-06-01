import React from 'react'
import { useState } from 'react';
import '../css/login.css'
import FormLogin from './FormLogin'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button, Modal, Form } from 'react-bootstrap';

const Login = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleSubmit1 = () => {
    setShow1(false);
    localStorage.setItem('user', user);
    navigate('/', { replace: true });
    window.location.reload();
  }

  const handleSubmit2 = () => {
    setShow2(false);
    localStorage.setItem('user', user);
    navigate('/admin', { replace: true });
    window.location.reload();
  }

  return (
    <>
      <div className='login'>
        <div className='login-container-u'>
          <h2> -- Usuarios --</h2>
          <hr />
          <Link className='button-u' to="/register">Registrar</Link>
          <button onClick={handleShow1} className='button-u'>Ingresar como usuario</button>
        </div>
        <div className='login-container-a'>
          <h2> -- Administradores --</h2>
          <hr />
          <button onClick={handleShow2} className='button-a'>Ingresar como administrador</button>
        </div>
      </div>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e) => setUser(e.target.value)}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="minimo 6 caracteres"
                autoFocus
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit1}>
            Iniciar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesion Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="datos proporsionados"
                autoFocus
                onChange={(e) => setUser(e.target.value)}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="datos proporsionados"
                autoFocus
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit2}>
            Iniciar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    
  )
}

export default Login