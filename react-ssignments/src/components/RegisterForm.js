import { Component } from "react";

class RegisterForm extends Component{
    state ={
        firstName:'',
        lastName:'',
        isFormSubmitted:false,
        FirstMessage:'',
        SecondMessage:''
    }
    validateFirstName = ()=>{
        const{firstName} = this.state
        return firstName !== ''
    }
    validateLastName = ()=>{
        const{lastName} = this.state
        return lastName !== ''
    }
    onBlurFirstName = ()=>{
        const isValidateFirstName = this.validateFirstName()
        this.setState({FirstMessage : !isValidateFirstName})
    }
    onBlurLastName = ()=>{
        const isValidateLastName = this.validatelLastName()
        this.setState({SecondMessage : !isValidateLastName})
    }
    renderUsernameField = ()=>{
        const {firstName} = this.state
        return (
          <>
            <label>
              USERNAME
            </label>
            <input
              type="text"
              id="firstName"
              className="username-input"
              value={firstName}
              placeholder="firstName"
              onChange={this.onChangeUsername}
            />
          </>
        )
    }
    renderPasswordField = () =>{
        const {lastName} = this.state
        return (
          <>
            <label>
              lastName
            </label>
            <input
              type="text"
              id="lastName"
              className="lastName-input"
              value={lastName}
              placeholder="lastName"
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
        this.setState({firstName: event.target.value})
      }
    
      onChangePassword = event => {
        this.setState({lastName: event.target.value})
      }
    submitForm = async (event)=>{
        event.preventDefault()
        const{firstName,lastName} = this.state
        
        
          if(firstName && lastName !== '')
          {
            this.setState({isFormSubmitted:true})
          }
          else{
            this.setState({isFormSubmitted:false,FirstMessage:!this.validateFirstName,SecondMessage:!this.validateLastName})
          }
        }
    
          
    renderForm =() =>{
        const {FirstMessage,SecondMessage} = this.state
        return(
        <div className="form">
           
        <form className="form-container" onSubmit={this.submitForm}>
                
                <div className="input-container">{this.renderUsernameField()}</div>
                {FirstMessage && (<p className="red">*Required</p>)}
                <div className="input-container">{this.renderPasswordField()}</div>
                {SecondMessage && (<p className="red">*Required</p>)}
                <div className="input-container">{this.button()}</div>
                
               
                
        </form>

    </div>
        )
    }  
    
    renderFormSumbitted = () =>{
        <div className="form">
            <div className="img">
                <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "/>
            </div>
            <div className="para">Submitted Sucessfully</div>
            <div className="button">
                <button>Another-Form</button>
            </div>
        </div>
    }
    render(){
      const {isFormSubmitted} = this.state
        return(
            <div className="login-form-conatiner">
                
              {isFormSubmitted ? this.renderFormSumbitted():this.renderForm()}  
            </div>
        )
    }
}

export  {RegisterForm}