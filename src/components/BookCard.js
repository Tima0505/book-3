import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book }) => {
  return (
    <Link to={`/book/${book.id}`} className="book-card">
      <div className="book-card__image">
        <img src={book.cover} alt={book.title} />
      </div>
      <div className="book-card__content">
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__author">{book.author}</p>
        <p className="book-card__genre">{book.genre}</p>
        <div className="book-card__rating">
          ⭐ {book.rating}
        </div>
      </div>
    </Link>
  );
};

export default BookCard;