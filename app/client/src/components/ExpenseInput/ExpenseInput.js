import React, { Component } from 'react';

class ExpenseInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label>Expense Category</label>
            <select
              class="custom-select"
              name="expenseCategory"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option selected>Pick a Category</option>
              <option value="Rent/Mortgage">Rent/Mortgage</option>
              <option value="Utilities">Utilities</option>
              <option value="Car/Transportation">Car/Transportation</option>
              <option value="Food/Dining">Food/Dining</option>
              <option value="Credit Cards">Credit Cards</option>
              <option value="Loans">Loans</option>
              <option value="Medical/Health">Medical/Health</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label>Bill Name</label>
            <input
              name="billName"
              type="text"
              value={this.state.billName}
              onChange={this.handleInputChange}
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="">Amount/Monthly Average</label>
            <input
              name="amount"
              type="text"
              value={this.state.amount}
              onChange={this.handleInputChange}
              placeholder="00.00"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="">Due Date</label>
            <input
              name="dueDate"
              type="text"
              value={this.state.dueDate}
              onChange={this.handleInputChange}
              placeholder="MM/DD"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="">Account Paid From</label>
            <input
              name="acctPaidFrom"
              type="text"
              value={this.state.acctPaidFrom}
              onChange={this.handleInputChange}
              placeholder="Bank/Credit Card"
              class="form-control"
            />
          </div>
          <div class="form-check">
            <input
              name="autoPay"
              type="checkbox"
              value={this.state.autoPay}
              onChange={this.handleInputChange}
              class="form-check-input"
            />
            <label class="form-check-label">Auto Pay</label>
          </div>
          <br />
          <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default ExpenseInput;
