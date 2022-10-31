const ProjectTimelineCard = (props)=>{
    const {courseCard} = props
    
    return(
        <div className="card">
            <div className="card-heading">
                <img src={courseCard.imageUrl}/>
            </div>
            <div className="card-para">
                <p>{courseCard.description}</p>
            </div>
            <div className="card-tag">
               <a href="">Visit</a>
            </div>
        </div>
    )
}
export default ProjectTimelineCard