import React from 'react';

// Replace this with your own office space image (e.g. import officeImage from './office.jpg')
const officeImage = 'https://placehold.co/600x300?text=Office+Space';

// A single office object with details like Name, Rent and Address
const office = {
  name: 'Sunshine Business Center',
  rent: 55000,
  address: '12 MG Road, Bangalore'
};

// A list of office objects to loop through and display more data
const officeList = [
  { id: 1, name: 'Sunshine Business Center', rent: 55000, address: '12 MG Road, Bangalore' },
  { id: 2, name: 'Silver Oak Corporate Park', rent: 72000, address: '45 Anna Salai, Chennai' },
  { id: 3, name: 'Palm Grove Offices', rent: 48000, address: '9 FC Road, Pune' },
  { id: 4, name: 'Skyline Towers', rent: 91000, address: '3 Nehru Place, Delhi' },
  { id: 5, name: 'Emerald Business Hub', rent: 60000, address: '22 Park Street, Kolkata' }
];

function App() {
  return (
    <div className="app-container">
      {/* Element to display the heading of the page */}
      <h1>Office Space Rental App</h1>

      {/* Attribute to display the image of the office space */}
      <img
        className="office-image"
        src={officeImage}
        alt="Office space for rent"
      />

      {/* Display the details of a single office object */}
      <div className="office-card">
        <h2>{office.name}</h2>
        <p>Address: {office.address}</p>
        <p>
          Rent: ₹
          <span
            style={{ color: office.rent < 60000 ? 'red' : 'green' }}
          >
            {office.rent}
          </span>
        </p>
      </div>

      {/* Loop through the list of office objects to display more data */}
      <div className="office-list">
        <h2>Available Office Spaces</h2>
        {officeList.map((item) => (
          <div className="office-card" key={item.id}>
            <h3>{item.name}</h3>
            <p>Address: {item.address}</p>
            <p>
              Rent: ₹
              <span
                style={{ color: item.rent < 60000 ? 'red' : 'green' }}
              >
                {item.rent}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
