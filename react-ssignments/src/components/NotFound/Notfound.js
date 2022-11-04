import Navbar from "../Navbar/Navbar"
import ToggleContext from "../ToggleContext"
const NotFound = ()=>{
       
      return(
        <ToggleContext.Consumer>
          {value=>{
             const {showtoggleButton} = value
             console.log(showtoggleButton);
          
        <div className={`${showtoggleButton ? "light-theme" : "dark-theme"}`}>
        <Navbar/>
        <div className="home-img">
            <img src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"/>
        </div>
        </div>
         }
         }
        </ToggleContext.Consumer>
     
     )
    
}

export default NotFound