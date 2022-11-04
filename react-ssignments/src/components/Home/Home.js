import Navbar from "../Navbar/Navbar"
import ToggleContext from "../ToggleContext"

const Home = ()=>{
    return(
        <ToggleContext.Consumer>
            {
                value=>{
                    const {showtoggleButton} = value
                    console.log(showtoggleButton);
                   
                    return(
                        
                        <div className={`${showtoggleButton ? "light-theme" : "dark-theme"}`}>
            <Navbar/>
            <div className="home-img">
               {showtoggleButton ?  
                 <img src="https://assets.ccbp.in/frontend/react-js/home-light-img.png "/> 
                 :
                <img src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"/>
               }
            </div>
            </div>
                    )
                }
                
            }
        
        </ToggleContext.Consumer>
    )
}
export default Home