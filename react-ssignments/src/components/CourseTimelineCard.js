import {AiFillClockCircle} from "react-icons/ai";
const CourseTimelineCard = (props)=>{
    const {courseCard} = props
    
    return(
        <div className="card">
            <div className="card-heading">
                <h3>{courseCard.courseTitle}</h3>
                <div className="time">
                    <AiFillClockCircle/>
                    <p>{courseCard.duration}</p>
                </div>
            </div>
            <div className="card-para">
                <p>{courseCard.description}</p>
            </div>
            <div className="card-tag">
                <ul>{courseCard.tagsList.map(eachItem=><li>{eachItem.tagItem}</li>)}</ul>
            </div>
        </div>
    )
}
export default CourseTimelineCard