import React from 'react';

function BookItem({ title, author }) {
    return (
        <li>
            <strong>{title}</strong> by {author}
        </li>
    );
}

export default BookItem;
