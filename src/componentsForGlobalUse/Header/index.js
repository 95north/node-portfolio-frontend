import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

//import styles from './index.scss';
import './index.scss';




class Header extends Component {

    render(){

        return(
            <div className="header">
                <div className="color-fade-text">
                 <span className="half-spacing"> V I C T O R I A </span>  <span className="spacing">  S I G L E R </span>
                </div>
            </div>
        )
    }

} 

export default Header; 