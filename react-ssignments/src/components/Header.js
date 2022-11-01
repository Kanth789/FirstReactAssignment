import { Link } from "react-router-dom"
import Cookies from 'js-cookie'
const Header = (props)=>{
    const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
    return(
        <div className="nav-conatiner">
            <div className="nav-bar">
                <Link className="nav-link">
            <div className="nav-bar-logo">
                <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="logo"/>
                
            </div>
            </Link>
            <div className="nav-links">

                <div className="links">
                    Home
                </div>
                <Link to="/jobs"className="nav-link">
                <div className="links">
                    Jobs
                </div>
                </Link>
            </div>
            <div className="nav-button">
                <Link to="/login"className="nav-link"> 
                <button onClick={onClickLogout}>Logout</button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Header