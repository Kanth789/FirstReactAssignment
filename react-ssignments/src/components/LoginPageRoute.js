

import { useNavigate } from "react-router-dom";
import { LoginPage } from "./LoginPage";

function LoginPageRoute(){
    const navigate = useNavigate()
    
    
  
    return <LoginPage navigate={navigate}/>
}

export {LoginPageRoute}