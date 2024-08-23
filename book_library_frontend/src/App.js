import React from 'react';
import './App.css';
import BookList from './BookList';
import AddBookForm from './AddBookForm';

function App() {
  return (
    <div className="App">
      <AddBookForm />    
      <BookList />          
    </div>
  );
}

export default App;