


    // componentDidMount() {
       

    
        let token = localStorage.getItem('token');
        console.log("Token in frontend App.js: ", token)
        console.log("Token === undefined?  ", token== "undefined")  // undefined FALSE "undefined" TRUE
  
        if (token && (token != "undefined")) {
            fetch(`${URL}/retrieve_user`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                Accepts: 'application/json',
                Authorization: `${token}`
                }
            })
            .then(resp => resp.json())
            .then(user => {
                this.setState({ user: user });
            });
        }
  
  
    //   }  // end componentDidMount