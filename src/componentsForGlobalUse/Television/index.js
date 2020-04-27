import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.scss';
import TelevisionScreen from "./TelevisionScreen";
import TelevisionLeftSideTextArea from "./TelevisionLeftSideTextArea";
import TelevisionButtonTop from "./TelevisionButtonTop";
import TelevisionButtonBottom from "./TelevisionButtonBottom";

class Television extends Component {
    state= {channel: 0}

    changeChannel = (buttonRotationsCount) => {
        // this.setState({channel: this.state.channel += 1})  // OLD
        
        // let nextChannel = this.generateNextChannelNumber(); 
        // this.setState({channel: nextChannel + 1})  

        this.setState({channel: this.generateNextChannelNumber(buttonRotationsCount) })  







    }

    generateNextChannelNumber = (buttonRotationsCount) => {
        let numberOfChannels = this.props.numberOfChannels;
         console.log("numberOfChannels in Television is : ", numberOfChannels)
        let channelNumber = this.state.channel;

        // console.log("Portfolio  ", this.props.channelNumber)

        if (channelNumber + 1 < numberOfChannels ){
            console.log("Works fine ~~~~~ ?  ", this.state.channel += 1)
            channelNumber+= 1;  // the array INDEX #. 
        } else {
            // need to use ROTATION COUNTER, not channelNumber's modulus. 
            channelNumber = (buttonRotationsCount % (numberOfChannels) );   //  2%2 = 0     3 % 2 =1   & 4 % 2 =0 ......
            console.log("in the else stmt in Portfolio scene Channel Numbers, POST CALCULATION !!!  props-channelNumber is : ", channelNumber)
        }
        return channelNumber;
    }



    tv400x600 = () => {                     //  SMALL SCREEN, NOT USING ATM
        console.log(" ___ ")
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
                            tvScreenContents={this.state.screenContents}
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
                <TelevisionLeftSideTextArea
                    tvExplanatoryAsideText= {this.state.projects}
                    channeNumber = {this.props.channelNumber}
                    // channel={this.state.channel}   // OLD WAY USING STATE
                >
                </TelevisionLeftSideTextArea>
            </div>
        )
    }

    
    tv600x900 = () => {
        console.log(" 600 x900  this.props.channelNumber ", this.props.channelNumber)
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
                            channelNumber={this.state.channel}   // OLD WAY USING STATE 
                            // channelNumber = {this.props.channelNumber}

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
                <TelevisionLeftSideTextArea
                    tvExplanatoryAsideText= {this.props.tvExplanatoryAsideText} // comes from Portfolio Scene API call
                    channelNumber={this.state.channel}     // OLD WAY USING STATE
                    // channelNumber = {this.props.channelNumber}
                >
                </TelevisionLeftSideTextArea>
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