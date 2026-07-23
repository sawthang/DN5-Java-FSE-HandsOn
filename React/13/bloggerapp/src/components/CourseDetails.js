import React, { useState } from 'react';

// Conditional Rendering technique #4: switch statement
function CourseDetails() {
  const [status, setStatus] = useState('enrolled');

  const course = {
    name: 'React JS Fundamentals',
  };

  const renderStatus = () => {
    switch (status) {
      case 'enrolled':
        return <p style={{ color: 'blue' }}>You are enrolled in this course.</p>;
      case 'completed':
        return <p style={{ color: 'green' }}>You have completed this course.</p>;
      case 'notEnrolled':
        return <p style={{ color: 'gray' }}>You are not enrolled in this course.</p>;
      default:
        return <p>Unknown status.</p>;
    }
  };

  return (
    <div className="card">
      <h2>Course Details</h2>
      <p>
        <strong>{course.name}</strong>
      </p>
      {renderStatus()}
      <button onClick={() => setStatus('enrolled')}>Enrolled</button>
      <button onClick={() => setStatus('completed')}>Completed</button>
      <button onClick={() => setStatus('notEnrolled')}>Not Enrolled</button>
    </div>
  );
}

export default CourseDetails;
