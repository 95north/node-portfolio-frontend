import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';
import { Route, Switch, withRouter, BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import NavBarTvRemote from "../NavBarTvRemote";
import styles from './index.scss';




class NavBar extends Component {
    constructor(props) {
        super(props)
    
        this.state={
            displayMenu: false
        }
    }
    
    toggleDisplayMenu = () => {
        this.setState({displayMenu: !this.state.displayMenu});
    }


    render(){

        return(
            <div className="nav">
                <span onClick={this.toggleDisplayMenu}> <NavBarTvRemote></NavBarTvRemote> </span>
                <div className={this.state.displayMenu ? "displayElement" : "hideElement"}>
                    {/* <span> <div>I'm the Nav Bar </div> </span> */}
                    <span> <Link to='/'>Home</Link> </span>
                    <span> <Link to='/about'>About</Link> </span>
                    <span> <Link to='/contact'>Contact</Link> </span>
                    <span> <Link to='/diary'>Today, I ..</Link> </span>
                </div>

            </div>
                // {this.props.user.user_id ? <Link to='/projects'>My Projects</Link> : null}
                // {this.props.user.user_id ? <Link to='/projects'>My Projects</Link> : null}
            
        )
    }

} 

export default NavBar; 