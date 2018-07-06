import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Cover from './pages/Cover';
import Dashboard from './pages/Dashboard';
import AddExpense from './pages/AddExpense';
import Navbar from './components/Navbar'

// import all the pages and components relevant

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addExpense" component={AddExpense} />
      </Switch>
    </div>
  </Router>
);

export default App;
