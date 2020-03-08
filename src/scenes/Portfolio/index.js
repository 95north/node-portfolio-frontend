import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.scss';
import NavBar from  '../../componentsForGlobalUse/Header/index.js';
import Television from '../../componentsForGlobalUse/Television';
// import NavBar from  './././componentsForGlobalUse/Header/index.js';
 // three levels up to get to source


class Portfolio extends Component {

    render(){

        return(
            <div>
            <p>Portfolio Scene</p>
            <div className="portfolio">
                <NavBar></NavBar>
                <Television></Television>
            </div>
            </div>
        )
    }

} 

export default Portfolio; 