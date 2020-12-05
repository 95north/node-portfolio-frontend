import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.scss';
import Header from  '../../componentsForGlobalUse/Header/index.js';
import NavBar from  '../../componentsForGlobalUse/NavBar';
import Television from '../../componentsForGlobalUse/Television';
// import NavBar from  './././componentsForGlobalUse/Header/index.js';
 // three levels up to get to source
// const MONGODB_DB_URL = "mongodb://localhost:27017/portfoliodb"  Only backend needs to access DB!!
const BSON = require('bson');
const { EJSON } = require('bson');
var Buffer = require('buffer/').Buffer  // note: the trailing slash is important!

const MONGO_URL = "http://localhost:27017"
// const MONGO_URL = "http://localhost:7555"




class Portfolio extends Component {
    state = {
        projectDataUploadRaw: "Meaningless initial value",
        projects: null,
        screenContents: null
    }


    componentDidMount = () => {             // ADD ERROR HANDLING!!!  this Fetch never completes. 
        fetch(`${MONGO_URL}/project/allprojects`, {
            method: 'GET',
            // mode: 'cors', // no-cors, *cors, same-origin  DOESNT SEEM TO MAKE DIFFERENCE
            headers: {

            // 'Content-Type': 'application/json',      // This breaks it bc you gettin BSON !!!
            // Accepts: 'application/json'
            // Authorization: `${token}`
            }
        })
        .catch(err => {
            console.log("Error in Fetch request: ", err)
        })
        .then(resp => {
            // All this bc hitting undefined URL path and got back a "readable stream"... 
            // console.log("Buffer.isBuffer()", Buffer.isBuffer(resp)) // FALSE !!! 
            // console.log("resp is : ", resp);
            // console.log("typeof resp is : ", typeof resp);
            // console.log("resp.body instanceof ReadableStreamis : ", resp.body instanceof ReadableStream);
            // console.log("resp.Body is : ", resp.Body);                  // undefined
            // console.log("... resp.body[0] is : ", resp.body[0]);        // undefined
            // deserializeStream(data, startIndex, numberOfDocuments, documents, docStartIndex, [options])
            // let r = resp.json();
            // let r = EJSON.parse(resp.body.text());  
            // let r = (resp["body"]).json();       // resp.body.json is not a function
            // let r = Buffer.from(resp);
            // let r = BSON.deserialize(BBBuffer.from(resp));
            // let r = JSON.parse(resp)
            // let r = BSON.parse(resp)             // BSON.parse is not a function
            // let r = EJSON.deserialize(resp);     // Doesn't break, r is empty obj though
            // let r = EJSON.parse(resp);           // Unexpected token o in JSON at position
            // let r = EJSON.parse(EJSON.deserialize(resp));            // "same ^^
            // let r = EJSON.deserialize(BBBuffer.from(resp));          // First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.
            // let r = EJSON.deserialize(BBBuffer.from(resp.body));     // First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.
            // let r = BSON.deserializeStream(resp, 0, 2, output, 0 );  // Must use either Buffer or Uint8Array
            // let r = resp.Body.json();                                 //  Cannot read property 'json' of undefined
            // let r = BSON.deserializeStream(resp.body, 0, 2, output, 0 );                 // Must use either Buffer or Uint8Array
            // let r = BSON.deserializeStream(Buffer.from(resp.body), 0, 2, output, 0 );    // The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type object
            // let r = Buffer.from(resp.body);       // first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type object
            console.log("ALL PROJECTS FETCH REQUEST RESPONSE is: ", resp)
            return resp.json();
        })
        .then(projects => {
            console.log("Portfolio Scene --- data served from  Fetch() REQ : ", projects); // works. 
            this.setState({ projectDataUploadRaw: projects });
        });        

    }   // ends componentDidMount


    // componentDidMount =()=> {         // to get only ONE project
    //     fetch(`${MONGO_URL}/p`, {     // even  one object returned comes back as readable stream 
    //         method: 'GET',
    //         headers: {}
    //     })
    //     .then(resp => {
    //         console.log("resp.body instanceof ReadableStreamis : ", resp.body instanceof ReadableStream);
    //         let r = resp.json();
    //         return resp;
    //     })
    //     .then(project => {
    //         this.setState({ projects: project });
    //     });        
    // }


