import React from 'react';
import './App.css';
import './App.scss';
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


          <p className="fonty">
            Tori's Portfolio Landing Page 
            (Hello from App.js)
          </p>



      {/* <div className="App">
        <header className="App-header">
          <p>
            Tori's Portfolio Landing Page 
            (Hello from App.js)
          </p>
        </header>
      </div> */}
    </>
  );
}

export default App;
