import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';  // Один стиль для обеих страниц

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }
    if (formData.password.length < 6) {
      setError('Пароль должен быть минимум 6 символов');
      return;
    }

    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password
    };

    register(userData);
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h1>Регистрация</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input name="firstName" placeholder="Имя" value={formData.firstName} onChange={handleChange} required />
          <input name="lastName" placeholder="Фамилия" value={formData.lastName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Пароль" value={formData.password} onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Подтвердите пароль" value={formData.confirmPassword} onChange={handleChange} required />
          <button type="submit">Зарегистрироваться</button>
        </form>
        <p>Уже есть аккаунт? <Link to="/login">Войти</Link></p>
      </div>
    </div>
  );
};

export default Register;