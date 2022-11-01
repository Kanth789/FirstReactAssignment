import { Link } from "react-router-dom"
import Popup from "reactjs-popup"
import {GiHamburgerMenu} from "react-icons/gi";
import { TiDeleteOutline } from "react-icons/ti";
const Header =()=>{
    return(
        <div className="header">
            <div className="header-logo">
                <img src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png" alt="header-logo"/>
            </div>
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
                <Link to ="/about" className="nav-link">
                <div className="link">
                About
                </div>
                </Link>
            </div>
            </>
            )}
            </Popup>
        </div>
        
    )
}
export default Header