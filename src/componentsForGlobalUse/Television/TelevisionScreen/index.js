import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.scss';



class TelevisionScreen extends Component {
    // TV Screen in orig 1200x800 tv is 487px high x 607px wide. 
    // 261px to the right, up 137px to start of tv frame in vector

    screen600x900 = ()  => {
        return(
            // <div className="screen-shape-600-900">
                    <img 
                        className = "screen-shape-600-900"
                        src="tv.jpg" 
                        alt="Photo of an old television"
                        // height="600"
                        // width="900" 
                    >
                    </img>
            // </div>
        )
    }    

    screen400x600 = ()  => {
        return(
            <div className="screen-shape-400-600">
            </div>
        )
    }    


    render(){
        let screen;
        switch (this.props.size){
            case "600x900":
                screen = this.screen600x900();
                break;
            case "400x600": 
                screen = this.screen400x600();
                break;
        }
        
        return(
            screen
        )
    }

} 

export default TelevisionScreen; 