import { Component } from "react";

class LoginPage extends Component{
    state ={
        username:'',
        password:'',
        showerrorMsg:false,
        errorMessage:''
    }
    renderUsernameField = ()=>{
        const {username} = this.state
        return (
          <>
            <label>
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="username-input"
              value={username}
              placeholder="username"
              onChange={this.onChangeUsername}
            />
          </>
        )
    }
    renderPasswordField = () =>{
        const {password} = this.state
        return (
          <>
            <label>
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="password-input"
              value={password}
              placeholder="Password"
              onChange={this.onChangePassword}
            />
          </>
        )
    }
    button =( )=>{
      return (
        <>
          <button>Login</button>
        </>
      )
    }
    onChangeUsername = event => {
        this.setState({username: event.target.value})
      }
    
      onChangePassword = event => {
        this.setState({password: event.target.value})
      }
    submitForm = async (event)=>{
        event.preventDefault()
        const{username,password} = this.state
        const userDetails = {username, password}
        const url="https://apis.ccbp.in/login"
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
          }
          const response = await fetch(url, options)
        
          const data = await response.json()
          
          if(response.ok===true)
          {
            this.onSubmitSuccess()
          }
          else{
            this.setState({errorMessage:data.error_msg,
              showerrorMsg:true
          })
          }
          
    }
    onSubmitSuccess = ()=>{
        const {navigate} = this.props
        navigate('/')
    }
    render(){
      const {showerrorMsg,errorMessage} = this.state
        return(
            <div className="login-form-conatiner">
                <div className="login-image">
                    <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="login-pic"/>
                </div>
                <div className="form">
                    <form className="form-container" onSubmit={this.submitForm}>
                            <img
                                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                                className="login-website-logo-desktop-image"
                                alt="website logo"
                            />
                            <div className="input-container">{this.renderUsernameField()}</div>
                            <div className="input-container">{this.renderPasswordField()}</div>
                            <div className="input-container">{this.button()}</div>
                            {/* <button type="submit" className="login-button">
                                Login
                            </button> */}
                            {showerrorMsg && (<p className="red">*{errorMessage}</p>)}
                            
                    </form>
                </div>
            </div>
        )
    }
}

export  {LoginPage}