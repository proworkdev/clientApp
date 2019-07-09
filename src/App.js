import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import clientsComponent from './Components/clientsComponent';
import clientSearch from './Components/clientSearch';
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={clientsComponent} />
        <Route path="/search" component={clientSearch}/>
      </Switch>
    </Router>
  );
}

export default App;
