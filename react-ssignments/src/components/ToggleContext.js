import React from "react"
const ToggleContext = React.createContext({
    showtoggleButton : false,
    onClickedToggle : () =>{}
})

export default ToggleContext