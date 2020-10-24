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
        console.log("Remote Clicked!")
        this.setState({displayMenu: !this.state.displayMenu});
    }


    render(){

        return(
            <>

            <div className="navbar-width">
                <div className="nav">
                    <span onClick={this.toggleDisplayMenu}> <NavBarTvRemote></NavBarTvRemote> </span>
                    {/* <div className={this.state.displayMenu ? "displayElement" : "hideElement"}> */}
                    <div className="displayElement">

                        <div className="menu-shadow">

                            <div className="menu">
                                <div className="menu-reveal-bar">

                                    <span> <Link to='/'>About</Link> </span>
                                    {/* <span> <Link to='/about'>About</Link> </span> */}
                                    <span> <Link to='/projects'>Portfolio</Link> </span>
                                    <span> <Link to='/meta'>Meta</Link> </span>
                                    <span> <Link to='/contact'>Contact</Link> </span>
                                    <span> <Link to='/diary'>Today, I ..</Link> </span>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
            </>
        )
    }

} 

export default NavBar; 