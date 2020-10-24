import React, { Component } from 'react';
import Header from  '../../componentsForGlobalUse/Header/index.js';
import NavBar from  '../../componentsForGlobalUse/NavBar';
import Television from '../../componentsForGlobalUse/Television';


class About extends Component {
    // line btwn what to keep in front vs. back end.  This is static and just text, 
    // doesnt make sense to make a database table just to store about stuff.  
    // ??????What about the images?  Where to store them?  Front or back-end?  Internet says front end.

    state = {
        screenContents: null        // is used in TvScreen Component. 
    }

 
    dataForAboutMeChannels = [         // use 2D Array, or an Obj?  
        [
            "About Victoria",
            "Victoria taught self how to write SQL scripts at their first job, then got into Arduinos and Excel Macros.  Victoria enjoy learning about all levels of computer science, from how logic gates physically work, to machine code, assemblers & assembly, to compilers/interpreters and high level langauges.",
            "img.jpg"
        ],
        [
            "Where I Live",
            "I live in New York City, where I'm spoiled with epic skyline views biking the many bridges, the on- and off-Broadway theater, and the luxury of shopping for art supplies in the likes of the Garment Distric, and other such treasures.",
            "img.jpg"
        ],
        [
            "Coding Skills",
            "JavaScript (React, vanilla JS, Node.js) and Ruby (RoR) are my dearest and nearest. I have a good grasp on C++ from using the Arduino library and reading books with examples in C++.  Speaking of books, I've read 'Clean Code', 'The Algorithm Design Manual', and am currently on 'Object Oriented Design Patterns'. I intently studied the Angular, GraphQL, Travis, Docker, and Django libraries and am excited to build something with them soon! ",
            "img.jpg"
        ],
    ]


    processAboutMeData = () => {
        let tvContentObjs = [];
        let tvScreenContentImages = [];
        
        // console.log("Projects in About Scene is: ", projects);  //GOOD 
        this.dataForAboutMeChannels.forEach(aboutChannel => {
            let sideContentObj= {
                header: aboutChannel[0],       // title
                anchor: null,       // URL to project demo
                p: aboutChannel[1],             // description
                listHeader: null,
                listItems: null,    // languages libraries
                ListHeader2: null,
                listItems2: null, 
                // year? 
            }
            tvContentObjs.push(sideContentObj)
            tvScreenContentImages.push(this.dataForAboutMeChannels[2])
        });
        return ({"tvContentObjs" : tvContentObjs, "tvScreenContentImages" : tvScreenContentImages});

    }






    render(){
        let numberOfChannels = this.dataForAboutMeChannels.length;
        console.log("In About scene, numberOfChannels  is; ", numberOfChannels)   // NaN
        // BELOW -  REFACTOR TO DESTRUCTURED?? 
        let splitData = this.processAboutMeData();
        let processedProjectsData = splitData["tvContentObjs"];
        let tvScreenImagesArrayOfArrays = splitData["tvScreenContentImages"];


        return(
            <div className="portfolio">
                    <Header></Header>
                    <NavBar></NavBar>
                    <Television 
                        tvScreenContents={this.state.screenContents}   // CURRENTLY JUST USES DEFAULT IMAGES!!!!!  NULL IS PASSED DOWN! 
                        // channelNumber ={channelNumber}
                        numberOfChannels = {numberOfChannels}
                        // ^^^ Need to pass down channel number separately bc not from state? 
                        tvExplanatoryAsideText= {processedProjectsData}
                        // tvExplanatoryAsideText= {this.state.projects}        // fixing so completed API call triggers re-render
                        tvScreenImagesArrayOfArrays = {tvScreenImagesArrayOfArrays}
                    ></Television>
            </div>
        )
    }
}

export default About; 