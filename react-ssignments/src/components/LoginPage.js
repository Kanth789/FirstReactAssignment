import { Component } from "react";

class LoginPage extends Component{
    state = { isLopgin:true }
    readerButton(){
        const {isLopgin} = this.state
        if(isLopgin === true)
        {
            return <button onClick={this.headerChange}>Logout</button> 
        }else{
            return <button onClick={this.headerChange}>Login</button>
        }
    }
    headerChange = () =>{
        this.setState((prevState)=>({isLopgin:!prevState.isLopgin}))
    }
  render()
  {
    const {isLopgin} = this.state
    return(

        <div className="main-conatiner">
            <div className="main">
            {isLopgin ? <h4>Welcome User</h4>:<h4>Please Login</h4> }
            {/* <h4>Welcome User</h4> */}
            {this.readerButton()}
            </div>
        </div>
    )
  }
}

export default LoginPage