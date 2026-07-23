import React from "react";
import FlightList from "./FlightList";

function UserPage(props) {
  return (
    <div className="page user-page">
      <h2>Welcome, Member</h2>
      <p>Select a flight below to book your ticket.</p>
      <FlightList isLoggedIn={true} onBook={props.onBook} />
    </div>
  );
}

export default UserPage;
