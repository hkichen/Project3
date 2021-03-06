import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Cover from './pages/Cover';
import Dashboard from './pages/Dashboard';
import AddExpense from './pages/AddExpense';

// import all the pages and components relevant

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addExpense" component={AddExpense} />
      </Switch>
    </div>
    {/* Insert routes to navigate the app here:
    - route to sign up
    - route to log in
    - route to home page (after logging in -- must be logged in to see the rest of these pages)
    - route to create new folder (form)
    - route to all folders
    - route to add statemens (form)   */}
  </Router>
);

export default App;