    processProjectData = (projectsArg) => {
        // let projects = this.state.projects; //  ? this.state.projects : backupProjectData;    // CHANGED FROM THIS TO TRY FIXING props (can't be passed down from state)
        let projects = this.state.projectDataUploadRaw.projectsArray; //  ? this.state.projects : backupProjectData;
        let tvContentObjs = [];
        let tvScreenContentImages = [];
        console.log("Projects in Portfolio Scene processProjectData is: ", this.state);  //GOOD 

    

        if (this.state.projectDataUploadRaw !== "Meaningless initial value") {                         // projects coming up null
            // console.log("Projects in Portfolio Scene processProjectData is: ", projects);  //GOOD 
            
            projects.forEach(project => {
                // if (project["image"]){
                //     screenContentArray.push(project["image"])
                // } else {
                //     /// BACKUP IMAGE !
                // }
                
                let sideContentObj= {
                    header: null,       // title
                    anchor: null,       // URL to project demo
                    p: null,             // description
                    listHeader: null,
                    listItems: null,    // languages libraries
                    ListHeader2: null,
                    listItems2: null, 
                    // year? 
                }

                sideContentObj.header= project.name;      
                sideContentObj.anchor= project.link;       
                sideContentObj.p= project.description;             
                sideContentObj.listHeader= "Languages";
                sideContentObj.listItems= project.languages;    
                sideContentObj.listHeader2= "Libraries";
                sideContentObj.listItems2= project.libraries; 
                
                tvContentObjs.push(sideContentObj)
                tvScreenContentImages.push(project.images)
            });
            return ({"tvContentObjs" : tvContentObjs, "tvScreenContentImages" : tvScreenContentImages});
        } else {
            console.log("I hit the ELSE in Portfolio scene processProjectData")
            let backupTvContentObjs = [
                {
                    header: "Loading",         // title
                    image: "backup image", //"TvStaticAnimated.gif",
                    anchor: null,          // URL to project demo
                    p: "While there are many solutions to make this load faster, I prefer the experientiality of this loading screen.",              // description.   was "bad API", 
                    listHeader: null,
                    listItems: null,            // languages libraries .  ["Portfolio scene"], as list on 
                    ListHeader2: null,
                    listItems2: null,           // was ["why?"], 
                }
            ]

            return ({"tvContentObjs" : backupTvContentObjs, "tvScreenContentImages" : ["backup image"]});
            // return ({"tvContentObjs" : backupTvContentObjs, "tvScreenContentImages" : ["TvStaticAnimated.gif"]});

        }
    }






    render(){
        // map projects to : screen space,  left side of TV space stuff to pass down. 

        let projects = this.state.projectDataUploadRaw
        let numberOfChannels = (  (projects === "Meaningless initial value" ? false : projects["projectsArray"].length)     ? projects["projectsArray"].length : 0); 
        console.log("In Portfolio scene, numberOfChannels  is; ", numberOfChannels)   // NaN
        // BELOW -  REFACTOR TO DESTRUCTURED?? 
        let splitData = this.processProjectData(projects)
        let processedProjectsData = splitData["tvContentObjs"];
        let tvScreenImagesArrayOfArrays = splitData["tvScreenContentImages"];


        return(
            <div className="portfolio">
                {/* <p>Portfolio Scene</p> */}
                {/* <div className="portfolio"> */}
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
                {/* </div> */}
            </div>
        )
    }



    backupProjectData = [
        {
            "languages": [
              "React",
              "JavaScript",
              "HTML",
              "CSS",
              "Node",
              
            ],
            "libraries": [
              "Mongoose"
            ],
            "name": "Portfolio - this is the backupProjectData",
            "description": "My personal website - this is the backupProjectDat !!!!  ",
            "link": "None yet",
            "year": 2019,
            "image": "TvStaticAnimated.gif",
            "updated": "2020-03-23T02:35:55.215Z",
            "__v": 0
          },
          {
            "languages": [
              "React",
              "JavaScript",
              "HTML",
              "CSS",
              "Ruby",
              "Ruby on Rails"
            ],
            "libraries": [
              
            ],
            "_id": "5e78208b4e66d48520780b0f",
            "name": "DIY Or Don't",
            "description": "Research, read, & leave reviews of home improvement projects, add projects to your list, manage your toolbox and shopping list, have your shopping list texted to you.",
            "link": "http://diy-or-dont-frontend.herokuapp.com/login",
            "year": 2019,
            "image": "TvStaticAnimated.gif",
            "updated": "2020-03-23T02:35:55.215Z",
            "__v": 0
          },
          {
            "languages": [
              "React",
              "JavaScript",
              "HTML",
              "CSS",
              "Ruby",
              "Ruby on Rails"
            ],
            "libraries": [
              "Mapbox"
            ],
            "_id": "5e78208b4e66d48520780b10",
            "name": "Bodega Review App",
            "description": "Locate the best bodega by map as rated for its coffee, cat, etc.",
            "year": 2019,
            "image": "TvStaticAnimated.gif",
            "updated": "2020-03-23T02:35:55.227Z",
            "__v": 0
          }
        ]
      

} 

export default Portfolio; 