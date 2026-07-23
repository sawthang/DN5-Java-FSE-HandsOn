import React from "react";
import flights from "./flightData";

function FlightList(props) {
  return (
    <table className="flight-table">
      <thead>
        <tr>
          <th>Airline</th>
          <th>From</th>
          <th>To</th>
          <th>Time</th>
          <th>Price (₹)</th>
          {props.isLoggedIn && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {flights.map((flight) => (
          <tr key={flight.id}>
            <td>{flight.airline}</td>
            <td>{flight.from}</td>
            <td>{flight.to}</td>
            <td>{flight.time}</td>
            <td>{flight.price}</td>
            {/* Only a logged-in user can book tickets */}
            {props.isLoggedIn && (
              <td>
                <button onClick={() => props.onBook(flight)}>Book</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FlightList;
