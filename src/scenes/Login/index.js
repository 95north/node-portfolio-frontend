import React, { Component } from 'react';
// import { Route, Switch, withRouter, BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';  // need for redirect to work. 

// import CSSModules from 'react-css-modules';

import styles from './index.css';
import Header from  '../../componentsForGlobalUse/Header/index.js';
import NavBar from  '../../componentsForGlobalUse/NavBar/index.js';
import LoginService from  '../../servicesForGlobalUse/Login/index.js';
// import { useCount } from "./use-count";
var loginServiceInstance = new LoginService();


class Login extends Component {
    state={
        username:"",
        password:""
    }

    changeHandler = (event)=>{
        let inputName = event.target.name
        this.setState(
            {[inputName]: event.target.value}
        )
    }

    submitHandler = async (e) => {
        e.preventDefault();
        // console.log("LoginService is: ", loginServiceInstance)   
        let userData = await loginServiceInstance.loginSubmit(e, this.state);
        // console.log("in Login, userdata :", userData)  // WORKS 
        console.log("Login's props are:", this.props)
        let highLevelStateSet = await this.props.setHighLevelStateForUser(userData.body);   // set userdata to high level component state.
        this.props.history.push('/entry'); 
    }

    submitHandlerNewUser = (e) => {
        e.preventDefault();
        console.log("Hit New user submit handler!")
        loginServiceInstance.createUser(e, this.state);
    }


    render(){
// logInSubmit is in  servicesForGlobalUse > Login
        return(
            <>
            <div className="login">
            <br/>
            <br/>
            <br/>
                {/* <Header></Header>
                <NavBar></NavBar> */}
                <p>Login Scene</p>
                <form onSubmit={e => this.submitHandler(e)} >
                    <input 
                        type = "text" 
                        name = "username"
                        placeholder="Username" 
                        value={this.state.username} 
                        onChange={this.changeHandler}
                    />    
                    <input 
                        type = "password"
                        name = "password"
                        placeholder="Password" 
                        value={this.state.password} 
                        onChange={this.changeHandler}
                    />
                    <button>Login</button>
                </form>
            </div>

            <div>
            <br/>
            <br/>
            <br/>
                <p>Create a New User</p>
                <form onSubmit={e => this.submitHandlerNewUser(e)} >
                    <input 
                        type = "text" 
                        name = "username"
                        placeholder="Username for New User" 
                        value={this.state.username} 
                        onChange={this.changeHandler}
                    />    
                    <input 
                        type = "password"
                        name = "password"
                        placeholder="Password for New User" 
                        value={this.state.password} 
                        onChange={this.changeHandler}
                    />
                    <button>Create User</button>
                </form>
            <br/>
            <br/>
            <br/>
            </div>
            </>
        )
    }

} 

export default withRouter(Login); 