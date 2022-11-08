import { Link } from "react-router-dom"
import Cookies from 'js-cookie'
import ToggleContext from "../ToggleContext"
import Popup from "reactjs-popup"
import {GiHamburgerMenu} from "react-icons/gi";
import { TiDeleteOutline } from "react-icons/ti";
import { FiLogOut } from "react-icons/fi";
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
            <Popup modal
     trigger={
       <GiHamburgerMenu size="50px"/>
     }
     
     >{close =>(
        <>
         
        <div className="cross-icon">
            <TiDeleteOutline size="50px"style={{
      position: 'absolute',
      top: '-420px',
      right: '-420px',
    }}  onClick={() => close()}/>
        </div>
         
            <div className="links">
                <Link  to = "/" className="nav-link">
                <div className="link">
                    Home
                </div>
                </Link>
                <Link to ="/Saved" className="nav-link">
                <div className="link">
                Saved
                </div>
                </Link>
                <Link to ="/Gaming" className="nav-link">
                <div className="link">
                Gaming
                </div>
                </Link>
                <Link to ="/Trending" className="nav-link">
                <div className="link">
                Trending
                </div>
                </Link>
            </div>
            </>
            )}
            </Popup>
            </div>
            <div className="profile-img">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"/>
            </div>
            
            <div className={`nav-button ${showtoggleButton ? "light-theme  " : "dark-theme"}`}>
            <Link to="/login"className="nav-link"> 
                <button onClick={onClickLogout}>Logout</button>
                </Link>
            </div>

            <div className={`nav-button-hidden ${showtoggleButton ? "light-theme  " : "dark-theme"}`}>
            <Link to="/login"className="nav-link"> 
                <FiLogOut onClick={onClickLogout} size={40}/>
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