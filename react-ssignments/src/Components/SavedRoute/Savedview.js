
import ToggleContext from "../ToggleContext"
import SavedItem from "./SavedItem"
const SavedView = () =>{
    return(
        
        <ToggleContext.Consumer>
            {
                value =>{
                    const {savedVideos} = value
                    const{showtoggleButton} = value
                    return(
                        
                        <div className="saved-list">
                            {savedVideos.map(eachItem=>(< SavedItem key={eachItem.id} SavedvideoDetails={eachItem}/>))}
                        </div>
                    )
                }
            }
        </ToggleContext.Consumer>
    )
}

export default SavedView