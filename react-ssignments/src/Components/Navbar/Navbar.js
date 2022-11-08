import { Link } from "react-router-dom"
import Cookies from 'js-cookie'
import ToggleContext from "../ToggleContext"
import './Navbar.css'
const Navbar = (props)=>{
   
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
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
        <div className={`${showtoggleButton ? "light-theme  " : "dark-theme"}`}>
            <div className="nav-bar">
                <div className="navigations">
               
            <div className="nav-bar-logo">
            {showtoggleButton  ?   
                              <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"/> 
                              : 
                              <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"/>
                            }
            </div>
           
            <div className="nav-links">
                <div className="toggle-icon" onClick={onClicked}>
            {showtoggleButton  ?   
                              <img src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"/> 
                              : 
                              <img src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"/>
            }
            </div>
            <div className="pop-up">
                
            </div>
            <div>
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"/>
            </div>
            
            <div className={`nav-button ${showtoggleButton ? "light-theme  " : "dark-theme"}`}>
            <Link to="/login"className="nav-link"> 
                <button onClick={onClickLogout}>Logout</button>
                </Link>
            </div>
            </div>
            </div>
            </div>
        </div>
                )
        }
    }
    
        </ToggleContext.Consumer>
    )
}

export default Navbar