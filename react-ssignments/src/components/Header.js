import {Link} from 'react-router-dom'
export const Header =()=>{
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
                <Link to="/login" className="nav-link">
                <button type="button" className="logout-mobile-btn">
                <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                alt="logout icon"
                className="logout-icon"
                />
                </button>
                </Link>
                
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