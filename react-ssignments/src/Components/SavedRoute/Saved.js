import ToggleContext from "../ToggleContext"
import SavedView from "./Savedview"
import { AiFillFire } from "react-icons/ai";
import { Component } from "react";

class  Saved extends Component {
    renderShowemptyView = ()=>{
        return(
            <div className="empty-view-conatiner">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png " alt="empty-view-saved"/>
            </div>
        )
    }
    render(){ 
    return(
        <ToggleContext.Consumer>
            {value=>{
                const{savedVideos} = value
                const{showtoggleButton} = value
                const showEmptyview = savedVideos.length === 0
                return(
                   
                    <div className= {`saved-videos-conatiner ${showtoggleButton ? "" : "dark-theme-conatiner"}`}>
                        <div className={`saved-video-banner ${showtoggleButton ? "" : "saved-dark-theme-conatiner"}`}>
                           <div className="saved-icon">
                            <AiFillFire color="Red" size={30}/>
                            </div> 
                            <div className="saved-icon-name">
                                <h2>Saved Videos</h2>
                            </div>
                        </div>
                        {showEmptyview ?  this.renderShowemptyView() :<SavedView/>}
                    </div>
                   
                )
            }}
        </ToggleContext.Consumer>
    )
        }
}
export default Saved