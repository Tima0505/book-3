import React from 'react';
import BookList from '../components/BookList';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero__content">
          <h1>🌟 Добро пожаловать в библиотеку</h1>
          <p>Откройте для себя лучшие книги всех времен и народов</p>
        </div>
      </header>
      <BookList />
    </div>
  );
};

export default Home;