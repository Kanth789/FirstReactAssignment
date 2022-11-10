import React from "react"
const ToggleContext = React.createContext({
    showtoggleButton : false,
    onClickedToggle : () =>{},
    jwtaccesToken:'',
    OnJwtTokken:()=>{},
    addSavedVideos: () => {},
    savedVideos: [],
    
})

export default ToggleContext