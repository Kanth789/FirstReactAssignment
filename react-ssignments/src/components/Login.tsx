import {Component} from 'react'
import Cookies from 'js-cookie'
import './Login.css';
import { Redirect } from 'react-router-dom';
import {observer} from 'mobx-react';
import LoginFormStore from '../Stores/LoginFormStore';
import React from 'react';
import { useHistory, RouterProps } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const  Login = observer(()=> {


  const history = useHistory()
 
    const loginFormStore = LoginFormStore
  
  const onChangeUsername = (event:React.ChangeEvent<HTMLInputElement>) => {
    loginFormStore.setUserName(event.target.value)
  }

  const onChangePassword = (event:React.ChangeEvent<HTMLInputElement>) => {
    loginFormStore.setPassword (event.target.value)
  }

  const  onSubmitSuccess = (jwtToken: string) => { 
    Cookies.set('jwt_token', jwtToken)
   history.replace('/')
  }

  const onSubmitFailure = (errorMsg:string) => {
    loginFormStore.setErrorMsg( errorMsg)
  }

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const {username, password} = loginFormStore
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  const renderPasswordField = () => {
  const{password} = loginFormStore
  
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={onChangePassword}
        />
      </>
    )
  }

  const renderUsernameField = () => {
    const{username} = loginFormStore
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
          onChange={onChangeUsername}
        />
      </>
    )
  }

  
    const {error, error_msg} = loginFormStore
    const jwtToken = Cookies.get('jwt_token')
      if(jwtToken !== undefined)
      {
        return <Redirect to = "/"/>
      }
      else{
        console.log("undefined")
      }
    return (
      <div className="login-form-container">
        
        
        <form className="form-container" onSubmit={submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{renderUsernameField()}</div>
          <div className="input-container">{renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {error && <p className="error-message">*{error_msg}</p>}
        </form>
      </div>
    )
  }

)
export default withRouter(Login)