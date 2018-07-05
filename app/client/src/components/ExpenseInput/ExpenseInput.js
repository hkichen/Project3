import React, { Component } from 'react';

class ExpenseInput extends Component {
  render() {
    return (
      <div>
        <form>
          <div class="form-group">
            <label for="">Expense Category</label>
            <select class="custom-select" id="folder-category">
              <option selected>Pick a Category</option>
              <option>Rent/Mortgage</option>
              <option>Utilities</option>
              <option>Car/Transportation</option>
              <option>Food/Dining</option>
              <option>Credit Cards</option>
              <option>Loans</option>
              <option>Medical/Health</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="">Bill Name</label>
            <input type="text" class="form-control" id="bill-name" />
          </div>
          <div class="form-group">
            <label for="">Amount/Monthly Average</label>
            <input
              type="text"
              class="form-control"
              id="bill-amount"
              placeholder="00.00"
            />
          </div>
          <div class="form-group">
            <label for="">Due Date</label>
            <input
              type="text"
              class="form-control"
              id="due-date"
              placeholder="MM/DD"
            />
          </div>
          <div class="form-group">
            <label for="">Account Paid From</label>
            <input
              type="text"
              class="form-control"
              id="account-paid"
              placeholder="Bank/Credit Card"
            />
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="auto-pay"
            />
            <label class="form-check-label" for="">
              Auto Pay
            </label>
          </div>
          <br />
          <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ExpenseInput;
