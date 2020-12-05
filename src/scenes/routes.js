
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

    state={
        user_token: null,     // refactored to put to Store
        user_name: null,
        user_id: null,         // refactored to put to Store
    }


    login = (e, loginInfo) => {
        // let user = await LoginService.logInSubmit(e, loginInfo);
        // this.setState({ 
        //   user_token: user.token,
        //   user_name: user.username,
        //   user_id: user.id
        // })

        LoginService.logInSubmit(e, loginInfo).then( user => {
            this.setState({ 
                user_token: user.token,
                user_name: user.username,
                user_id: user.id
            })
        })
    }



    // export default[
    render () {
        return (
            [
            <Route
                key="projects"
                path="/projects"
                component={Portfolio}
            />,
            <Route
                key="meta"
                path="/meta"
                component={Meta}
            />,
            <Route
                key="contact"
                path="/contact"
                component={Contact}
            />,


            <Route
                key="login"
                path="/login"
                component={Login}
                login = {this.login}
            />,
            <Route
                key="entry"
                path="/entry"
                component={Entry}
                user = {this.state}
            />,
            <Route
                key="entries"
                path="/entries"
                component={Entries}
            />,


            <Route                  // Must put more general path @ end or routing issues
                key="about"
                path="/"
                component={About}
            />,
            <Route
                key="home"
                path="/"
                component={About}
            />,
            ]
        )
    }

}
export default Routes;
