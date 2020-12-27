import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.css';
import Header from  '../../componentsForGlobalUse/Header/index.js';
import NavBar from  '../../componentsForGlobalUse/NavBar/index.js';
const MONGO_URL = "http://localhost:27017"

class Entry extends Component {
    state={
        subject:"",
        detail:""
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
                    type="text" 
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
        if (this.props.user.user_id === undefined || this.props.user.user_id === ""  ){
            alert("You must be logged in to do that!")
        } else {
            fetch(`${MONGO_URL}/entry/entry`, {
                method: 'POST',
                headers: { 
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(
                    this.state
                )
            }).catch(err => {
                console.log("Error in Fetch request: ", err)
            }).then(res => res.json() )
            .then(postResp => {
                console.log("In Entry Scene, postResp is: ", postResp)
            })
        }

    }



    render(){
        let form = this.newEntryForm();

        return(
            <div>
            {/* // <div className="entry">  */}
                <Header></Header>
                <NavBar></NavBar>
                <br/>

                <p>Entry Scene</p>
                <br/>

                {form}

            </div>
        )
    }

} 

export default Entry; 