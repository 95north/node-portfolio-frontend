import React, { Component } from 'react';

import styles from './index.scss';


class TelevisionLeftSideTextArea extends Component {
    // TV Screen in orig 1200x800 tv is 487px high x 607px wide. 
    // 261px to the right, up 137px to start of tv frame in vector



    // tvScreenContents={this.state.screenContents}
    // tvExplanatoryAsideText= {this.state.projects}

    componentDidMount = () => {
        
    }
 
    render(){

        return(
            <div>
                <div className="text-placement">
                    <p> TV LEFT SIDE AREA!!! </p>
                    <p> TV LEFT SIDE AREA!!! </p>
                    <p> TV LEFT SIDE AREA!!! </p>
                    <p> TV LEFT SIDE AREA!!! </p>
                    <p> TV LEFT SIDE AREA!!! </p>
                    <p> TV LEFT SIDE AREA!!! </p>
                </div>
            </div>
        )
    }

} 

export default TelevisionLeftSideTextArea; 