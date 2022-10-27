import { useNavigate } from "react-router-dom";
import  Header  from "./Header";

function LogOutPageRoute(){
    const navigate = useNavigate()
    
    
  
    return <Header navigate={navigate}/>
}

export {LogOutPageRoute}