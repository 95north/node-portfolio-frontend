
import React, { Component } from 'react';
import App from  '../../App.js';  // I'm in src > scenes > routes


// const MONGO_URL = "http://localhost:27017";
const SQL_DB_URL = "http://localhost:7555"

class LoginServices extends Component {
// function LoginServices(props) {    


    userData = "";







    loginSubmit= async (e, user) =>  {
        console.log("in loginSubmit User is : ", user)
        e.preventDefault();
        // let userData;

        let d = await fetch(`${SQL_DB_URL}/api/login/processlogin`, {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin  DOESNT SEEM TO MAKE DIFFERENCE
            headers: {
                'Content-Type': 'application/json',
                // Accepts: 'application/json'  // RUINS THIS CODE. 
            },
            Accepts: 'application/json',
            body: JSON.stringify({
                user: {
                    username: user.username,
                    password:  user.password 
                }
            })
        })
        .catch(err => {
            console.log("Error in Login Post request: ", err)
        })
        .then(resp => {
            console.log("loginSubmit  resp is: ", resp)
            return resp.json()
        })
        .then(user => {
            if (user){
                console.log("user returned info is: ", user)
                console.log("user BODY returned info is: ", user.body)

                localStorage.setItem('token', user.body.token); 
                this.userData = user;
                
                // To add token & userinfo to state.  
                // Wauit - Routes, which calls this, calls function it rcvs as prop from App to set state.. 
                // this.props.login(e, user);   
                // console.log("App is: ", App)
                // App.setHighLevelStateForUser(user);
                
                // this.setState({ 
                //     user_token: user.token,
                //     user_name: user.username,
                //     user_id: user.id
                // });
                
                // get error: 
                // this.props.history.push('/entry'); 
            } else {
                console.log("user not found! / user returned info is: ", user)
            }
            return user; 
        });
        console.log("d is: ", d)
        return this.userData   
    }


    logOut = (e, user) =>{
        localStorage.clear();
        this.setState({ user: null });
        this.props.logOutRemoveFromStore({ 
        });
        this.props.history.push('/login');
    }


    createUser= (e, user) =>  {
        console.log("in createUser User is : ", user)
        e.preventDefault();

        fetch(`${SQL_DB_URL}/api/user/createUser`, {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin  DOESNT SEEM TO MAKE DIFFERENCE
            headers: {
                'Content-Type': 'application/json',
                // Accepts: 'application/json'  // RUINS THIS CODE. 
            },
            body: JSON.stringify({
                user: {
                    username: user.username,
                    password:  user.password 
                }
            })
        })
        .catch(err => {
            console.log("Error in Create User Post request: ", err)
        })
        .then(resp => {
            console.log("resp is: ", resp)
            return resp
        })
        // .then(user => {
        //     console.log("user returned info is: ", user)
        //     localStorage.setItem('token', user.token); 
        //     this.props.login(e, user);   
        //     // this.setState({ 
        //     //     user_token: user.token,
        //     //     user_name: user.username,
        //     //     user_id: user.id
        //     // });
        //     this.props.history.push('/entry'); 
        //     return user; 
        // });   
    }


    render(){
        return (
            {
                loginSubmit : this.loginSubmit,
                logOut : this.logOut,
                createUser: this.createUser
            }  
        )
    }

  }
  
  export default LoginServices;







