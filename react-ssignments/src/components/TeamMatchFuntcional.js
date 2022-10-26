import { useParams } from "react-router-dom";
import { TeamMatches } from "./TeamMatches";

function TeamMatchFuntcional(){
    const params=useParams()
    const id = params
    console.log(id)
  
    return <TeamMatches id={id}/>
}

export {TeamMatchFuntcional}