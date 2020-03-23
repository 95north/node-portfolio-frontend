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

class Portfolio extends Component {
    state = {projects: null}









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
            console.log("projects is : ", projects);
            this.setState({ projects: projects });
        });        

    }

    // componentDidMount =()=> {         // gets only ONE project
    //     fetch(`${MONGO_URL}/p`, {     // even  one object returned comes back as readable stream 
    //         method: 'GET',
    //         headers: {}
    //     })
    //     .then(resp => {
    //         console.log("resp.body instanceof ReadableStreamis : ", resp.body instanceof ReadableStream);
    //         let r = resp.json();
    //         console.log("r is : ", r);
    //         return resp;
    //     })
    //     .then(project => {
    //         this.setState({ projects: project });
    //     });        
    // }






    render(){

        return(
            <div className="portfolio">
                {/* <p>Portfolio Scene</p> */}
                {/* <div className="portfolio"> */}
                    <Header></Header>
                    <NavBar></NavBar>

                    <Television></Television>
                {/* </div> */}
            </div>
        )
    }

} 

export default Portfolio; 