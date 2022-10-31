const CourseTimelineCard = (props)=>{
    const {courseCard} = props
    
    return(
        <div className="card">
            <div className="card-heading">
                <h3>{courseCard.title}</h3>
            </div>
            <div className="card-para">
                <p>{courseCard.description}</p>
            </div>
            <div className="card-tag">
                <p>{courseCard.tagsList.map(eachItem=>eachItem.tagItem)}</p>
            </div>
        </div>
    )
}
export default CourseTimelineCard