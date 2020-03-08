import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.scss';
import NavBar from  '../../componentsForGlobalUse/Header/index.js';
// import NavBar from  './././componentsForGlobalUse/Header/index.js';
 // three levels up to get to source


class Home extends Component {

    render(){

        return(
            <div>
                <NavBar></NavBar>
                <p>HOME Scene</p>
            </div>
        )
    }

} 

export default Home; 