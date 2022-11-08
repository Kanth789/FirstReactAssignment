import './Trending.css'
const TrendingItem = (props) =>{
    const {TrendingDetails} = props
    const {published_at,thumbnail_url,title,view_count,name,profile_image_url,id} = TrendingDetails
    return(
        <div className="Trending-card">
        <div className="Trending-card-video-img">
            <img src={thumbnail_url} alt="Trending-card-thumbnail"/>
        </div>
        <div className="Trending-card-content">
            <div className="Trending-card-header">
                <h2></h2>
                <h2>{title}</h2>
                <p>{name}</p>
                <div className="Trending-card-views">
                    <p>{view_count}</p>
                    <span>.</span>
                    <p>{published_at}</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default TrendingItem