import React from "react";
import FlightList from "./FlightList";

function GuestPage() {
  return (
    <div className="page guest-page">
      <h2>Available Flights</h2>
      <p>Login to book a ticket.</p>
      <FlightList isLoggedIn={false} />
    </div>
  );
}

export default GuestPage;
