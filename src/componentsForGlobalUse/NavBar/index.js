import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.scss';



class NavBar extends Component {

    render(){

        return(
            <div>
                <p>I'm the Nav Bar</p>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/diary'>Today, I ..</Link>

                {/* {this.props.user.user_id ? <Link to='/projects'>My Projects</Link> : null}
                {this.props.user.user_id ? <Link to='/projects'>My Projects</Link> : null}
             */}
            </div>
        )
    }

} 

export default NavBar; 