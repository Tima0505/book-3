import React from 'react';
import BookCard from './BookCard';
import { books } from '../data/books';
import './BookList.css';

const BookList = () => {
  return (
    <div className="booklist">
      <div className="booklist__header">
        <h1>📚 Каталог книг</h1>
        <p>Выберите книгу для подробного просмотра</p>
      </div>
      <div className="booklist__grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;