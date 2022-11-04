import { Link } from "react-router-dom"
import ToggleContext from "../ToggleContext"
const Navbar =()=>{

    return(
        <ToggleContext.Consumer>
            {
                value=>{
                    const{showtoggleButton,onClickedToggle,themeName} = value
                    const onClicked = () => {
                        console.log(showtoggleButton)
                        onClickedToggle()
                    }
                    return(
                        
                        <div className="header">
                            <div className="header-logo">
                              {showtoggleButton  ? 
                                        <img src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png" alt="header-logo"/> 
                                        : 
                                        <img src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"/>
                              }
                            </div>
                            <div className="links">
                                <Link  to = "/" className="nav-link">
                                <div className="link">
                                    Home
                                </div>
                                </Link>
                                <Link to ="/about" className="nav-link">
                                <div className="link">
                                About
                                </div>
                                </Link>
                            </div>
                            <div className="toggle-icon" onClick={onClicked}>
                            {showtoggleButton  ?   
                              <img src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"/> 
                              : 
                              <img src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"/>
                            }
                            </div>
                        </div>
                    )
                }
            }
        
        </ToggleContext.Consumer>
    )
    
}
export default Navbar