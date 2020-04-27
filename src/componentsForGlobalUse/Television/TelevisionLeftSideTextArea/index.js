import React, { Component } from 'react';

import styles from './index.scss';


class TelevisionLeftSideTextArea extends Component {
    // TV Screen in orig 1200x800 tv is 487px high x 607px wide. 
    // 261px to the right, up 137px to start of tv frame in vector

    
    generateTvDescriptionText = () => {
        console.log("Left side props: ", this.props)

        // Hits return statement before it finishes mapping. 
        // let listItems = this.props.listItems ? this.props.listItems.map(bulletpointText => (<li>{bulletpointText}</li>)) : null
        // let listItems2 = this.props.listItems2 ? this.props.listItems2.map(bulletpointText => (<li>{bulletpointText}</li>)) : null


        // Make below more robust - get error TypeError: Cannot read property 'header' of undefined  on Channel 3 (ie the 4th channel.. )
        return(
            <div>
                <div className="text-placement">
                    <h2> {this.props.tvExplanatoryAsideText ? this.props.tvExplanatoryAsideText[this.props.channelNumber]["header"] : null} </h2>  <br/>
                    <a> {this.props.tvExplanatoryAsideText ? this.props.tvExplanatoryAsideText[this.props.channelNumber]["anchor"] : null } </a>  <br/>
                    <p> {this.props.tvExplanatoryAsideText ? this.props.tvExplanatoryAsideText[this.props.channelNumber]["p"] : null} </p>  <br/>
                    <p> {this.props.tvExplanatoryAsideText ? this.props.tvExplanatoryAsideText[this.props.channelNumber]["listHeader"]: null} </p>  
                    <ul> {this.props.tvExplanatoryAsideText ? this.props.tvExplanatoryAsideText[this.props.channelNumber]["listItems"].map(bulletpointText => (<li>{bulletpointText}</li>)) : null} </ul>  <br/>
                    <p> {this.props.tvExplanatoryAsideText ? this.props.tvExplanatoryAsideText[this.props.channelNumber]["listHeader2"] : null} </p> 
                    <ul> {this.props.tvExplanatoryAsideText ? this.props.tvExplanatoryAsideText[this.props.channelNumber]["listItems2"].map(bulletpointText => (<li>{bulletpointText}</li>)): null} </ul>  <br/>

                </div>
            </div>
        )
    }




 
    render(){
        return this.generateTvDescriptionText();
    }

} 

export default TelevisionLeftSideTextArea; 