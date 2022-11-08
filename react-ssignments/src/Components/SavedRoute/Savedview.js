
import ToggleContext from "../ToggleContext"
import SavedItem from "./SavedItem"
const SavedView = () =>{
    return(
        
        <ToggleContext.Consumer>
            {
                value =>{
                    const {savedData} = value
                    return(
                        <div className="saved-list">
                            {savedData.map(eachItem=>(< SavedItem key={eachItem.id} SavedvideoDetails={eachItem}/>))}
                        </div>
                    )
                }
            }
        </ToggleContext.Consumer>
    )
}

export default SavedView