import { Component } from "react"
import { NavLink } from "react-router-dom"
class  Leftbar extends Component{ 
    state ={
        activeLink :'true'
    } 
    OnclikedLeftBar = ( )=>{
        this.setState(prevState=>({activeLink:!prevState.activeLink}))
      }
 render(){
    const {leftbarLinks} = this.props
    const{uniqueId,name} = leftbarLinks
    const{activeLink} = this.state
    return(
           <NavLink to ={`/${uniqueId}`} className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "")
          }>
            <div className={`leftbar-link ${uniqueId}`} onClick={this.OnclikedLeftBar} >
                
                <p>{name}</p>
            </div>
            </NavLink>
   
    )
 }
    
}
export default Leftbar 