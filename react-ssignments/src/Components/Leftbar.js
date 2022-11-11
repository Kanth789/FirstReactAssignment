import {AiOutlineHome}  from "react-icons/ai";
import {AiOutlineFire} from "react-icons/ai";
import { SiYoutubegaming } from "react-icons/si";
import { MdPlaylistAdd } from "react-icons/md";
import { Component } from "react"
import { NavLink } from "react-router-dom"
import SocialMedia from "./SocialMedia";
class  Leftbar extends Component{ 
    state ={
        activeLink :'true'
    } 
    OnclikedLeftBar = ( )=>{
        this.setState(prevState=>({activeLink:!prevState.activeLink}))
      }
 render(){
    const {leftbarLinks} = this.props
    const{uniqueId,name,imgUrl,altName,icon} = leftbarLinks
    const{activeLink} = this.state
    
    return(
      <>
           <NavLink to ={`/${uniqueId}`} className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "")
          }>
            <div className={`leftbar-link ${uniqueId}`} onClick={this.OnclikedLeftBar} >
                <div className="leftbar-conatiner">
                 <div className="icon">{icon}</div>
                <p>{name}</p>
                </div>
                
            </div>
            </NavLink>
           
   </>
    )
 }
    
}
export default Leftbar 