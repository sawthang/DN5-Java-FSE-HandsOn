import React, { useState } from 'react';

// Conditional Rendering technique #2: ternary operator
// Conditional Rendering technique #3: logical && operator
function BlogDetails() {
  const [isPublished, setIsPublished] = useState(true);
  const [hasComments, setHasComments] = useState(false);

  const blog = {
    title: 'Understanding React Hooks',
    comments: ['Great article!', 'Very helpful, thanks.'],
  };

  return (
    <div className="card">
      <h2>Blog Details</h2>
      <p>
        <strong>{blog.title}</strong>
      </p>

      {/* Ternary operator */}
      {isPublished ? (
        <p style={{ color: 'green' }}>Status: Published</p>
      ) : (
        <p style={{ color: 'orange' }}>Status: Draft</p>
      )}

      {/* Logical && operator - only renders comments when hasComments is true */}
      {hasComments && (
        <ul>
          {blog.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      )}

      <button onClick={() => setIsPublished(!isPublished)}>
        Toggle Published Status
      </button>
      <button onClick={() => setHasComments(!hasComments)}>
        Toggle Comments
      </button>
    </div>
  );
}

export default BlogDetails;
