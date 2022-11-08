import ToggleContext from "../ToggleContext"
import './Saved.css'

const SavedItem = (props) =>(
    <ToggleContext.Consumer>
        {value=>{
            const {SavedvideoDetails} = props
            const {published_at,thumbnail_url,title,view_count,name,profile_image_url,id} = SavedvideoDetails
       
    return(
        
        <div className="saved-card">
            <div className="saved-card-video-img">
                <img src={thumbnail_url} alt="saved-card-thumbnail"/>
            </div>
            <div className="saved-card-content">
                <div className="saved-card-header">
                    <h2>{title}</h2>
                    <p>{name}</p>
                    <div className="saved-card-views">
                        <p>{view_count}</p>
                        <span>.</span>
                        <p>{published_at}</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}}
    </ToggleContext.Consumer>
)

export default SavedItem