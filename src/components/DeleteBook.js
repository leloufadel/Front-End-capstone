import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/bookSlice';

const DeleteBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleDelete = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <>
      <div className="delete-container">
        <h2 className="title">Delete Books</h2>
        <div className="delete-list">
          {books.books.map((book) => (
            <div className="delete-book" key={book.id}>
              <div className="image-container">
                <img className="image" src={book.cover_photo} alt="book cover" />
              </div>
              <div className="book-info">
                <h3 className="delete-title">{book.name}</h3>
                <p className="delete-category">{book.category}</p>
                <button type="button" className="delete-button" onClick={() => handleDelete(book.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DeleteBook;
