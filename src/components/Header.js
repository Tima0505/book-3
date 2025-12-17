import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';  // ← Важно!
import './Header.css';

const Header = () => {
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);  // ← Берём пользователя и logout

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          Моя Библиотека
        </Link>

        <nav className="header__nav">
          <Link
            to="/"
            className={location.pathname === '/' ? 'header__link active' : 'header__link'}
          >
            Главная
          </Link>

          {user ? (
            <>
              <span className="header__user">Привет, {user.firstName}!</span>
              <button onClick={logout} className="header__logout">
                Выйти
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="header__link">Войти</Link>
              <Link to="/register" className="header__link">Регистрация</Link>
            </>
          )}

          <a
            href="https://github.com/Tima0505/book-catalog-2"
            target="_blank"
            rel="noreferrer"
            className="header__link"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;