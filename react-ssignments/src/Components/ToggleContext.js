import React from "react"
const ToggleContext = React.createContext({
    showtoggleButton : false,
    onClickedToggle : () =>{},
    jwtaccesToken:'',
    OnJwtTokken:()=>{},
    // addSavedVideos: () => {},
    savedVideos: [],
    toggleSavedvideo:()=>{},
    likedVideos:[],
    toggleLikedvideo:()=>{},
    DislikedVideo:[],
    toggleDislikedvideo:()=>{}
    
})

export default ToggleContext