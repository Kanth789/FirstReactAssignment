import { Link } from "react-router-dom"; 

 export const Header = () => (
    <div className="header-div">
        <div className="logo">
            <img src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png" alt="wave"/>
            <h5>Wave</h5>
        </div>
    <div className="links">
       <ul className="nav-menu">
         <li>
           <Link className="nav-link" to="/">Home</Link>
         </li>
         <li>
           <Link className="nav-link" to="/about">About</Link>
         </li>
         <li>
           <Link className="nav-link" to="/contact">Contact</Link>
         </li>
       </ul>
       </div>
       </div>
  )