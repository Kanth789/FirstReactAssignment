import { Component } from "react";

import EventItem from "./EventItem";
const eventList = 
    [
       {
         id:1,
         imageUrl:'https://images.pexels.com/photos/175658/pexels-photo-175658.jpeg?auto=compress&cs=tinysrgb&w=300',
         registrationImgUrl:"https://assets.ccbp.in/frontend/react-js/events-register-img.png",
         name:'Canada Dance Festival',
         location:'Canada,America',
         registrationStatus:'YET_TO_REGISTER'
       },
       {
        id:2,
        imageUrl:'https://images.pexels.com/photos/8566097/pexels-photo-8566097.jpeg?auto=compress&cs=tinysrgb&w=300',
        registrationImgUrl:"https://assets.ccbp.in/frontend/react-js/events-register-img.png",
        name:'Puthanalkkal Kalavela',
        location:'Karanatka,India',
        registrationStatus:'REGISTRATIONS_CLOSED'
      },
      {
        id:3,
        imageUrl:'https://images.pexels.com/photos/175658/pexels-photo-175658.jpeg?auto=compress&cs=tinysrgb&w=300',
        registrationImgUrl:"https://assets.ccbp.in/frontend/react-js/events-register-img.png",
        name:'Nithyopahara',
        location:'Kerala,India',
        registrationStatus:'REGISTERED'
      },
      {
        id:4,
        imageUrl:'https://images.pexels.com/photos/8566097/pexels-photo-8566097.jpeg?auto=compress&cs=tinysrgb&w=300',
        registrationImgUrl:"https://assets.ccbp.in/frontend/react-js/events-register-img.png",
        name:'Shivam',
        location:'Andhra Pradesh,India',
        registrationStatus:'YET_TO_REGISTER'
      },
      {
        id:5,
        imageUrl:'https://images.pexels.com/photos/175658/pexels-photo-175658.jpeg?auto=compress&cs=tinysrgb&w=300',
        registrationImgUrl:"https://assets.ccbp.in/frontend/react-js/events-register-img.png",
        name:'Janapada Kolatam',
        location:'TamilNadu,India',
        registrationStatus:'REGISTRATIONS_CLOSED'
      },
      {
        id:6,
        imageUrl:'https://images.pexels.com/photos/8566097/pexels-photo-8566097.jpeg?auto=compress&cs=tinysrgb&w=300',
        registrationImgUrl:"https://assets.ccbp.in/frontend/react-js/events-register-img.png",
        name:'Colonial Fest',
        location:'Washington,America',
        registrationStatus:'REGISTERED'
      }

    ]

    const registerStages = {
        initial:'',
        success: 'REGISTERED',
        failure: 'REGISTRATIONS_CLOSED',
        inProgress :'YET_TO_REGISTER'
      }
 
class Events extends Component{
    state={
       
        stateregisterStatus:registerStages.initial
    }
    renderYetToRegister = ()=>{
        return(
            <div className="event-register-deatil">
            <div className="img-conatiner">
                <img src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"  alt="yet-to-register"/>
            </div>
            <div className="para">
                <p>A live Perfomance brings so much to your relationship with dance.Seeing dance live can often make you fail today in love with this beatuiful art form</p>
            </div>
            <button>
                Register Here
            </button>
        </div>
        )
    }
    OnclickedEventStatus = (registrationStatus) =>{
        const{stateregisterStatus}= this.state
       this.setState({stateregisterStatus:registrationStatus})
       console.log(stateregisterStatus)
    }
    renderRegisterClosed=()=>{
        return(
            <div className="event-register-deatil">
            <div className="img-conatiner">
                <img src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"  alt="closed-img"/>
            </div>
            <div className="para">
                <h5>REgistrations Are Closed Now!</h5>
                <p>Stay tuned,We will reopen the Registrations soons!</p>
            </div>
            
        </div>
        )
    }
    renderAlreadyRegister = ()=>{
        return(
            <div className="event-register-deatil">
            <div className="img-conatiner">
                <img src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"  alt="registred-img"/>
            </div>
            <div className="para">
                <h5>You have already registered for the event</h5>
          
            </div>
            
        </div>
        )
    }
    renderRegisterInitial = ()=>{
        return(
            <div className="event-register-deatil">
                <div className="para">
                <h5>Click on an event , to <br></br>
                    view ist registration deatils</h5>
          
            </div>
            </div>
        )
    }

    SwitchFunction (){
        const{stateregisterStatus} = this.state
        
        switch (stateregisterStatus) {
            case registerStages.success:
                return this.renderAlreadyRegister()
            case registerStages.failure:
                return this.renderRegisterClosed()
            case registerStages.inProgress:
                return this.renderYetToRegister()
            default:
      
                  return this.renderRegisterInitial()
    }
    }
    render(){
        
        return(
            <div className="main-conatiner">
                <div className="main">
                   
                    <div className="event-conatiner">
                        <div className="evnets">
                    <div className="header">
                        <h2>Events</h2>
                    </div>
                    <div className="event-card-conatiner">
                    
                    {eventList.map(eachItem=>(<EventItem eventDetails={eachItem} key={eachItem.id} OnclickedEventStatus={this.OnclickedEventStatus}/>))}
                    </div>
                    </div>
                    <div className="event-register">
                        {this.SwitchFunction()}
                       
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events