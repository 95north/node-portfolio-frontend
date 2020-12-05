import React from 'react';
import './App.css';
import './App.scss';
// import {Provider} from 'react-redux'
import { Route, Switch, withRouter, BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import routes from './scenes/routes.js'

// import LogIn from './components/LogIn.js';
// import LoginService from  './servicesForGlobalUse/Login/index.js';
// function App() {
class App extends React.Component {

    // state={
    //   user_token: null,     // refactored to put to Store
    //   user_name: null,
    //   user_id: null,         // refactored to put to Store
    // }


    // login = (e, loginInfo) => {
    //   LoginService.logInSubmit(e, loginInfo).then(
    //       this.setState({ 
    //         user_token: user.token,
    //         user_name: user.username,
    //         user_id: user.id
    //       })
    //     )
    //   }


    render(){
      return (
        <>
          <Router>
            {/* // login={this.login} */}
          
              <Switch>
                  {routes}
              </Switch>
          </Router>
        </>
      )
    }

}

export default App;
