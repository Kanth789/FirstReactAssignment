import {Link,withRouter,useHistory} from 'react-router-dom';
import Cookies from 'js-cookie';


 const Header =()=>{
     const history = useHistory()
    const onClickLogout = ()=>{
        
        Cookies.remove('jwt_token')
        history.replace('/login')
    }
    return(
        <div className="header">
            <div className="header-logo">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="img-logo"/>
            </div>
            <div className="header-links">
                <Link to="/" className="nav-link">
                <div className="link">Home</div>
                </Link>
                <Link to="/products" className="nav-link">
                    <div className="link">Products</div>
                </Link>
                <Link to="/cart" className="nav-link">
                <div className="link">Cart</div>
                </Link>
                
                <button type="button" className="logout-mobile-btn" onClick={onClickLogout}>
                <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                alt="logout icon"
                className="logout-icon"
                />
                </button>
                
                
            </div>
            {/* <div className="button">
                <button type="button" className="logout-mobile-btn">
                <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                alt="logout icon"
                className="logout-icon"
                />
                </button>
            </div> */}
        </div>
    )
}

export default Header