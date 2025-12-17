import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { books } from '../data/books';
import './BookDetail.css';

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="book-detail">
        <div className="book-detail__container">
          <Link to="/" className="btn--back">← Назад к каталогу</Link>
          <div className="not-found">Книга не найдена</div>
        </div>
      </div>
    );
  }

  return (
    <div className="book-detail">
      <div className="book-detail__container">
        <Link to="/" className="btn--back">
          ← Назад к каталогу
        </Link>

        <div className="book-detail__grid">
          {/* Обложка */}
          <div className="book-detail__cover">
            <img src={book.cover} alt={book.title} />
          </div>

          {/* Информация */}
          <div className="book-detail__info">
            <h1 className="book-detail__title">{book.title}</h1>
            <p className="book-detail__author">{book.author}</p>

            {/* Метаданные */}
            <div className="book-detail__meta">
              {book.year && (
                <div className="meta-item">
                  <span className="meta-label">Год</span>
                  <span className="meta-value">{book.year}</span>
                </div>
              )}
              {book.pages && (
                <div className="meta-item">
                  <span className="meta-label">Страниц</span>
                  <span className="meta-value">{book.pages}</span>
                </div>
              )}
              <div className="meta-item">
                <span className="meta-label">Жанр</span>
                <span className="chip genre">{book.genre}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Рейтинг</span>
                <span className="chip rating">★ {book.rating}</span>
              </div>
            </div>

            {/* Описание */}
            <div className="book-detail__description">
              <h3>О книге</h3>
              <p>{book.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;