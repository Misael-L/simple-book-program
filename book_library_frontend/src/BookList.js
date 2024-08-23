import React, {useState, useEffect} from "react";
import axios from "axios";
import './components/BookList.css';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/books/')
        .then(response => setBooks(response.data))
        .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <div className="book-list">
            <h1>Book List</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>{book.title} by {book.author}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;