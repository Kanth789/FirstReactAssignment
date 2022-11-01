import {AiFillCalendar} from "react-icons/ai";
const ProjectTimelineCard = (props)=>{
    const {courseCard} = props
    
    return(
        <div className="card">
            <div className="card-heading">
                <img src={courseCard.imageUrl}/>
                
            </div>
            <div className="card-para">
                <div className="project-heading">
                <h3>{courseCard.projectTitle}</h3>
                <div className="time">
                    <AiFillCalendar/>
                    <p>{courseCard.duration}</p>
                </div>
                </div>
                <p>{courseCard.description}</p>
            </div>
            <div className="card-tag">
               <a href="">Visit</a>
            </div>
        </div>
    )
}
export default ProjectTimelineCard