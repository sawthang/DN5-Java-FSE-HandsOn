import React from 'react';
import CohortDetails from './CohortDetails';

const cohorts = [
  { id: 1, name: 'React Batch 1', startDate: '01-Jun-2026', endDate: '30-Jun-2026', status: 'ongoing' },
  { id: 2, name: 'React Batch 2', startDate: '01-Mar-2026', endDate: '30-Apr-2026', status: 'completed' },
  { id: 3, name: 'Angular Batch 1', startDate: '15-May-2026', endDate: '15-Jul-2026', status: 'ongoing' }
];

function App() {
  return (
    <div>
      <h1>Cohort Dashboard</h1>
      {cohorts.map((cohort) => (
        <CohortDetails
          key={cohort.id}
          name={cohort.name}
          startDate={cohort.startDate}
          endDate={cohort.endDate}
          status={cohort.status}
        />
      ))}
    </div>
  );
}

export default App;
