import React, { Component } from 'react';
import Header from  '../../componentsForGlobalUse/Header/index.js';
import NavBar from  '../../componentsForGlobalUse/NavBar';
import Television from '../../componentsForGlobalUse/Television';
const BSON = require('bson');
const { EJSON } = require('bson');
var Buffer = require('buffer/').Buffer  // note: the trailing slash is important!
const MONGO_URL = "http://localhost:7555"



class About extends Component {
    // line btwn what to keep in front vs. back end.  This is static and just text, 
    // doesnt make sense to make a database table just to store about stuff.  
    // ??????What about the images?  Where to store them?  Front or back-end?  Internet says front end.

    state = {

        projects: null,
        screenContents: null
    }

    // use 2D Array, or an Obj?  
    headersAndImgsForAboutMeChannels = [
        [
            "About Victoria",
            "Victoria taught self how to write SQL scripts at their first job, then got into Arduinos and Excel Macros.  Victoria enjoy learning about all levels of computer science, from how logic gates physically work, to machine code, assemblers & assembly, to compilers/interpreters and high level langauges.",
            "img.jpg"
        ],
        [
            "Where I Live",
            "I live in New York City, where I'm spoiled with epic skyline views biking the many bridges, the on- and off-Broadway theater, and luxury of shopping for art supplies in the Garment District.",
            "img.jpg"
        ],
        [
            "Coding Skills",
            "JavaScript (React, vanilla JS, Node.js) and Ruby (RoR) are my dearest and nearest. I have a good grasp on C++ from using the Arduino library and reading books with examples in C++.  Speaking of books, I've read 'Clean Code', 'The Algorithm Design Manual', and am currently on 'Object Oriented Design Patterns'. I intently studied the Angular, GraphQL, Travis, Docker, and Django libraries and am excited to build something with them soon! ",
            "img.jpg"
        ],


    ]


    processProjectData = (projectsArg) => {
        let tvContentObjs = [];
        let tvScreenContentImages = [];

    

        // if (this.state.projectDataUploadRaw !== "Meaningless initial value") {                         // projects coming up null
            console.log("Projects in About Scene is: ", projects);  //GOOD 
            projects.forEach(project => {
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

    }






    render(){
        // map projects to : screen space,  left side of TV space stuff to pass down. 

        let projects = this.state.projectDataUploadRaw
        let numberOfChannels = (  (projects === "Meaningless initial value" ? false : projects["projectsArray"].length)     ? projects["projectsArray"].length : 0); 
        console.log("In About scene, numberOfChannels  is; ", numberOfChannels)   // NaN
        // BELOW -  REFACTOR TO DESTRUCTURED?? 
        let splitData = this.processProjectData(projects)
        let processedProjectsData = splitData["tvContentObjs"];
        let tvScreenImagesArrayOfArrays = splitData["tvScreenContentImages"];


        return(
            <div className="portfolio">
                {/* <p>About Scene</p> */}
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
            "name": "About - this is the backupProjectData",
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

export default About; 