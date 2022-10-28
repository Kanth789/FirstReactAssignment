/* eslint-disable jsx-a11y/alt-text */
const EventItem = (props)=>{
    const{eventDetails,OnclickedEventStatus} = props
    const{id,imageUrl,name,location,registrationStatus,registrationImgUrl} = eventDetails
    
    const OnclickedEvent = () =>
    {
        
        OnclickedEventStatus(registrationStatus)
        
    }
    return(
        <div className="event-card" >
            <div className="event-card-img">
                <img src={imageUrl} onClick={OnclickedEvent}/>
            </div>
            <div className="event-name-place">
                <h4>{name}</h4>
                <h6>{location}</h6>
            </div>
        </div>
    )
}

export default EventItem