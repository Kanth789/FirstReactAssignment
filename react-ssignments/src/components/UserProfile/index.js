const UserProfile = (props) =>{
    const {userDetailsList} = props
    // const {imageUrl} = userDetails
    return(
    <div className="App">
        <img src={userDetailsList.imageUrl}/>
        <h4>{userDetailsList.name}</h4>
        <h5>{userDetailsList.role}</h5>
        
    </div>
    )
}


export default UserProfile