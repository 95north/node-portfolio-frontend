import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.css';
import Header from  '../../componentsForGlobalUse/Header/index.js';
import NavBar from  '../../componentsForGlobalUse/NavBar/index.js';
import LoginService from  '../../servicesForGlobalUse/Login/index.js';


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


    render(){
// logInSubmit is in  servicesForGlobalUse > Login
        return(
            <div className="login">
                <Header></Header>
                <NavBar></NavBar>
                <p>Login Scene</p>
                <form onSubmit={e => LoginService.logInSubmit(e, this.state)} >
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
        )
    }

} 

export default Login; 