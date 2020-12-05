
import React, { Component } from 'react';

class LoginServices extends Component {
// function LoginServices(props) {    
    
    loginSubmit= (e, user) =>  {
        e.preventDefault();
        if (true) {
        fetch(`${URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accepts: 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: user.username,
                    password:  user.password 
                }
            })
        })
        .then(resp => {
            return resp.json() 
        })
        .then(user => {
            localStorage.setItem('token', user.token); 
            this.props.login(e, user);   
            // this.setState({ 
            //     user_token: user.token,
            //     user_name: user.username,
            //     user_id: user.id
            // });
            this.props.history.push('/entry'); 
            return user; 
        });  
        }
    }




    logOut = (e, user) =>{
        localStorage.clear();
        this.setState({ user: null });
        this.props.logOutRemoveFromStore({ 
        });
        this.props.history.push('/login');
    }



    render(){
        return (
            {
                loginSubmit : this.loginSubmit,
                logOut : this.logOut
            }  
        )
    }

  }
  
  export default LoginServices;







