import React, { Component } from 'react';
import ExpenseInput from '../../components/ExpenseInput/ExpenseInput';

class AddExpense extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2 class="text-center">Add an Expense</h2>
            <ExpenseInput />
          </div>
        </div>
      </div>
    );
  }
}
export default AddExpense;
