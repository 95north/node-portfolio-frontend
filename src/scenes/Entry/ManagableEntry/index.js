import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.scss';
const MONGO_URL = "http://localhost:27017"

class ManagableEntry extends Component {
    state={
        entriesDataUploadRaw: null,
        newEntry: null   // or if this.props.newEntry changes !!! 
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
            return resp.json();
        })
        .then(entries => {
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
                let date = entry.dateAdded ? this.formatDate(entry.dateAdded) : "2020"
                // entryArr.push(<li className="rounded" style={{opacity: "1"}}><b> {entry.subject} </b></li>)
                entryArr.push(this.managableEntry(entry, date))
            })
            return entryArr
        } else {
            return <p>Nothing to Display</p>
        }
    }


    formatDate = (date) => {
        let monthLookup = {
            "01" : "JAN", "02" : "FEB", "03" : "MAR",
            "04" : "APR", "05" : "MAY", "06" : "JUN",
            "07" : "JUL", "08" : "AUG", "09" : "SEP",
            "10" : "OCT", "11" : "NOV", "12" : "DEC",
         }
        let year = date.substring(0, 4)
        let month = date.substring(5, 7)
        let day = date.substring(8, 10)
        let formattedDate = year + "  " + monthLookup[month] + " " + day
        return formattedDate
    }


    managableEntry = (entry, date) => {
        // console.log("in managableEntry class & function, entry is: ", entry)
        // console.log("in managableEntry class & function, entry._id is: ", entry._id)
        return(
            // <div className="entry" value={entry._id}><b>{entry.topic} :</b><span className="date">{date}</span><br/>  
            <div className="entry" ><b>{entry.topic} :</b><span className="date">{date}</span><br/> 
                {entry.detail} 
                <br/>
                <button onClick={this.deleteEntry} className="theme-button" value={entry._id}>Delete</button>
            </div>
        )  
    }


    deleteEntry = async (e) => {     // ADD ERROR HANDLING !!
        e.preventDefault();
        // console.log("e.target.value: ", e.target.value);
        let parentRef = e.target.parentNode
        // console.log("this.props.user: ", this.props.user);

        if (this.props.user.user_id === undefined || this.props.user.user_id === ""  ){
            alert("You must be logged in to do that!")
        } else {
            const response = await fetch(`${MONGO_URL}/entry/${e.target.value}`, {  // /${this.props.user.user_token}
                method: 'POST',  //delete not supported?? 
                headers: { 
                    "Authorization": this.props.user.user_token  // Didn't like headers! now it hits delete. 
                    // "Content-Type": "application/json; charset=utf-8"
                },
                // body: JSON.stringify(
                //     e.target.value
                // )
            })
            console.log("deleteEntry response is :", response)
            if (response.status == 200){
                parentRef.style.display = "none"     // WORKS. 
            }
            return response
            
            // .catch(err => {
            //     console.log("Error in Fetch delete Entry request: ", err)
            // }).then(res => {
            //     console.log("res is: ", res)
            //     return res.json() 
            // }).then(postResp => {
            //     console.log("In Entry Scene, postResp is: ", postResp)
            // })
        }
    }


    render(){
        let entries = this.processEntries();
        return(
            <>
            {entries}
            </>
        )
    }


} 
export default ManagableEntry; 