import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.scss';
import TelevisionScreen from "./TelevisionScreen";
import TelevisionLeftSideTextArea from "./TelevisionLeftSideTextArea";
import TelevisionButtonTop from "./TelevisionButtonTop";
import TelevisionButtonBottom from "./TelevisionButtonBottom";

class Television extends Component {
    state= {
        channel: 0,
        bottomButtonChannel : 0
    }

    changeChannel = (buttonRotationsCount) => {
        this.setState({
            channel: this.generateNextChannelNumber(buttonRotationsCount),
            bottomButtonChannel : 0    // reset to 0. 

            // bottomButtonChannel : 0    // Crashes TelevisionLeftSideTextArea: 
            // ... 23 |             <h2> {this.props.tvExplanatoryAsideText ? this.props.tvExplanatoryAsideText[this.props.channelNumber]["header"] : null} 
        })  
    }

    generateNextChannelNumber = (buttonRotationsCount) => {
        let numberOfChannels = this.props.numberOfChannels;
        //  console.log("numberOf top uChannels in Television is : ", numberOfChannels)
        let channelNumber = this.state.channel;  // why state? 

        if (channelNumber + 1 < numberOfChannels ){
            channelNumber+= 1;  // the array INDEX #. 
        } else {
            // need to use ROTATION COUNTER, not channelNumber's modulus. 
            channelNumber = (buttonRotationsCount % (numberOfChannels) );   //  2%2 = 0     3 % 2 =1   & 4 % 2 =0 ......
        }
        // console.log("else stmt in Portfolio scene Channel Numbers, POST CALCULATION !! channelNumber is : ", channelNumber)
        return channelNumber;
    }


    rotateBottomButtonChangeChannel = (buttonRotationsCount) => {  // image # to display for given project
        let numberOfBottomButtonChannels =  this.props.tvScreenImagesArrayOfArrays[this.state.channel].length;        // ie. # of images for ea. project. 
        // console.log("numberOfImages in Television is : ", numberOfBottomButtonChannels)
        let bottomButtonChannelNumber = this.state.bottomButtonChannel;

        // console.log("Portfolio  ", this.props.bottomButtonChannelNumber)

        if (bottomButtonChannelNumber + 1 < numberOfBottomButtonChannels ){
           bottomButtonChannelNumber+= 1;  // the array INDEX #. 
        } else {
           // need to use ROTATION COUNTER, not bottomButtonChannelNumber's modulus. 
           bottomButtonChannelNumber = (buttonRotationsCount % (numberOfBottomButtonChannels) );   //  2%2 = 0     3 % 2 =1   & 4 % 2 =0 ......
        }
        this.setState({bottomButtonChannel: bottomButtonChannelNumber})  
    }


    tvResponsive = () => {
        // console.log("Tv Component  this.props.channelNumber ", this.props.channelNumber)  // IS UNDEFINED ! 
        // console.log("Tv Component  this.state.channel ", this.state.channel)
        console.log("this.props.tvScreenImagesArrayOfArrays[this.state.channel]", this.props.tvScreenImagesArrayOfArrays[this.state.channel])

        return(
            <div>
                <div className="tv-responsiveness">
                    <img 
                        src="TvWithoutButtons.svg" 
                        alt="image of television, used as frame"
                        height="600"
                        width="900" 
                    >
                    </img>
                    <div className="screen-placement-responsive">  
                    {/* Refactor above to be className within TelevisionScreen? */}
                        <TelevisionScreen 
                            size="600x900" 
                            channelNumber={this.state.channel}   // OLD WAY USING STATE
                            // tvScreenImagesArrayOfArrays = 
                            bottomButtonChannel = {this.state.bottomButtonChannel}   // Need to know image # to display. 
                            tvScreenImagesArray = {this.props.tvScreenImagesArrayOfArrays[this.state.channel]}     //Change to only pass down array for one project! 
                        />  
                    </div>
                    <TelevisionButtonTop 
                        changeChannel={this.changeChannel}
                    />
                    <TelevisionButtonBottom 
                        // size="hardcoded"   // was"600x900" 
                        rotateBottomButtonChangeChannel = {this.rotateBottomButtonChangeChannel}
                    />
                </div>
                <TelevisionLeftSideTextArea                 
                    tvExplanatoryAsideText= {this.props.tvExplanatoryAsideText} // comes from Portfolio Scene API call
                    channelNumber={this.state.channel}     // IS *NOT* DEADCODE !!! OLD WAY USING STATE
                >
                </TelevisionLeftSideTextArea>
            </div>
        )
    }


    render(){
        // let tv600x900px = this.tv600x900();         // for 1 breakpoint @ 800px view. 
        return( this.tvResponsive() );
    }




    DEADCODEtv400x600 = () => {                     //  SMALL SCREEN, NOT USING ATM
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
                            // tvScreenContents={this.state.screenContents}
                            tvScreenContents={this.props.tvScreenImagesArrayOfArrays}

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

     
    DEADCODEtv600x900 = () => {                         // HARD CODED TO USE ATM 
        console.log("Tv Component  this.props.channelNumber ", this.props.channelNumber)  // IS UNDEFINED ! 
        console.log("Tv Component  this.state.channel ", this.state.channel)

        return(
            <>
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
                            // state only set on channel on buttonClick, but  

                            bottomButtonChannel = {this.state.bottomButtonChannel}   // Need to know image # to display. 
                            tvScreenImagesArray = {this.props.tvScreenImagesArrayOfArrays[this.state.channel]}     //Change to only pass down array for one project! 
                            // imageArray here comes from props.. 
                            // channelNumber = {this.props.channelNumber}

                        />  
                    </div>
                    <TelevisionButtonTop 
                        size="600x900" 
                        changeChannel={this.changeChannel}
                    />
                    <TelevisionButtonBottom 
                        size="600x900" 
                        rotateBottomButtonChangeChannel = {this.rotateBottomButtonChangeChannel}
                    />
                </div>
                <TelevisionLeftSideTextArea                 
                    tvExplanatoryAsideText= {this.props.tvExplanatoryAsideText} // comes from Portfolio Scene API call
                    channelNumber={this.state.channel}     // OLD WAY USING STATE
                    // channelNumber = {this.props.channelNumber}
                >
                </TelevisionLeftSideTextArea>
            </>
        )
    } 



} 

export default Television; 