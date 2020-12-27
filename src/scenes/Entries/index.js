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
        fetch(`${MONGO_URL}/entry/entries`, {
            method: 'GET',
            headers: {
            // 'Content-Type': 'application/json',      // This breaks it bc you gettin BSON !!!
            }
        })
        .catch(err => {
            console.log("Error in ENTRIES Fetch request: ", err)
        })
        .then(resp => {
            // console.log("ENTRIES -- FETCH REQUEST RESPONSE is: ", resp)
            return resp.json();
        })
        .then(entries => {
            // console.log("Entries Scene --- data served from  Fetch() REQ : ", entries.entries[0]); // works. 
            this.setState({ entriesDataUploadRaw: entries.entries });
        });        
    } 
    

    processEntries = () => {
        let entryArr = [];
        console.log("this.state.entriesDataUploadRaw : ", this.state.entriesDataUploadRaw)
        
        // if(this.state.entriesDataUploadRaw.length > 0){
        if(this.state.entriesDataUploadRaw){
            let entriesCopy = this.state.entriesDataUploadRaw;
            entriesCopy.forEach( entry =>{    
                // entryArr.push(<li className="rounded" style={{opacity: "1"}}><b> {entry.subject} </b></li>)
                entryArr.push(<div><b>{entry.topic} : {entry.detail} </b></div>)
            })
            return entryArr
        } else {
            return <p>Nothing to Display</p>
        }
    }


    render(){
        // console.log("this.state.entries: ", this.state.entries)
        let entries = this.processEntries()
        return(
            <div>
            {/* // <div className="entry">  */}
                <Header></Header>
                <NavBar></NavBar>
                <p>Entries Scene</p>  <br/>
                {entries}
            </div>
        )
    }
} 

export default Entries; 