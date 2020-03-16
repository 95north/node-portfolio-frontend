import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.scss';
import Header from  '../../componentsForGlobalUse/Header/index.js';
import NavBar from  '../../componentsForGlobalUse/NavBar';
import Television from '../../componentsForGlobalUse/Television';
// import NavBar from  './././componentsForGlobalUse/Header/index.js';
 // three levels up to get to source


class Portfolio extends Component {

    render(){

        return(
            <div className="portfolio">
                <p>Portfolio Scene</p>
                {/* <div className="portfolio"> */}
                    <Header></Header>
                    <NavBar></NavBar>
                    <Television></Television>
                {/* </div> */}
            </div>
        )
    }

} 

export default Portfolio; 