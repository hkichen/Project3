import React, { Component } from 'react';
import Input from '../Input/Input';
import CustomSelect from '../CustomSelect/CustomSelect';
import CheckBox from '../CheckBox/CheckBox';

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
          <CustomSelect
            name="expenseCategory"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
          <label>Bill Name</label>
          <Input
            name="billName"
            type="text"
            value={this.state.billName}
            onChange={this.handleInputChange}
          />
          <label>Amount/Monthly Average</label>
          <Input
            name="amount"
            type="text"
            value={this.state.amount}
            onChange={this.handleInputChange}
            placeholder="00.00"
          />
          <label>Due Date</label>
          <Input
            name="dueDate"
            type="text"
            value={this.state.dueDate}
            onChange={this.handleInputChange}
            placeholder="MM/DD"
          />
          <label>Account Paid From</label>
          <Input
            name="acctPaidFrom"
            type="text"
            value={this.state.acctPaidFrom}
            onChange={this.handleInputChange}
            placeholder="Bank/Credit Card"
          />
          <CheckBox
            name="autoPay"
            type="checkbox"
            value={this.state.autoPay}
            onChange={this.handleInputChange}
          />
          <br />
          <input
            className="btn btn-warning btn-lg"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}
export default ExpenseInput;
