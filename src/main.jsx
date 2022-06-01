import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import About from './pages/About'
import Admin from './pages/Admin'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import FormLogin from './pages/FormLogin'
import Login from './pages/Login'
import Logout from './pages/Logout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<FormLogin />} />
        <Route path="admin" element={<Admin />} />
        <Route path="logout" element={<Logout />} />
        <Route path="/" element={<App />}>
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
