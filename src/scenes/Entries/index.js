import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.css';
import Header from  '../../componentsForGlobalUse/Header/index.js';
import NavBar from  '../../componentsForGlobalUse/NavBar/index.js';
const MONGO_URL = "http://localhost:27017"

class Entries extends Component {
    state = {
        entries: null,
        entriesDataUploadRaw: null
    }


    componentDidMount = () => {             // ADD ERROR HANDLING!!!  this Fetch never completes. 
        fetch(`${MONGO_URL}/api/entry/allentries`, {
            method: 'GET',
            // mode: 'cors', // no-cors, *cors, same-origin  DOESNT SEEM TO MAKE DIFFERENCE
            headers: {
            // 'Content-Type': 'application/json',      // This breaks it bc you gettin BSON !!!
            // Accepts: 'application/json'  
            // Authorization: `${token}`
            }
        })
        .catch(err => {
            console.log("Error in ENTRIES Fetch request: ", err)
        })
        .then(resp => {
            console.log("ENTRIES -- FETCH REQUEST RESPONSE is: ", resp)
            return resp.json();
        })
        .then(entries => {
            console.log("Entries Scene --- data served from  Fetch() REQ : ", entries); // works. 
            this.setState({ entriesDataUploadRaw: entries });
        });        
    }  


    render(){
        return(
            <div>
            {/* // <div className="entry">  */}
                <Header></Header>
                <NavBar></NavBar>
                <p>Entries Scene</p>
            </div>
        )
    }
} 

export default Entries; 