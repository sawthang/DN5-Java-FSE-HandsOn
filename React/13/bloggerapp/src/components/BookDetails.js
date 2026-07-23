import React, { useState } from 'react';

// Conditional Rendering technique #1: if / else statement
function BookDetails() {
  const [isAvailable, setIsAvailable] = useState(true);

  const book = {
    title: 'Learning React',
    author: 'Alex Banks & Eve Porcello',
  };

  // Element variable set via if / else
  let availabilityMessage;
  if (isAvailable) {
    availabilityMessage = <p style={{ color: 'green' }}>This book is available.</p>;
  } else {
    availabilityMessage = <p style={{ color: 'red' }}>This book is currently out of stock.</p>;
  }

  return (
    <div className="card">
      <h2>Book Details</h2>
      <p>
        <strong>{book.title}</strong> by {book.author}
      </p>
      {availabilityMessage}
      <button onClick={() => setIsAvailable(true)}>Mark Available</button>
      <button onClick={() => setIsAvailable(false)}>Mark Unavailable</button>
    </div>
  );
}

export default BookDetails;
