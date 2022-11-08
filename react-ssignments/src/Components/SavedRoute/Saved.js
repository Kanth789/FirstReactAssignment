import ToggleContext from "../ToggleContext"
import SavedView from "./Savedview"
import { AiFillFire } from "react-icons/ai";

const Saved = ( ) =>{
    return(
        <ToggleContext.Consumer>
            {value=>{
                const{savedData} = value
                const showEmptyview = savedData.length === 0
                return(
                    <div className="saved-videos-conatiner">
                        <div className="saved-video-banner">
                           <div className="saved-icon">
                            <AiFillFire color="Red" size={30}/>
                            </div> 
                            <div className="saved-icon-name">
                                <h2>Saved Videos</h2>
                            </div>
                        </div>
                        <SavedView/>
                    </div>
                )
            }}
        </ToggleContext.Consumer>
    )
}
export default Saved