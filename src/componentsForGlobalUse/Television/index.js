import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.scss';
import TelevisionScreen from "./TelevisionScreen";
import TelevisionLeftSideTextArea from "./TelevisionLeftSideTextArea";
import TelevisionButtonTop from "./TelevisionButtonTop";
import TelevisionButtonBottom from "./TelevisionButtonBottom";

class Television extends Component {
    state= {channel: null}

    changeChannel = () => {
        this.setState({channel:null})
    }


    tv400x600 = () => {
        return(
            <div>
                <div className="tv-positioning-400-600">
                    <img 
                        // className="border"
                        // src="TVimg.svg" 
                        src="TvWithoutButtons.svg" 
                        alt="image of television, used as frame"
                        height="400"
                        width="600" 
                        // Height & Width  DO work to resize! 
                    >
                    </img>

                    <div className="screen-placement-400-600">
                        <TelevisionScreen 
                            size="400x600"
                            channel={this.state.channel}
                        />  
                    </div>
                    <TelevisionButtonTop 
                        size="400x600" 
                        changeChannel={this.changeChannel}
                    />
                    <TelevisionButtonBottom 
                        size="400x600" 
                    />
                </div>
                <TelevisionLeftSideTextArea/>
            </div>
        )
    }

    
    tv600x900 = () => {
        return(
            <div>
                <div className="tv-positioning-600-900">
                    <img 
                        // src="TVimg.svg" 
                        src="TvWithoutButtons.svg" 
                        alt="image of television, used as frame"
                        height="600"
                        width="900" 
                        // className="tv-clip-600-900"   Does nothing. 
                    >
                    </img>
                    <div className="screen-placement-600-900">
                        <TelevisionScreen 
                            size="600x900"
                            channel={this.state.channel}
                        />  
                    </div>
                    <TelevisionButtonTop 
                        size="600x900" 
                        changeChannel={this.changeChannel}
                    />
                    <TelevisionButtonBottom 
                        size="600x900" 
                    />
                </div>
                <TelevisionLeftSideTextArea/>
            </div>
        )
    } 


    render(){
        let tv600x900px = this.tv600x900();

        return(
            tv600x900px
        );
    }

} 

export default Television; 