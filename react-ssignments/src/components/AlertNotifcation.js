import { Component } from "react";
import Notification from "./Notification";
import { AiFillCheckCircle } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { MdWarning } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
const AlertList = [
    {
        uniqueNo:1,
        title:'Success',
        desc:"You can access all the files in the folder",
        tagElement :<AiFillCheckCircle/>,
        className: "AiFillCheckCircle"
    },
    {
        uniqueNo:2,
        title:'Error',
        desc:"Sorry,you are not authorized to have access to delete the file",
        tagElement :<RiErrorWarningFill/>,
        className : "RiErrorWarningFill"
    },
    {
        uniqueNo:3,
        title:'Warning',
        desc:"Viewers of this file can see comments and suggestions",
        tagElement :<MdWarning/>,
        className :"MdWarning"
    },
    {
        uniqueNo:4,
        title:'Info',
        desc:"Anyone on the internet can view these files",
        tagElement :<GrFormClose/>,
        className :"GrFormClose "
    }

]


class AlertNotifcation extends Component{
    render()
    {
        return(
            <div className="main-conatiner">
                <div className="main">
                    <div className="header">
                        <h2>Alert Notifications</h2>
                    </div>
                    <div className="notification-container">
                    {AlertList.map(eachItem=>(<Notification AlertData={eachItem} key={eachItem.id}>
                           {eachItem.tagElement}
                    </Notification>))}
                    </div>
                </div>
            </div>
        )
    }
}
export default AlertNotifcation