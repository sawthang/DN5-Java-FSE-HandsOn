import React, { Component } from "react";

// Approximate conversion rate: 1 INR = 0.011 EUR
const INR_TO_EUR = 0.011;

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: "",
      euros: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ rupees: event.target.value });
  }

  // Handles the Click event of the Convert button
  handleSubmit(event) {
    event.preventDefault();
    const rupees = parseFloat(this.state.rupees) || 0;
    const euros = (rupees * INR_TO_EUR).toFixed(2);
    this.setState({ euros });
  }

  render() {
    return (
      <div className="currency-convertor">
        <h2>Currency Convertor</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Indian Rupees (₹):{" "}
            <input
              type="number"
              value={this.state.rupees}
              onChange={this.handleChange}
              placeholder="Enter amount in rupees"
            />
          </label>
          <button type="submit">Convert</button>
        </form>
        {this.state.euros !== null && (
          <p>
            {this.state.rupees} INR = {this.state.euros} EUR
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
