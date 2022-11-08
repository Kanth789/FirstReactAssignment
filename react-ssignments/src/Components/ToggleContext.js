import React from "react"
const ToggleContext = React.createContext({
    showtoggleButton : false,
    onClickedToggle : () =>{},
    savedData :[],
    addVideoItem:()=>{},
})

export default ToggleContext