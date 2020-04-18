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

const MONGO_URL = "http://localhost:7555"

// let backupProjectData;
let backupProjectData = [   // hideous to have here but getting undefined on projects.lenght in processProjectData()
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
        "name": "Portfolio",
        "description": "My personal website",
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
          "fake entry"
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




class Portfolio extends Component {
    state = {
        projects: null,
        screenContents: null
    }









    componentDidMount = () => {
        fetch(`${MONGO_URL}/allprojects`, {
            method: 'GET',
            headers: {
            // 'Content-Type': 'application/json',      // This breaks it bc you gettin BSON !!!
            // Accepts: 'application/json'
            // Authorization: `${token}`
            }
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

            return resp.json();
        })
        .then(projects => {
            console.log("Portfolio Scene --- projects is : ", projects);
            this.setState({ projects: this.processProjectData(projects) });
        });        

    }   // ends componentDidMount


    // componentDidMount =()=> {         // gets only ONE project
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
        let projects = this.state.projects ? this.state.projects : backupProjectData;
        let tvContentObjs = [];
        let channelNumber;
        
        switch(this.props.channelNumber) {          // REFACTOR THIS! 
            case 0:
                channelNumber = 0
                break;
            case 1:
                channelNumber = 1
                break;
            case 2:
                channelNumber = 2
                break;
            default:

                channelNumber = this.props.channelNumber % (projects.length ? projects.length : 0)
        }

        // if (this.state.projects["success"]){
        if (this.state.projects){
            projects = this.state.projects // ["projectsArray"]
        } else if (projectsArg.length > 0) {
            projects = projectsArg;
        } else {
            projects = this.backupProjectData;    // redundant bc initialized to it. 
        }

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
        });
        return tvContentObjs;
    }


    





    render(){
        // map projects to : screen space,  left side of TV space stuff to pass down. 

        return(
            <div className="portfolio">
                {/* <p>Portfolio Scene</p> */}
                {/* <div className="portfolio"> */}
                    <Header></Header>
                    <NavBar></NavBar>

                    <Television 
                        tvScreenContents={this.state.screenContents}
                        tvExplanatoryAsideText= {this.state.projects}
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
            "name": "Portfolio",
            "description": "My personal website",
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