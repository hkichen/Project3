import React, { Component } from 'react';
import Input from './components/Input';

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
    console.log(target);

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Expense Category</label>
            <select
              className="custom-select"
              name="expenseCategory"
              value={this.state.value}
              onChange={this.handleInputChange}
            >
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
          <div className="form-group">
            <label>Bill Name</label>
            <input
              name="billName"
              type="text"
              value={this.state.billName}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="">Amount/Monthly Average</label>
            <input
              name="amount"
              type="text"
              value={this.state.amount}
              onChange={this.handleInputChange}
              placeholder="00.00"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="">Due Date</label>
            <input
              name="dueDate"
              type="text"
              value={this.state.dueDate}
              onChange={this.handleInputChange}
              placeholder="MM/DD"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="acctPaidFrom">Account Paid From</label>
            <input
              name="acctPaidFrom"
              type="text"
              value={this.state.acctPaidFrom}
              onChange={this.handleInputChange}
              placeholder="Bank/Credit Card"
              className="form-control"
            />
          </div>
          <div className="form-check">
            <input
              name="autoPay"
              type="checkbox"
              value={this.state.autoPay}
              onChange={this.handleInputChange}
              className="form-check-input"
            />
            <label className="form-check-label">Auto Pay</label>
          </div>
          <br />
          <input
            className="btn btn-primary btn-lg"
            type="submit"
            value="Submit"
          />
          <Input
            name="amount"
            type="text"
            value={this.state.amount}
            onChange={this.handleInputChange}
            placeholder="00.00"
          />
        </form>
      </div>
    );
  }
}
export default ExpenseInput;
