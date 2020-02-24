import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import {Provider} from 'react-redux'
import { Route, Switch, withRouter, BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import routes from './scenes/routes.js'


function App() {
  return (
    <>
    <Router>
      <Switch>
        {routes}
      </Switch>
    </Router>

      <div className="App">
        <header className="App-header">

          <p>
            Tori's Portfolio Landing Page
          </p>
          

        </header>
      </div>
    </>
  );
}

export default App;
