
import { Route, Switch, withRouter, BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import React from 'react';
// import Home from './Home/index.js';
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Meta from './Meta'


export default[
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
    // <Route
    //     key="diary"
    //     path="/diary"
    //     component={TodayI}
    // />,
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