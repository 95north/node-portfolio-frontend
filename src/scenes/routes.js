// import {Router} from 'react-router-dom';
import { Route, Switch, withRouter, BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import React from 'react';
// import { ComponentName } from './'
import Home from './Home/index.js';
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'


export default[

    // <Route
    //     key="about"
    //     path="/about"
    //     component={About}
    // />,
    <Route
        key="contact"
        path="/contact"
        component={Contact}
    />,
    <Route
        key="projects"
        path="/projects"
        component={Portfolio}
    />,
    <Route
        key="diary"
        path="/diary"
        component={Contact}
    />,
    <Route
        key="home"
        path="/"
        component={Home}
    />
]