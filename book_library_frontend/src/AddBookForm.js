import React, { useState } from 'react';
import axios from 'axios';
import './components/AddBookForm.css';

const AddBookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/books/', { title, author })
            .then(response => {
                console.log('Book added:', response.data);
                setTitle('');
                setAuthor('');
            })
            .catch(error => console.error('Error adding book:', error));
    };

    return (
        <div className="add-book-form">
            <form onSubmit={handleSubmit}>
                <h2>Add a New Book</h2>
                <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBookForm;