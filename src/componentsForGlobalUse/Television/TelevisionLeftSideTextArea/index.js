import React, { Component } from 'react';

import styles from './index.scss';


class TelevisionLeftSideTextArea extends Component {
    // TV Screen in orig 1200x800 tv is 487px high x 607px wide. 
    // 261px to the right, up 137px to start of tv frame in vector


    generateResponsiveTvDescriptionText = () => {
        console.log("Left side props: ", this.props)
        let channelNumber = this.props.channelNumber;
        let captionText = this.props.tvExplanatoryAsideText

        // Hits return statement before it finishes mapping. 
        // let listItems = this.props.listItems ? this.props.listItems.map(bulletpointText => (<li>{bulletpointText}</li>)) : null
        // let listItems2 = this.props.listItems2 ? this.props.listItems2.map(bulletpointText => (<li>{bulletpointText}</li>)) : null

        // Make below more robust - get error TypeError: Cannot read property 'header' of undefined  on Channel 3 (ie the 4th channel.. )
        return(
            <div>
                <div className="text-placement-responsive">
                    {/* // header: "I failed",       // title
                    // anchor: "failure",       // URL to project demo
                    // p: "bad API",             // description
                    // listHeader: "API in :",
                    // listItems: ["Portfolio scene"],    // languages libraries
                    // ListHeader2: "But :",
                    // listItems2: ["why?"],  */}


                    <h2> {captionText[channelNumber]["header"] !== null ? captionText[channelNumber]["header"] : null} </h2>  <br/>
                    <a> {captionText[channelNumber]["anchor"] !== null ? captionText[channelNumber]["anchor"] : null } </a>  <br/>
                    <p> {captionText[channelNumber]["p"] !== null ? captionText[channelNumber]["p"] : null} </p>  <br/>
                    <p> {captionText[channelNumber]["listHeader"] !== null ? captionText[channelNumber]["listHeader"]: null} </p>  
                    <ul> {captionText[channelNumber]["listItems"] !== null ? captionText[channelNumber]["listItems"].map(bulletpointText => (<li>{bulletpointText}</li>)) : null} </ul>  <br/>
                    <p> {captionText[channelNumber]["listHeader2"] !== null ? captionText[channelNumber]["listHeader2"] : null} </p> 
                    <ul> {captionText[channelNumber]["listItems2"] !== null ? captionText[channelNumber]["listItems2"].map(bulletpointText => (<li>{bulletpointText}</li>)): null} </ul>  <br/>
              
               */}
                </div>
            </div>
        )
    }



 
    render(){
        return this.generateResponsiveTvDescriptionText();
        // return this.generateTvDescriptionText();
    }

} 

export default TelevisionLeftSideTextArea; 