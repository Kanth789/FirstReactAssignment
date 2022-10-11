import { Component } from "react";

class Subscribe extends Component{
    state = { isLoggedIn: false }

    textChange=() =>{
        this.setState((prevState)=>({isLoggedIn:!prevState.isLoggedIn}))
    }
    renderAuthButton = () => {
        const {isLoggedIn} = this.state
        console.log(isLoggedIn,'isLoggedIn')
        if (isLoggedIn === true) {
          return <button className="button" onClick={this.textChange}> Subscribe</button>
        }
        return <button  className="button" onClick={this.textChange}>Subscribed</button>
      }
    

    render(){
      
        return(
            <div className="conatiner">
                <h3 className="heading">Welcome</h3>
                <p className="para">Thank you!Happy Learning</p>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default Subscribe