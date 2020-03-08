import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.scss';



class Television extends Component {

    render(){

        return(
                // <div className="border">
                // </div>
            <div>
                <p>TV Global Use Component!</p>
                <img 
                    className="border"
                    src="TVimg.svg" 
                    alt="image of television, used as frame"
                    height="400"
                    width="600" 
                    // Height & Width  DO work to resize! 
                >
                    {/* <p> I am inside the image tag of the HTML!!! **** </p> */}
                </img>
            </div>
        )
    }

} 

export default Television; 