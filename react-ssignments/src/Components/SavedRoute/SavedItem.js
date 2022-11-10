import { Link } from "react-router-dom"
import ToggleContext from "../ToggleContext"
import './Saved.css'

const SavedItem = (props) =>(
    <ToggleContext.Consumer>
        {value=>{
            const {SavedvideoDetails} = props
            console.log(SavedvideoDetails)
            const {publishedAt,thumbnailUrl,title,viewCount,name,profile_image_url,id} = SavedvideoDetails
       
    return(
        <Link to={`/videos/${id}`} className="nav-link">
        <div className="saved-card">
            <div className="saved-card-video-img">
                <img src={thumbnailUrl} alt="saved-card-thumbnail"/>
            </div>
            <div className="saved-card-content">
                <div className="saved-card-header">
                    <h2>{title}</h2>
                    <p>{name}</p>
                    <div className="saved-card-views">
                        <p>{viewCount}</p>
                        <span>.</span>
                        <p>{publishedAt}</p>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}}
    </ToggleContext.Consumer>
)

export default SavedItem