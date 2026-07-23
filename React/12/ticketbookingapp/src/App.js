import React, { Component } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import BookingBanner from "./BookingBanner";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      bookingMessage: "",
    };

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleBook = this.handleBook.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true, bookingMessage: "" });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false, bookingMessage: "" });
  }

  handleBook(flight) {
    this.setState({
      bookingMessage: `Ticket booked on ${flight.airline} from ${flight.from} to ${flight.to}!`,
    });
  }

  render() {
    // Element variable: decide once which page and which auth button to show,
    // then reference the variables in the returned JSX below.
    let page;
    let authButton;

    if (this.state.isLoggedIn) {
      page = <UserPage onBook={this.handleBook} />;
      authButton = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      page = <GuestPage />;
      authButton = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Ticket Booking App</h1>
          {authButton}
        </header>
        <BookingBanner message={this.state.bookingMessage} />
        {page}
      </div>
    );
  }
}

export default App;
