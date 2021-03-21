import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';

import styles from './index.scss';
import Header from  '../../componentsForGlobalUse/Header/index.js';
import NavBar from  '../../componentsForGlobalUse/NavBar/index.js';
import ManagableEntry from './ManagableEntry';
import ProjectForm from './ProjectForm';
import EntryForm from './EntryForm';

const MONGO_URL = "http://localhost:27017"

class Entry extends Component {

    render(){
        return(
            <>
            {/* // <div className="entry">  */}
                <Header></Header>
                <NavBar></NavBar>

                <EntryForm user={this.props.user}/>

{/*   Add button to  */}
                <br/> <br/> <br/> <br/>
                <span className="entries-header">Create New Project</span>  
                <br/>

                {/*  ProjectForm:  Objects are not valid as a React child (found: [object Promise]). */}
                <div className="entry-form-container">
                    {/* ^^^^!!  Need to rename this class!! Confusing */}
                    <ProjectForm user={this.props.user ? this.props.user : null}/>   
                </div>
                
                
                <br/> <br/> <br/> <br/>
                <span className="entries-header">Manage Entries</span>
                <br/>

                <div className="entry-form-container">
                    <ManagableEntry user={this.props.user}/>
                </div>

            </>
        )
    }

} 

export default Entry; 