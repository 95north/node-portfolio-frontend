// import {Router} from 'react-router-dom';
import { Route, Switch, withRouter, BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import React from 'react';
// import { ComponentName } from './'
import Home from './Home/index.js';
import { About } from './About'
import { Contact } from './Contact'


export default[
    <Route
        key="home"
        path="/"
        component={Home}
    />,
    <Route
        key="about"
        path="/about"
        component={About}
    />,
    <Route
        key="contact"
        path="/contact"
        component={Contact}
    />,
    <Route
        key="diary"
        path="/diary"
        component={Contact}
    />
]