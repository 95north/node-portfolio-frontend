
import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.scss';


const MONGO_URL = "http://localhost:27017"

class EntryForm extends Component {
    state={
        subject:"",
        detail:"",
    }


    changeHandler = (event)=>{
        let inputName = event.target.name
        this.setState(
            {[inputName]: event.target.value}
        )
    }

    
    newEntryForm = () => {
        return(
            // <form onSubmit={e => this.props.submitHandler(e, this.state)} >
            <form onSubmit={e => this.postNewEntry(e, this.state)} >

                Entry Subject:
                <br/>
                <input 
                    type="text" 
                    // data-id={index} 
                    id = "subject"
                    name = "subject"
                    // value={toolsCopy[index].note}
                    // className="note"
                    placeholder="Subject?"
                    onChange={this.changeHandler}
                /> <br/>
                Entry Text: 
                <br/>
                <input 
                    className="entry-text-input"
                    type="textarea" 
                    // data-id={index} 
                    id = "detail"
                    name = "detail"
                    // value={toolsCopy[index].note}
                    // className="note"
                    placeholder="What did you learn today?"
                    onChange={this.changeHandler}
                /> <br/>
                <br/>
                <button>Create Entry</button>
            </form>
        )  
    }


    postNewEntry = (e, entry) => {
        e.preventDefault();
        console.log("this.state is: ", this.state)
        if (this.props.user.user_id === undefined || this.props.user.user_id === ""  ){
            alert("You must be logged in to do that!")
        } else {
            fetch(`${MONGO_URL}/entry/entry`, {   // ${this.props.user.user_token}
                method: 'POST',  //'PUT',  BREAKS IT 
                mode: 'cors', 
                headers: { 
                    // "Content-Type": "application/json, text/plain, */*",  // including this will break it.  
                    'Content-Type': 'application/json',  // including this will break it.  single or double quotes breaks..
                    "Authorization":this.props.user.user_token
                    // Accepts: 'application/json'    // including this, won't hit addEntry(), not routed right.. 
                    // "Accept": 'application/json'    // including this, won't hit addEntry(), not routed right.. 
                },
                body: 
                    JSON.stringify({
                    'subject': this.state.subject,
                    'detail': this.state.detail
                    })
            }).catch(err => {
                console.log("Error in Fetch request: ", err)
            // route should be fine..
            // }).then(res => res.json() )  Wait don't need this step at all! 
            // }).then(res => res.json() )

            }).then(postResp => {

                // DISPLAY NEW ENTRY !! 
                console.log("In Entry Scene, postResp is: ", postResp)
            })
        }

    }



    render(){
        let form = this.newEntryForm();
        // let entries = this.processEntries();
        return(
                <div className="entry-form-container">
                    {form}
                </div>
        )
    }

} 

export default EntryForm; 


