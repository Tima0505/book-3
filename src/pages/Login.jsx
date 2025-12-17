import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';  // Создадим стиль ниже

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (savedUser.email === formData.email && savedUser.password === formData.password) {
      login(savedUser);
      navigate('/');
    } else {
      setError('Неверный email или пароль');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h1>Вход</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Пароль" value={formData.password} onChange={handleChange} required />
          <button type="submit">Войти</button>
        </form>
        <p>Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
      </div>
    </div>
  );
};

export default Login;