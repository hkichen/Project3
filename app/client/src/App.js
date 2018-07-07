import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cover from './pages/Cover';
import Dashboard from './pages/Dashboard';
import AddExpense from './pages/AddExpense';
import Navbar from './components/Navbar'
import history from './history';
import Callback from './pages/Callback/Callback';
import Auth from './Auth/Auth';

const auth = new auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => (
  <Router history={history}>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => <Cover auth={auth} {...props} />} />

        <Route exact path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }} />

        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addExpense" component={AddExpense} />
      </Switch>
    </div>
  </Router>
);

export default App;
