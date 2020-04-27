import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.scss';



class TelevisionButtonBottom extends Component {
    // TV Screen in orig 1200x800 tv is 487px high x 607px wide. 
    // 261px to the right, up 137px to start of tv frame in vector

    state={ 
        rotationCounter: 0,
        cssClass: null
    }


    triggerRotation = () => {
        this.setState({
            rotationCounter: this.state.rotationCounter += 1
        });
        console.log("rotation counter: ", this.state.rotationCounter)
        
        this.props.rotateBottomButtonChangeChannel(this.state.rotationCounter);
        this.assignCssClass();
    }


    assignCssClass = () => {

        let rotationCount = 0;
        if (this.state.rotationCounter > 6){
            rotationCount = this.state.rotationCounter % 6;
        } else {
            rotationCount = this.state.rotationCounter;
        }

        switch(rotationCount) {
            case 0:
                this.setState({cssClass: null})
                break;
            case 1:
                this.setState({cssClass: "one"})
                break;
            case 2:
                this.setState({cssClass: "two"})
                break;
            case 3:
                this.setState({cssClass: "three"})
                break;
            case 4:
                this.setState({cssClass: "four"})
                break;
            case 5:
                this.setState({cssClass: "five"})
                break;
            case 6:
                this.setState({cssClass: "six"})
                break;
            default:
                this.setState({cssClass: null})
                return null;
          }
    }


    bottomButton600x900 = ()  => {

        return(
            <div 
                className="bottom-button-600-900"
                onClick = {this.triggerRotation}
            >
                <div className="rotate">  
                    <div className={this.state.cssClass} >
                        <img 
                            src="TvButton2.svg" 
                            alt="Round TV Button"
                            height="155"
                            width="155" 
                        />
                    </div>
                </div>
            </div>
        )
    }    

    bottomButton400x600 = ()  => {
        return(
            <div 
                className="bottom-button-400-600"
                onClick = {this.triggerRotation}
            >
            </div>
        )
    }   











    render(){
        let bottomButton;
        switch (this.props.size){
            case "600x900":
                bottomButton = this.bottomButton600x900();
                break;
            case "400x600": 
                bottomButton = this.bottomButton400x600();
                break;
        }
        
        return(
            bottomButton
        )
    }


} 

export default TelevisionButtonBottom; 