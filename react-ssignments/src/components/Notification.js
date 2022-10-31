import { AiFillCheckCircle } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { MdWarning } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
const Notification = (props) =>{
    const{AlertData} = props
    const{className,title,desc,tagElement} = AlertData
    return(
        <div className="card">
            <div className="card-icon">
               {props.children}
            </div>
            <div className="card-contnet">
                <h5>{AlertData.title}</h5>
                <p>{AlertData.desc}</p>
            </div>
        </div>
    )
}
export default Notification