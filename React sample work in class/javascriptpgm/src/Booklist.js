import React from 'react'
import BookItem from './BookItem';
import Header from './Header';

function Booklist() {
    const books = [
        { title: 'Book1', author: 'Author1' },
        { title: 'Book2', author: 'Author2' }
    ]
    return (
        <div>
            <Header />
            <ul>
                {books.map((book, index) => (<BookItem key={index} title={book.title} author={book.author} />))}
            </ul>
        </div>
    );
}

export default Booklist