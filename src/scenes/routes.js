
import { Route, Switch, withRouter, BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import React from 'react';
// import Home from './Home/index.js';
import Portfolio from './Portfolio'
import Meta from './Meta'
import Contact from './Contact'

import Login from './Login'
import Entry from './Entry'
import Entries from './Entries'

import About from './About'


import LoginService from  '../servicesForGlobalUse/Login/index.js';  // I'm in src > scenes > routes

class Routes extends React.Component {
    // MOVED THIS TO APP FOR STATE ACCESSIBILITY REASONS. 
    // login = (e, loginInfo) => {
    // }
    render () {
        console.log("scenes>Login>props", this.props)
        return (
            <>
            <Route
                key="projects"
                path="/projects"
                component={Portfolio}
            />
            <Route
                key="meta"
                path="/meta"
                component={Meta}
            />
            {/* <Route
                key="contact"
                path="/contact"
                component={Contact}
            /> */}


            <Route
                key="login"
                path="/login"
                render={() => <Login setHighLevelStateForUser={this.props.setHighLevelStateForUser} />}
                // setHighLevelStateForUser = {this.props.setHighLevelStateForUser}   //this.props.login is not a function                
            />
            <Route
                key="entry"
                path="/entry"
                render={() => <Entry user={this.props.user} />}
                // component={Entry}
                // user = {this.props.user}
                // user = {this.state}
            />
            <Route
                key="entries"
                path="/entries"
                component={Entries}
            />


            <Route                  // Must put more general path @ end or routing issues
                key="about"
                path="/"
                component={About}
            />
            <Route
                key="home"
                path="/"
                component={About}
            />
            </>
        )
    }

}
export default withRouter(Routes);
