import React, { Component } from "react";

class EventExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      greeting: "",
      welcomeMessage: "",
      clickMessage: "",
    };

    // Bind 'this' so it refers to the component instance inside the handlers
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleWelcome = this.handleWelcome.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  // Increments the counter
  handleIncrement() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    // The Increment button also invokes this second method
    this.sayHello();
  }

  // Decrements the counter
  handleDecrement() {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  }

  // Says hello with a static message
  sayHello() {
    this.setState({ greeting: "Hello, this is a static message!" });
  }

  // Invoked with "welcome" as an argument
  handleWelcome(message) {
    this.setState({ welcomeMessage: `${message.charAt(0).toUpperCase()}${message.slice(1)}!` });
  }

  // Handles the synthetic event and displays "I was clicked"
  handlePress(event) {
    // 'event' here is React's SyntheticEvent, a cross-browser wrapper
    // around the browser's native event.
    console.log("Synthetic event type:", event.type);
    this.setState({ clickMessage: "I was clicked" });
  }

  render() {
    return (
      <div className="event-examples">
        <h2>Counter</h2>
        <p>Count: {this.state.counter}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        {this.state.greeting && <p>{this.state.greeting}</p>}

        <h2>Say Welcome</h2>
        <button onClick={() => this.handleWelcome("welcome")}>
          Say Welcome
        </button>
        {this.state.welcomeMessage && <p>{this.state.welcomeMessage}</p>}

        <h2>Synthetic Event</h2>
        <button onClick={this.handlePress}>OnPress</button>
        {this.state.clickMessage && <p>{this.state.clickMessage}</p>}
      </div>
    );
  }
}

export default EventExamples;
