import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.scss';



class NavBarTvRemote extends Component {

    render(){

        return(
                // <div className="border">
                // </div>
            <div>
                {/* <div className="border"> */}
                <div>
                    <img 
                        src="remote.svg" 
                        alt="image of tv remote"
                        height="120"
                        width="120" 
                        className="remote"
                        // Height & Width  DO work to resize! 
                    >
                    </img>
                </div>
            </div>
        )
    }

} 

export default NavBarTvRemote; 