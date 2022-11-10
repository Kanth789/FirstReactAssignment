import {Component} from 'react'
import Cookies from 'js-cookie'
import './Login.css';
import { Redirect } from 'react-router-dom';
import ToggleContext from '../ToggleContext';
class Login extends Component {

  static contextType = ToggleContext
  
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: 'false'
  }
  
  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
    const context = this.context;
    
    const layout = context.jwtaccesToken();
    
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
    
  }
 
  renderPasswordField = () => {
    const {password,showPassword} = this.state
    return (
      <>
        <label className="input-label" >
          PASSWORD
        </label>
        <input
          type={showPassword ?"password" : "text" }
          id= "password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }
  renderShowPassword = () => {
    const {username} = this.state
    return (
      <>
       <input
          type="checkbox"
          id="checkbox"
          onChange={this.showFunction}
        />
        <label className="input-label" >
         Show Password
        </label>
       
      </>
    )
  }
//   <input type="checkbox" onClick={this.showFunction()}>Show Password</input>
    showFunction = () =>{
        this.setState(prevState=>({showPassword:!prevState.showPassword}))
    }
  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
      if(jwtToken !== undefined)
      {
        return <Redirect to = "/"/>
      }
     
    return (
      <ToggleContext.Consumer>
        {
          value=>{
            const{jwtaccesToken,OnJwtTokken} = value
          return(
      <div className="login-form-container">
        
        
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className=' showpassword'>{this.renderShowPassword()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
          )
        }
      }
      </ToggleContext.Consumer>
      
    )
  }
}

export default Login