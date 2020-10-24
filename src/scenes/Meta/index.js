import React, { Component } from 'react';
import Header from  '../../componentsForGlobalUse/Header/index.js';
import NavBar from  '../../componentsForGlobalUse/NavBar';
import Television from '../../componentsForGlobalUse/Television';


class Meta extends Component {
    state = {
        screenContents: null        // is used in TvScreen Component. 
    }


    dataForMetaChannels = [
        {
            "languages": [
              "React",
              "Node",
              "JavaScript",
              "HTML",
              "CSS",
            ],
            "libraries": [
              "MongoDB one?"
            ],
            "name": "My Portfolio",
            "description": "This is my personal website. I tried out the 'Functional' frontend organization scheme, which is a Composite of Components for Global Use recombined into various Scenes, which also have some customization; and I love it!  On the backend, I used 'api/routes', 'loaders', 'models', and 'services' to organize and structure.  Using JavaScript for a backend increased my appreciation of languages that have keywords 'protected' and 'private'.   ",
            "link": "None yet",
            "year": 2020,
            "image": "backup image",
            "updated": "2020-03-23T02:35:55.215Z",
            "__v": 0
          },
    ]


    processMetaData = () => {
        let tvContentObjs = [];
        let tvScreenContentImages = [];

        this.dataForMetaChannels.forEach(channel => {
            let sideContentObj= {
                header: null,       // title
                anchor: null,       // URL to project demo
                p: null,             // description
                listHeader: null,
                listItems: null,    // languages libraries
                ListHeader2: null,
                listItems2: null, 
            }

            sideContentObj.header= channel.name;      
            sideContentObj.anchor= channel.link;       
            sideContentObj.p= channel.description;             
            sideContentObj.listHeader= "Languages";
            sideContentObj.listItems= channel.languages;    
            sideContentObj.listHeader2= "Libraries";
            sideContentObj.listItems2= channel.libraries; 
            tvContentObjs.push(sideContentObj)
            tvScreenContentImages.push(channel.image);
        });
        return ({"tvContentObjs" : tvContentObjs, "tvScreenContentImages" : tvScreenContentImages});

    }


    render(){
        // let projects = this.state.projectDataUploadRaw
        let numberOfChannels = this.dataForMetaChannels.length;
        console.log("In META scene, numberOfChannels  is; ", numberOfChannels)   // NaN
        // BELOW -  REFACTOR TO DESTRUCTURED?? 
        let splitData = this.processMetaData();
        console.log("Meta Split data is: ", splitData )
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














    // processMetaData = () => {
    //     let tvContentObjs = [];
    //     let tvScreenContentImages = [];
        
    //     // console.log("Projects in Meta Scene is: ", projects);  //GOOD 
    //     this.dataForMetaChannels.forEach(aboutChannel => {
    //         let sideContentObj= {
    //             header: aboutChannel[0],       // title
    //             anchor: null,       // URL to project demo
    //             p: aboutChannel[1],             // description
    //             listHeader: null,
    //             listItems: null,    // languages libraries
    //             ListHeader2: null,
    //             listItems2: null, 
    //             // year? 
    //         }
    //         tvContentObjs.push(sideContentObj)
    //         tvScreenContentImages.push(this.dataForMetaChannels[2])
    //     });
    //     return ({"tvContentObjs" : tvContentObjs, "tvScreenContentImages" : tvScreenContentImages});

    // }


    // render(){
    //     let numberOfChannels = this.dataForMetaChannels.length;
    //     console.log("In Meta scene, numberOfChannels  is; ", numberOfChannels)   // NaN
    //     // BELOW -  REFACTOR TO DESTRUCTURED?? 
    //     let splitData = this.processMetaData();
    //     let processedProjectsData = splitData["tvContentObjs"];
    //     let tvScreenImagesArrayOfArrays = splitData["tvScreenContentImages"];


    //     return(
    //         <div className="portfolio">
    //                 <Header></Header>
    //                 <NavBar></NavBar>
    //                 <Television 
    //                     tvScreenContents={this.state.screenContents}   // CURRENTLY JUST USES DEFAULT IMAGES!!!!!  NULL IS PASSED DOWN! 
    //                     // channelNumber ={channelNumber}
    //                     numberOfChannels = {numberOfChannels}
    //                     // ^^^ Need to pass down channel number separately bc not from state? 
    //                     tvExplanatoryAsideText= {processedProjectsData}
    //                     // tvExplanatoryAsideText= {this.state.projects}        // fixing so completed API call triggers re-render
    //                     tvScreenImagesArrayOfArrays = {tvScreenImagesArrayOfArrays}
    //                 ></Television>
    //         </div>
    //     )
    // }
} export default Meta; 