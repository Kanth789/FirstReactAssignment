
import Navbar from "../Navbar/Navbar"
import ToggleContext from "../ToggleContext"
const About = ()=>{
    return(
        <ToggleContext.Consumer>
            {
                value=>{
                    const{showtoggleButton} = value
                    return(
                        <div className="main-conatiner">
                            <Navbar/>
                            <div className="home-img">
                               {showtoggleButton ?  
                                    <img src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"/> 
                                    : 
                                    <img src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"/>
                               }
                            </div>
                        </div>
                    )
                }
            }
        
        </ToggleContext.Consumer>
    )
}
export default About