import React from "react";

// Demonstrates "preventing a component from rendering":
// if there is no message to show, the component returns null
// and nothing is rendered to the DOM at all.
function BookingBanner(props) {
  if (!props.message) {
    return null;
  }

  return <div className="booking-banner">{props.message}</div>;
}

export default BookingBanner;
