import React from 'react';
import './App.css';
import './App.scss';
// import {Provider} from 'react-redux'
import { Route, Switch, withRouter, BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import Routes from './scenes/routes.js'
import LoginServices from './servicesForGlobalUse/Login';

// import LogIn from './components/LogIn.js';
// import LoginService from  './servicesForGlobalUse/Login/index.js';
// function App() {
class App extends React.Component {

  state={
    user_token: "",
    user_name: "",
    user_id: ""
    // username:"",
    // password:""
  }

  setHighLevelStateForUser = (user) => {
    console.log("In App.js setHighLevelStateForUser - user is : ", user)
    this.setState({
      user_token: user.token,
      user_name: user.uinfo,
      user_id: user.uId
    })
  }


    render(){
      // console.log("routes are: ", routes)
      return (
        <>
          <Router>
            {/* // login={this.login} */}
          
              <Switch>
                <Routes
                  setHighLevelStateForUser={this.setHighLevelStateForUser}
                  user={this.state}
                >
                </Routes>
                  {/* {routes} */}
              </Switch>
          </Router>
          {/* <LoginServices
            setHighLevelStateForUser={this.setHighLevelStateForUser}
          > */}

          {/* </LoginServices> */}
        </>
      )
    }

}

export default App;
