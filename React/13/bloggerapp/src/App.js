import React from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div className="app-container">
      <h1>Blogger App</h1>
      <p>Demonstrates various ways of conditional rendering in React.</p>

      <BookDetails />
      <BlogDetails />
      <CourseDetails />
    </div>
  );
}

export default App;
